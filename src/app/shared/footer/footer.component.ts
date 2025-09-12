import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  downloadZip,
  navigateToSignUp,
} from '../../features/utils/navigate.utils';

export const TRADE_SWITCH_FOOTER = {
  company: 'TradeSwitch',
  links: [
    { label: 'How it works', url: '/how-it-works' },
    { label: 'Plans', url: '/plans' },
    { label: 'Blog', url: '/blog' },
    { label: 'FAQ', url: '/faq' },
    { label: 'About Us', url: '/about' },
  ],
  cta: [
    {
      label: 'Sign Up',
      style: 'btn-primary',
      url: '/signup',
      action: () => {},
    },
    {
      label: 'Download Chrome Extension',
      style: 'btn-secondary',
      url: '/download',
      action: () => {},
    },
  ],
  copyright: `© ${new Date().getFullYear()} TradeSwitch. All rights reserved.`,
  socials: [
    { icon: 'icon-linkedin', url: 'https://linkedin.com/company/tradeswitch' },
    { icon: 'icon-x-twitter', url: 'https://x.com/tradeswitch' },
  ],
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class Footer {
  isScrolled = false;

  constructor() {}

  tradeSwitchFooter = TRADE_SWITCH_FOOTER;

  ngOnInit() {
    this.tradeSwitchFooter.cta[0].action = () => {
      this.goToSignUp();
    };
    this.tradeSwitchFooter.cta[1].action = () => {
      this.downloadPluginZip();
    };
  }

  goToSignUp() {
    navigateToSignUp();
  }

  downloadPluginZip() {
    downloadZip();
  }
}
