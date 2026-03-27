// Hero 区域和架构图国际化配置
// Hero and Architecture Internationalization Configuration

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

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18nHeroArch;
}
