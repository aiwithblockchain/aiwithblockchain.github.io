// 下载和集成指南国际化配置
// Downloads and Integration Internationalization Configuration

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
        downloadBtn: '下载 .zip',
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
        downloadBtn: '下载 .zip',
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
        downloadBtn: 'Download .zip',
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
        downloadBtn: 'Download .zip',
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

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18nDownloadsIntegration;
}
