import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';

export interface PlanCard {
  name: string;
  price: number;
  period: string;
  mostPopular?: boolean;
  icon: string;
  color: string;
  features: {
    label: string;
    value: string;
  }[];
  cta: string;
}

export const PLANS: PlanCard[] = [
  {
    name: 'Starter',
    price: 135,
    period: '/month',
    icon: 'circle',
    color: '#4b7ee8',
    features: [
      { label: 'Profit Target', value: '$6,000' },
      { label: 'Max Contracts', value: '6' },
      { label: 'Trailing Max Drawdown', value: '$3,500' },
      { label: 'Daily Loss Limit', value: '$2,400' },
      { label: 'Activation Fee', value: 'N/A' },
      { label: 'Consistency Rule', value: 'Yes' },
    ],
    cta: 'Get Starter Now',
  },
  {
    name: 'Pro',
    price: 250,
    period: '/month',
    mostPopular: true,
    icon: 'square',
    color: '#d1ff81',
    features: [
      { label: 'Profit Target', value: '$6,000' },
      { label: 'Max Contracts', value: '6' },
      { label: 'Trailing Max Drawdown', value: '$3,500' },
      { label: 'Daily Loss Limit', value: '$2,400' },
      { label: 'Activation Fee', value: 'N/A' },
      { label: 'Consistency Rule', value: 'Yes' },
    ],
    cta: 'Get Starter Now',
  },
];

@Component({
  selector: 'app-plans',
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
  standalone: true,
})
export class PlansComponent {
  plans = PLANS;
  constructor() {}
}
