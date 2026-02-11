import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { downloadZip, navigateToGoogleWebStore, navigateToSignUp } from '../utils/navigate.utils';

const landingSteps = [
  {
    title: '1. Set Your Strategy',
    img: 'assets/img/about-us/first.webp',
  },
  {
    title: '2. Customize Rules Preferences',
    img: 'assets/img/about-us/second.webp',
  },
  {
    title: '3. Turn on TradeSwitch',
    img: 'assets/img/about-us/third.webp',
  },
  {
    title: '4. Start Trading',
    img: 'assets/img/about-us/fourth.webp',
  },
];

export const TRADER_CARDS = [
  {
    title: 'Beginner Traders',
    description: 'Build discipline from day one',
  },
  {
    title: 'Experienced Traders',
    description: 'Automate rules to avoid costly mistakes',
  },
  {
    title: 'Prop Firm Traders',
    description: 'Stay compliant and pass funded challenges',
  },
  {
    title: 'Investors',
    description: 'Stick to long-term plans without second-guessing decisions',
  },
];

export const FEATURES = [
  {
    title: 'Simple, intuitive dashboard',
    subtitle: 'No tech skills required',
  },
  {
    title: 'Fast, lightweight Chrome integration',
    subtitle: 'Manage strategies instantly',
  },
  {
    title: 'Data-driven analytics',
    subtitle: 'See what’s working and what’s not',
  },
  {
    title: 'Supports prop firm trading',
    subtitle: 'Avoid breaking risk rules',
  },
  {
    title: 'Built for psychology',
    subtitle: 'Stop emotional trading before it starts',
  },
];

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  standalone: true,
})
export class AboutUsComponent {
  landingSteps = landingSteps;
  traderCards = TRADER_CARDS;
  features = FEATURES;

  constructor(private router: Router) { }

  goToSignUp() {
    navigateToSignUp();
  }

  goToHowItWorks() {
    this.router.navigate(['/how-it-works']);
  }

  goToGoogleWebStore() {
    navigateToGoogleWebStore();
  }

  downloadPluginZip() {
    downloadZip();
  }
}
