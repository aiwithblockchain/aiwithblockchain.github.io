// Task C: Products and Code Section Internationalization
const i18nProductsCode = {
  'zh-CN': {
    products: {
      sectionLabel: '系统监控',
      sectionTitle: '活跃基础设施',
      statusBadge: '所有系统正常',
      localbridge: {
        status: 'macOS 可用',
        title: 'LocalBridge',
        description: '在您的机器上本地运行的中央枢纽。接受来自浏览器扩展的 WebSocket 连接,并将所有功能作为干净的 REST API 暴露给 AI 代理。',
        action: '管理节点'
      },
      tweetclaw: {
        status: '开发者版本',
        title: 'TweetClaw',
        description: 'Chrome 扩展,将您的 X/Twitter 会话绑定到 AI 代理。拦截结构化 API 响应并通过 WebSocket 转发——无需抓取,几乎零 token 开销。',
        action: '配置中心'
      },
      aiclaw: {
        status: '开发者版本',
        title: 'AIClaw',
        description: '将基于浏览器的 AI 平台(ChatGPT、Claude、Gemini)连接到您的本地代理工作流。减少 Web AI 界面上的 token 消耗开销。',
        action: '安全实例'
      }
    },
    code: {
      sectionLabel: '开发者 SDK',
      sectionTitle: 'ClawBot 深度集成',
      description: '集成 AIHub 节点就像五行 Python 代码一样简单。无需复杂的身份验证握手,只需纯粹清晰的指令流。',
      features: {
        autoDiscovery: '自动发现本地桥接节点',
        asyncWebSocket: '异步 WebSocket 事件处理'
      },
      codeFile: 'openclaw.py',
      comments: {
        step1: '# 步骤 1: ClawBot 命令 TweetClaw 读取推文',
        step2: '# 步骤 2: 发送 AI 提示到 AIClaw 进行分析',
        step3: '# 步骤 3: 获取 AI 响应并命令 TweetClaw 发布'
      },
      promptChinese: `请分析这篇推文要表达的内容,然后思考一下我们的 aihub
作为一个降低 openclaw 消耗 token 的方案,能否得到他的
帮助和推广。推文内容:【tweet_text】

要求:回复内容,表达精准简洁,附加我们的网站地址:
https://aiwithblockchain.github.io/`,
      promptEnglish: `Analyze the content of this tweet and consider whether our aihub,
as a solution to reduce openclaw token consumption, could benefit
from their help and promotion. Tweet content: [tweet_text]

Requirements: Reply with precise and concise content, including
our website: https://aiwithblockchain.github.io/`
    },
    video: {
      sectionLabel: '实时演示',
      sectionTitle: '观看实际操作',
      description: '了解 Python 脚本如何使用 AIClaw、TweetClaw 和 LocalBridge 连接 ChatGPT 和 Twitter。',
      watchOnYouTube: '在 YouTube 上观看'
    }
  },
  'en': {
    products: {
      sectionLabel: 'System Monitoring',
      sectionTitle: 'Active Infrastructure',
      statusBadge: 'ALL SYSTEMS NOMINAL',
      localbridge: {
        status: 'macOS Available',
        title: 'LocalBridge',
        description: 'The central hub that runs locally on your machine. Accepts WebSocket connections from browser extensions and exposes everything as a clean REST API for AI agents.',
        action: 'Manage Node'
      },
      tweetclaw: {
        status: 'Developer Version',
        title: 'TweetClaw',
        description: 'Chrome extension that binds your X/Twitter session to AI agents. Intercepts structured API responses and forwards them via WebSocket — no scraping, near-zero token overhead.',
        action: 'Provision Hub'
      },
      aiclaw: {
        status: 'Developer Version',
        title: 'AIClaw',
        description: 'Connects browser-based AI platforms (ChatGPT, Claude, Gemini) to your local agent workflow. Reduces token consumption overhead on web AI interfaces.',
        action: 'Secure Instance'
      }
    },
    code: {
      sectionLabel: 'Developer SDK',
      sectionTitle: 'ClawBot Deep Integration',
      description: 'Integrating AIHub nodes is as simple as five lines of Python. No complex auth handshakes, just pure lucid instruction flow.',
      features: {
        autoDiscovery: 'Auto-discovery of local bridge nodes',
        asyncWebSocket: 'Asynchronous WebSocket event handling'
      },
      codeFile: 'openclaw.py',
      comments: {
        step1: '# Step 1: ClawBot commands TweetClaw to read tweet',
        step2: '# Step 2: Send AI prompt to AIClaw for analysis',
        step3: '# Step 3: Get AI response and command TweetClaw to post'
      },
      promptChinese: `请分析这篇推文要表达的内容,然后思考一下我们的 aihub
作为一个降低 openclaw 消耗 token 的方案,能否得到他的
帮助和推广。推文内容:【tweet_text】

要求:回复内容,表达精准简洁,附加我们的网站地址:
https://aiwithblockchain.github.io/`,
      promptEnglish: `Analyze the content of this tweet and consider whether our aihub,
as a solution to reduce openclaw token consumption, could benefit
from their help and promotion. Tweet content: [tweet_text]

Requirements: Reply with precise and concise content, including
our website: https://aiwithblockchain.github.io/`
    },
    video: {
      sectionLabel: 'Live Demo',
      sectionTitle: 'Watch It In Action',
      description: 'See how Python scripts connect ChatGPT and Twitter using AIClaw, TweetClaw, and LocalBridge.',
      watchOnYouTube: 'Watch on YouTube'
    }
  }
};
