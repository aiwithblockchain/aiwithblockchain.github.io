// i18n 数据整合
// Integrated i18n Data

// 导航和页脚配置
// Navigation and footer configuration
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

// Hero 区域和架构图配置
// Hero and Architecture configuration
const i18nHeroArch = {
  'zh-CN': {
    hero: {
      badge: '开放协议 · v0.1 · Alpha',
      title: '90% Token <br/><span class="text-primary">削减。</span>',
      description: 'AIHub 是一个开放的基础设施协议,将浏览器会话和本地应用转化为结构化数据 API——大幅降低 Token 成本,实现可靠的大规模智能体自动化。',
      downloadBtn: '立即下载',
      githubBtn: '查看 GitHub',
      activeNode: '活跃节点'
    },
    architecture: {
      title: '核心架构',
      subtitle: '通过 LocalBridge 网格实现实时指令路由。',
      legend: {
        instructions: 'REST API (指令)',
        response: 'WebSocket (响应)'
      },
      topNodes: {
        aiAgent: {
          title: 'AI 智能体',
          description: '自主逻辑'
        },
        ideSdk: {
          title: 'IDE/SDK',
          description: '手动注入'
        },
        shellScripts: {
          title: 'Shell 脚本',
          description: 'CLI 编排'
        }
      },
      centralNode: {
        title: 'LocalBridge',
        description: '核心路由器'
      },
      bottomNodes: {
        otherExtension: {
          title: '其他扩展',
          description: '第三方浏览器扩展可以加入协议。'
        },
        aiClaw: {
          title: 'aiClaw',
          description: '浏览器原生自动化模块,用于 DOM 操作。'
        },
        tweetClaw: {
          title: 'TweetClaw',
          description: '社交图谱交互节点,用于无头线程监控。'
        },
        otherSoftware: {
          title: '其他软件',
          description: '任何应用都可以实现 AIHub 协议。'
        }
      },
      websocket: 'WEBSOCKET'
    }
  },
  'en': {
    hero: {
      badge: 'Open Protocol · v0.1 · Alpha',
      title: '90% Token <br/><span class="text-primary">Reduction.</span>',
      description: 'AIHub is an open infrastructure protocol that turns browser sessions and local apps into structured data APIs — dramatically cutting token costs and unlocking reliable agentic automation at scale.',
      downloadBtn: 'Download Now',
      githubBtn: 'View on GitHub',
      activeNode: 'Active Node'
    },
    architecture: {
      title: 'Core Architecture',
      subtitle: 'Real-time instruction routing via the LocalBridge mesh.',
      legend: {
        instructions: 'REST API (Instructions)',
        response: 'WebSocket (Response)'
      },
      topNodes: {
        aiAgent: {
          title: 'AI Agent',
          description: 'Autonomous Logic'
        },
        ideSdk: {
          title: 'IDE/SDK',
          description: 'Manual Injection'
        },
        shellScripts: {
          title: 'Shell Scripts',
          description: 'CLI Orchestration'
        }
      },
      centralNode: {
        title: 'LocalBridge',
        description: 'Core Router'
      },
      bottomNodes: {
        otherExtension: {
          title: 'Other Extension',
          description: 'Third-party browser extensions can join the protocol.'
        },
        aiClaw: {
          title: 'aiClaw',
          description: 'Browser-native automation module for DOM manipulation.'
        },
        tweetClaw: {
          title: 'TweetClaw',
          description: 'Social graph interaction node for headless thread monitoring.'
        },
        otherSoftware: {
          title: 'Other Software',
          description: 'Any application can implement the AIHub protocol.'
        }
      },
      websocket: 'WEBSOCKET'
    }
  }
};

