// 导航栏和页脚国际化配置
// Navigation and Footer Internationalization Configuration

const i18nNavFooter = {
  'zh-CN': {
    nav: {
      home: '首页',
      architecture: '架构',
      products: '产品',
      integration: '集成',
      download: '下载',
      github: 'GitHub'
    },
    footer: {
      description: '开放协议基础设施,通过结构化数据 API 连接 AI 智能体与真实网络。',
      copyright: '© 2025 AIHub. MIT 许可证。',
      product: {
        title: '产品',
        architecture: '架构',
        products: '产品',
        downloads: '下载',
        integration: '集成'
      },
      resources: {
        title: '资源',
        github: 'GitHub',
        releases: '发布版本',
        issues: '问题反馈'
      },
      legal: {
        title: '法律',
        privacy: '隐私政策',
        copyright: '版权声明'
      }
    }
  },
  'en': {
    nav: {
      home: 'Home',
      architecture: 'Architecture',
      products: 'Products',
      integration: 'Integration',
      download: 'Download',
      github: 'GitHub'
    },
    footer: {
      description: 'Open protocol infrastructure that bridges AI agents with the real web through structured data APIs.',
      copyright: '© 2025 AIHub. MIT License.',
      product: {
        title: 'Product',
        architecture: 'Architecture',
        products: 'Products',
        downloads: 'Downloads',
        integration: 'Integration'
      },
      resources: {
        title: 'Resources',
        github: 'GitHub',
        releases: 'Releases',
        issues: 'Issues'
      },
      legal: {
        title: 'Legal',
        privacy: 'Privacy Policy',
        copyright: 'Copyright'
      }
    }
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18nNavFooter;
}
