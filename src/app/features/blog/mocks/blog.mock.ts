import { Category } from '../models/blog';

export const BLOG_CARDS = [
  {
    id: 'account-setup',
    title: 'How to set up your account',
    description:
      'Learn how to set up your TradeSwitch account quickly. Follow our step-by-step guide and start trading with discipline and confidence today.',
    imageUrl: 'assets/img/blog/image-first-article.webp',
    type: Category.HowTo,
  },
  {
    id: 'strategy-setup',
    title: 'How to set up your strategy',
    description:
      'Create your perfect trading strategy on TradeSwitch. Learn how to set trading rules, manage risks, and automate discipline in minutes.',
    imageUrl: 'assets/img/blog/image-second-article.webp',
    type: Category.HowTo,
  },
  {
    id: 'trading-psychology',
    title: 'The art of Trading Psychology',
    description:
      'Learn how emotions affect trading performance and discover how TradeSwitch helps traders stay disciplined and consistent.',
    imageUrl: 'assets/img/blog/image-third-article.webp',
    type: Category.Trending,
  },
  {
    id: 'new-trade-switch',
    title: 'The all new Trade Switch',
    description:
      'Discover the all-new TradeSwitch experience with an upgraded dashboard, smarter trading tools, and a powerful Chrome extension.',
    imageUrl: 'assets/img/blog/image-fourth-article.webp',
    type: Category.Trending,
  },
  {
    id: 'trade-switch-vs-none',
    title: 'Trade Switch vs No Trade Switch',
    description:
      'Should you trade manually or automate your discipline? Discover why traders using TradeSwitch achieve better results than those trading without it.',
    imageUrl: 'assets/img/blog/image-fifth-article.webp',
    type: Category.Latest,
  },
  {
    id: 'chrome-extension',
    title: 'How to download the Chrome Extension',
    description:
      'Get the TradeSwitch Chrome Extension and trade smarter with one-click access to your strategies and automation tools.',
    imageUrl: 'assets/img/blog/image-sixth-article.webp',
    type: Category.Updates,
  },
];

