import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export enum Category {
  GettingStarted = 'Getting Started',
  Account = 'Account and Technical Issues',
  Pricing = 'Pricing',
  Terms = 'Terms and Policy',
}

export interface FaqItem {
  question: string;
  answer: string;
  type: Category;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is Trade Switch and how does it work?',
    answer:
      'Trade Switch is a Chrome Extension connected to a web app that enforces your trading rules on TradeLocker. The plugin applies your rules in real time, while the web app provides a trading journal, stats, and progress tracking through your personal profile.',
    type: Category.GettingStarted,
  },
  {
    question: 'Can Trade Switch prevent me from closing a trade early?',
    answer:
      'Yes. If you set a rule against closing trades early, Trade Switch will block the action. The only way to bypass it is by turning off the plugin.',
    type: Category.Account,
  },
  {
    question: 'What trading platforms does Trade Switch support?',
    answer:
      'Currently, Trade Switch supports TradeLocker. More platforms will be added in future updates.',
    type: Category.GettingStarted,
  },
  {
    question: 'How does Trade Switch connect with my trading account?',
    answer:
      'It connects through the Chrome Extension directly to your TradeLocker platform. Your activity is synced with the Trade Switch web app, where you can review trades, track progress, and keep a trading journal.',
    type: Category.GettingStarted,
  },
  {
    question: 'Is Trade Switch safe to use with my brokerage or prop firm?',
    answer:
      'Yes. Trade Switch doesn’t execute trades or handle funds—it only enforces your rules. It’s fully secure and designed to keep you compliant with your trading plan.',
    type: Category.Account,
  },
  {
    question: 'Can I customize my own trading rules in Trade Switch?',
    answer:
      'Yes. You can set rules for risk limits, allowed assets, trading times/days, and early exits. Once active, Trade Switch enforces them automatically.',
    type: Category.GettingStarted,
  },
  {
    question: 'What if I need to override a rule during a trade?',
    answer:
      'You cannot bypass rules while the plugin is active. The only way to override them is by turning off the extension, which pauses enforcement until re-enabled.',
    type: Category.Account,
  },
  {
    question: 'Does Trade Switch support funded accounts or prop firms?',
    answer:
      'Yes, but only if they use TradeLocker. Trade Switch helps you stay compliant with prop firm requirements by enforcing your rules.',
    type: Category.GettingStarted,
  },
  {
    question:
      'Will Trade Switch interfere with my expert advisors (EAs) or bots?',
    answer:
      'No. EAs and bots can run normally, but if their trades break your rules (e.g., risk or asset restrictions), Trade Switch will block them unless you disable the plugin.',
    type: Category.Account,
  },
  {
    question: 'How does the Chrome Extension actually prevent actions?',
    answer:
      'The extension monitors your trades in real time. If you try to take an action that violates your rules, Trade Switch instantly blocks it.',
    type: Category.Account,
  },
  {
    question: 'Can I use Trade Switch for scalping or short-term trades?',
    answer:
      'Yes. Trade Switch supports all trading styles—including scalping—as long as your rules allow it.',
    type: Category.GettingStarted,
  },
  {
    question: 'What happens if I turn off the extension mid-trade?',
    answer:
      'Enforcement stops immediately. Your trades remain open, but no rules will be applied again until you reactivate the plugin.',
    type: Category.Account,
  },
  {
    question: 'Is there a mobile version of Trade Switch?',
    answer:
      'No. Trade Switch is a desktop-only Chrome Extension. The web app is available on mobile to review your journal and stats, but rules are only enforced when the plugin is active on desktop.',
    type: Category.GettingStarted,
  },
  {
    question:
      'How much does Trade Switch cost and is there a free trial or beta?',
    answer:
      'We offer a free trial/beta so you can test both the plugin and the trading journal. After that, Trade Switch is subscription-based with flexible plans to fit your needs.',
    type: Category.Pricing,
  },
];

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  standalone: true,
})
export class FaqComponent {
  categories = Object.values(Category);
  selectedIndex = 0;
  faqs = FAQ_ITEMS;
  filteredFaqs: FaqItem[] = this.faqs.filter(
    (faq) => faq.type === this.categories[0]
  );
  openIndex = -1;

  constructor() {}
  selectCategory(index: number) {
    this.selectedIndex = index;
    this.filteredFaqs = this.faqs.filter(
      (faq) => faq.type === this.categories[index]
    );
  }

  toggleFaq(index: number) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
