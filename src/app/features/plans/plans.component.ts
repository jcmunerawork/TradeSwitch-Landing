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
    name: 'Free',
    price: 0,
    period: '/month',
    icon: 'circle',
    color: '#4b7ee8',
    features: [
      { label: 'Trading Accounts', value: '1' },
      { label: 'Consistency Rules', value: 'YES' },
      { label: 'Trading Journal', value: 'YES' },
      { label: 'Live Statistics', value: 'YES' },
    ],
    cta: 'Get Starter Now',
  },
  {
    name: 'Starter',
    price: 35,
    period: '/month',
    icon: 'circle',
    color: '#4b7ee8',
    features: [
      { label: 'Trading Accounts', value: '2' },
      { label: 'Consistency Rules', value: 'YES' },
      { label: 'Trading Journal', value: 'YES' },
      { label: 'Live Statistics', value: 'YES' },
    ],
    cta: 'Get Starter Now',
  },
  {
    name: 'Pro',
    price: 99,
    period: '/month',
    mostPopular: true,
    icon: 'square',
    color: '#d1ff81',
    features: [
      { label: 'Trading Accounts', value: '6' },
      { label: 'Consistency Rules', value: 'YES' },
      { label: 'Trading Journal', value: 'YES' },
      { label: 'Live Statistics', value: 'YES' },
    ],
    cta: 'Change Plan',
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
