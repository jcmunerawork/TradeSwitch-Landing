import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';

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
    question: 'How does it help me avoid emotional trading?',
    answer:
      'The plugin helps you pause and reconsider trades when it detects emotional patterns, keeping your decisions logical and consistent.',
    type: Category.GettingStarted,
  },
  {
    question: 'Do I need trading experience to use it?',
    answer:
      'No prior experience is required. The plugin guides new users while also adding value for advanced traders.',
    type: Category.GettingStarted,
  },
  {
    question: 'Does it work with my trading platform?',
    answer:
      "It's compatible with major platforms. Check documentation for supported integrations.",
    type: Category.GettingStarted,
  },
  {
    question: 'Can I change my rules once I start?',
    answer:
      'Absolutely. You can update, pause, or fine-tune your strategy at any time. The plugin’s goal is to keep you consistent, not locked into decisions that no longer fit your market view.',
    type: Category.GettingStarted,
  },
];

@Component({
  selector: 'app-faq',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  standalone: true,
})
export class FaqComponent {
  categories = Object.values(Category);
  selectedIndex = 0;
  faqs = FAQ_ITEMS;
  openIndex = -1;

  constructor() {}
  selectCategory(index: number) {
    this.selectedIndex = index;
  }

  toggleFaq(index: number) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