// 下载和集成指南配置
// Downloads and Integration configuration
const i18nDownloadsIntegration = {
  'zh-CN': {
    downloads: {
      sectionLabel: '开始使用',
      sectionTitle: '下载',
      sectionDescription: '安装 LocalBridge 和浏览器扩展,开始使用 AIHub 构建。',
      localbridge: {
        title: 'LocalBridge',
        platform: 'macOS',
        description: 'macOS 12+ · Apple Silicon & Intel',
        downloadBtn: '下载 .dmg'
      },
      tweetclaw: {
        title: 'TweetClaw',
        platform: 'Chrome',
        description: '开发者版本 · Chrome 扩展',
        webStoreBtn: 'Chrome 应用商店',
        downloadBtn: '开发者 .zip',
        installationTitle: '安装说明:',
        installStep1: '1. 打开 chrome://extensions/',
        installStep2: '2. 启用"开发者模式"',
        installStep3: '3. 解压 zip 文件',
        installStep4: '4. 点击"加载已解压的扩展程序"并选择文件夹'
      },
      aiclaw: {
        title: 'AIClaw',
        platform: 'Chrome',
        description: '开发者版本 · Chrome 扩展',
        webStoreBtn: 'Chrome 应用商店',
        downloadBtn: '开发者 .zip',
        installationTitle: '安装说明:',
        installStep1: '1. 打开 chrome://extensions/',
        installStep2: '2. 启用"开发者模式"',
        installStep3: '3. 解压 zip 文件',
        installStep4: '4. 点击"加载已解压的扩展程序"并选择文件夹'
      },
      viewSourceCode: '在 GitHub 上查看源代码'
    },
    integration: {
      sectionTitle: '开始工程',
      sectionDescription: '不到三分钟,从零到分布式自主网格。',
      step1: {
        title: '下载 LocalBridge',
        description: '下载 macOS 版 LocalBridge。Windows 和 Linux 版本即将推出。'
      },
      step2: {
        title: '安装扩展',
        description: '安装 TweetClaw 或 AIClaw 浏览器扩展。开发者版本现已可用,Chrome 网上应用店版本即将推出。'
      },
      step3: {
        title: '连接并运行',
        description: '启动 LocalBridge,您的扩展将自动连接。开始向您的 AI 智能体发送结构化命令。'
      },
      cta: {
        title: '准备好使用 AIHub 构建了吗?',
        description: 'AI 智能体的开源基础设施。MIT 许可证。',
        downloadBtn: '立即下载',
        githubBtn: '在 GitHub 上查看'
      }
    }
  },
  'en': {
    downloads: {
      sectionLabel: 'Get Started',
      sectionTitle: 'Downloads',
      sectionDescription: 'Install LocalBridge and browser extensions to start building with AIHub.',
      localbridge: {
        title: 'LocalBridge',
        platform: 'macOS',
        description: 'macOS 12+ · Apple Silicon & Intel',
        downloadBtn: 'Download .dmg'
      },
      tweetclaw: {
        title: 'TweetClaw',
        platform: 'Chrome',
        description: 'Developer Version · Chrome Extension',
        webStoreBtn: 'Chrome Web Store',
        downloadBtn: 'Developer .zip',
        installationTitle: 'Installation:',
        installStep1: '1. Open chrome://extensions/',
        installStep2: '2. Enable "Developer mode"',
        installStep3: '3. Extract the zip file',
        installStep4: '4. Click "Load unpacked" and select the folder'
      },
      aiclaw: {
        title: 'AIClaw',
        platform: 'Chrome',
        description: 'Developer Version · Chrome Extension',
        webStoreBtn: 'Chrome Web Store',
        downloadBtn: 'Developer .zip',
        installationTitle: 'Installation:',
        installStep1: '1. Open chrome://extensions/',
        installStep2: '2. Enable "Developer mode"',
        installStep3: '3. Extract the zip file',
        installStep4: '4. Click "Load unpacked" and select the folder'
      },
      viewSourceCode: 'View Source Code on GitHub'
    },
    integration: {
      sectionTitle: 'Start Engineering',
      sectionDescription: 'Go from zero to a distributed autonomous mesh in under three minutes.',
      step1: {
        title: 'Download LocalBridge',
        description: 'Download LocalBridge for macOS. Windows and Linux versions coming soon.'
      },
      step2: {
        title: 'Install Extensions',
        description: 'Install TweetClaw or AIClaw browser extensions. Developer versions available now, Chrome Web Store coming soon.'
      },
      step3: {
        title: 'Connect & Run',
        description: 'Launch LocalBridge and your extensions will auto-connect. Start sending structured commands to your AI agents.'
      },
      cta: {
        title: 'Ready to build with AIHub?',
        description: 'Open source infrastructure for AI agents. MIT License.',
        downloadBtn: 'Download Now',
        githubBtn: 'View on GitHub'
      }
    }
  }
};

// 合并所有翻译数据
// Merge all translation data
function mergeTranslations(...sources) {
  const result = {};
  sources.forEach(source => {
    Object.keys(source).forEach(lang => {
      if (!result[lang]) {
        result[lang] = {};
      }
      Object.assign(result[lang], source[lang]);
    });
  });
  return result;
}

const allTranslations = mergeTranslations(i18nNavFooter, i18nHeroArch, i18nDownloadsIntegration, typeof i18nProductsCode !== 'undefined' ? i18nProductsCode : {});

// 注册所有翻译数据到全局 i18n 实例
// Register all translation data to global i18n instance
if (window.i18n) {
  window.i18n.registerTranslations(allTranslations);
}