export const BLOGS = [
  {
    id: 'account-setup',
    title: 'How to Set Up Your TradeSwitch Account',
    heroImage: 'assets/img/blog/image-first-article.webp',
    keywords: [
      'TradeSwitch account setup',
      'how to start trading',
      'trading automation',
    ],
    summary:
      'Trading success starts with preparation—and that begins with setting up your TradeSwitch account. Here’s a complete step-by-step guide.',
    estimatedTime: '3 minutes',
    sections: [
      {
        title: 'Step 1 – Visit the TradeSwitch Website',
        content: 'Go to TradeSwitch and click “Sign Up.”',
        stepNumber: 1,
      },
      {
        title: 'Step 2 – Create Your Account',
        content:
          'Enter your name, email, and password. Confirm your email to activate your account.',
        stepNumber: 2,
      },
      {
        title: 'Step 3 – Explore Your Dashboard',
        content: 'Inside your dashboard, you’ll find tools to:',
        bullets: [
          'Analyze All Your Trades → Understand performance',
          'Set Your Strategy → Automate trading discipline',
          'Toggle TradeSwitch On/Off → Control execution instantly',
        ],
        stepNumber: 3,
      },
      {
        title: '🧐 Pro Tip',
        content: 'Bookmark the login page for one-click access.',
        stepNumber: 4,
      },
      {
        title: 'Final Thoughts',
        content:
          'You’re ready to start creating strategies and trading smarter.',
        stepNumber: 5,
      },
    ],
  },
  {
    id: 'strategy-setup',
    title: 'How to set up your strategy',
    heroImage: 'assets/img/blog/image-second-article.webp',
    keywords: [
      'trading strategy',
      'TradeSwitch',
      'set trading rules',
      'manage risks',
      'automation',
    ],
    summary:
      'Create your perfect trading strategy on TradeSwitch. Learn how to set trading rules, manage risks, and automate discipline in minutes.',
    estimatedTime: '3 minutes',
    sections: [
      {
        title: 'Step 1 – Define your trading goals',
        content:
          'Clarify what you want to achieve, your risk tolerance, and your preferred markets.',
        stepNumber: 1,
      },
      {
        title: 'Step 2 – Set your entry and exit rules',
        content:
          'Determine the technical or fundamental criteria for opening and closing trades.',
        stepNumber: 2,
      },
      {
        title: 'Step 3 – Manage your risks',
        content:
          'Configure stop-losses, position sizing, and diversified strategies to protect your capital.',
        stepNumber: 3,
      },
      {
        title: 'Step 4 – Automate with TradeSwitch',
        content:
          "Use TradeSwitch's automation tools to execute your strategy with discipline—removing emotions from your trading.",
        stepNumber: 4,
      },
      {
        title: 'Final Thoughts',
        content:
          'A structured and automated strategy leads to more consistent and confident trading outcomes.',
        stepNumber: 5,
      },
    ],
  },
  {
    id: 'trading-psychology',
    title: 'The art of Trading Psychology',
    heroImage: 'assets/img/blog/image-third-article.webp',
    keywords: [
      'trading psychology',
      'emotions trading',
      'trader discipline',
      'TradeSwitch',
    ],
    summary:
      'Learn how emotions affect trading performance and discover how TradeSwitch helps traders stay disciplined and consistent.',
    estimatedTime: '3 minutes',
    sections: [
      {
        title: 'Step 1 – Understand Emotional Triggers',
        content:
          'Identify which emotions (fear, greed, hope, regret) are most likely to affect your trading decisions.',
        stepNumber: 1,
      },
      {
        title: 'Step 2 – Build a Disciplined Mindset',
        content:
          'Implement routines and journaling to review your trades and make rational, repeatable decisions.',
        stepNumber: 2,
      },
      {
        title: 'Step 3 – Automate with TradeSwitch',
        content:
          'Reduce emotional impact by automating strategy execution. Let TradeSwitch enforce your trading plan without hesitation.',
        stepNumber: 3,
      },
      {
        title: 'Final Thoughts',
        content:
          'Controlling your emotions is a key advantage. Combine discipline with automation to maximize your long-term trading success.',
        stepNumber: 4,
      },
    ],
  },
  {
    id: 'new-trade-switch',
    title: 'The all new Trade Switch',
    heroImage: 'assets/img/blog/image-fourth-article.webp',
    keywords: [
      'TradeSwitch update',
      'dashboard upgrade',
      'smarter trading tools',
      'Chrome extension',
    ],
    summary:
      'Discover the all-new TradeSwitch experience with an upgraded dashboard, smarter trading tools, and a powerful Chrome extension.',
    estimatedTime: '2 minutes',
    sections: [
      {
        title: 'Upgraded Dashboard',
        content:
          'Experience a modern interface and customizable widgets for complete control of your trades.',
        stepNumber: 1,
      },
      {
        title: 'Smarter Trading Tools',
        content:
          'Leverage analytics, real-time notifications, and advanced order management to optimize your strategies.',
        stepNumber: 2,
      },
      {
        title: 'Chrome Extension Integration',
        content:
          'Access your TradeSwitch dashboard directly in your browser and trade securely anywhere.',
        stepNumber: 3,
      },
      {
        title: 'Final Thoughts',
        content:
          'Try the new TradeSwitch for a faster, smarter, and more connected trading experience.',
        stepNumber: 4,
      },
    ],
  },
  {
    id: 'trade-switch-vs-none',
    title: 'Trade Switch vs No Trade Switch',
    heroImage: 'assets/img/blog/image-fifth-article.webp',
    keywords: [
      'manual trading',
      'automated trading',
      'TradeSwitch comparison',
      'trading discipline',
    ],
    summary:
      'Should you trade manually or automate your discipline? Discover why traders using TradeSwitch achieve better results than those trading without it.',
    estimatedTime: '3 minutes',
    sections: [
      {
        title: 'Manual Trading Challenges',
        content:
          'Manual trading relies on a trader’s discipline, emotion control, and constant attention, making it prone to human error and inconsistency.',
        stepNumber: 1,
      },
      {
        title: 'Benefits of Using TradeSwitch',
        content:
          'TradeSwitch automation enforces strategy discipline, reduces emotional decisions, and allows for real-time execution without hesitation.',
        stepNumber: 2,
      },
      {
        title: 'Comparative Results',
        content:
          'Studies show traders using TradeSwitch achieve more consistent profits and fewer losses compared to manual methods.',
        stepNumber: 3,
      },
      {
        title: 'Final Thoughts',
        content:
          'Automation helps maintain trading discipline and can lead to improved long-term results. Evaluate your needs and consider integrating TradeSwitch into your workflow.',
        stepNumber: 4,
      },
    ],
  },
  {
    id: 'chrome-extension',
    title: 'How to download the Chrome Extension',
    heroImage: 'assets/img/blog/image-sixth-article.webp',
    keywords: [
      'Chrome extension',
      'TradeSwitch extension',
      'automation tools',
      'trading strategies',
    ],
    summary:
      'Get the TradeSwitch Chrome Extension and trade smarter with one-click access to your strategies and automation tools.',
    estimatedTime: '2 minutes',
    sections: [
      {
        title: 'Step 1 – Go to Chrome Web Store',
        content:
          'Visit the Chrome Web Store in your browser and search for “TradeSwitch”.',
        stepNumber: 1,
      },
      {
        title: 'Step 2 – Install the Extension',
        content:
          'Click on “Add to Chrome” and confirm the installation to add the TradeSwitch extension to your browser.',
        stepNumber: 2,
      },
      {
        title: 'Step 3 – Set Up Your Account',
        content:
          'Open the extension from your toolbar and log in with your TradeSwitch credentials to sync your strategies.',
        stepNumber: 3,
      },
      {
        title: 'Final Thoughts',
        content:
          'With the Chrome Extension installed, you can manage your trading strategies and automation tools with a single click—anytime, anywhere.',
        stepNumber: 4,
      },
    ],
  },
];
