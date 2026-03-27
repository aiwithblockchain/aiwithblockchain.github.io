// i18n 核心框架
// Core i18n Framework

class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.translations = {};
    this.observers = [];
  }

  // 检测浏览器语言
  detectLanguage() {
    // 首先检查本地存储的用户偏好
    const savedLang = localStorage.getItem('aihub-lang');
    if (savedLang) {
      return savedLang;
    }

    // 检测浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;

    // 中文语言代码映射到 zh-CN
    if (browserLang.startsWith('zh')) {
      return 'zh-CN';
    }

    // 其他语言默认使用英文
    return 'en';
  }

  // 注册翻译数据
  registerTranslations(translations) {
    this.translations = { ...this.translations, ...translations };
  }

  // 获取翻译文本
  t(key, lang = this.currentLang) {
    const keys = key.split('.');
    let value = this.translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // 如果找不到翻译,返回 key
      }
    }

    return value || key;
  }

  // 切换语言
  setLanguage(lang) {
    if (this.currentLang === lang) return;

    this.currentLang = lang;
    localStorage.setItem('aihub-lang', lang);

    // 更新 HTML lang 属性
    document.documentElement.lang = lang;

    // 更新所有带 data-i18n 属性的元素
    this.updateDOM();

    // 通知观察者
    this.notifyObservers(lang);
  }

  // 更新 DOM 中所有需要翻译的元素
  updateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);

      // 支持 HTML 内容(如 <br/> 标签)
      if (translation.includes('<br')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    });
  }

  // 添加语言变化观察者
  addObserver(callback) {
    this.observers.push(callback);
  }

  // 通知所有观察者
  notifyObservers(lang) {
    this.observers.forEach(callback => callback(lang));
  }

  // 获取当前语言
  getCurrentLanguage() {
    return this.currentLang;
  }

  // 切换语言(中英文互换)
  toggleLanguage() {
    const newLang = this.currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    this.setLanguage(newLang);
  }
}

// 创建全局 i18n 实例
window.i18n = new I18n();
