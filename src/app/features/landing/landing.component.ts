import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';

const landingSteps = [
  {
    title: '1. Set Your Strategy ',
    img: 'assets/img/landing/first-step.webp',
  },
  {
    title: '2. Turn on Trade Switch',
    img: 'assets/img/landing/second-step.webp',
  },
  {
    title: '3. Start Trading',
    img: 'assets/img/landing/third-step.webp',
  },
];

const discoverContent = [
  {
    title: 'Analyze All Your Trades',
    description:
      "Get a clear, emotion-free view of every move you've made. Spot patterns, review outcomes, and learn from past decisions so you can trade smarter—not harder.",
    img: 'assets/img/landing/discover-1.webp',
  },
  {
    title: 'Set Your Strategy',
    description:
      'Turn your trading plan into action. With pre-set rules, you reduce impulsive decisions, protect your capital, and trade with confidence—even in volatile markets.',
    img: 'assets/img/landing/discover-2.webp',
  },
];

export const testimonialData = [
  {
    avatar: 'assets/img/avatars/avatar-4.webp',
    rating: 5,
    text: 'Trade Switch is just what I was looking for. Nice work on Trade Switch.',
    name: 'Kyle Roberts DVM',
    position: 'Customer Web Consultant',
  },
  {
    avatar: 'assets/img/avatars/avatar-1.webp',
    rating: 4,
    text: 'Trade Switch is just what I was looking for. Nice work on Trade Switch.',
    name: 'Kyle Roberts DVM',
    position: 'Customer Web Consultant',
  },
  {
    avatar: 'assets/img/avatars/avatar-2.webp',
    rating: 5,
    text: 'Trade Switch is just what I was looking for. Nice work on Trade Switch.',
    name: 'Kyle Roberts DVM',
    position: 'Customer Web Consultant',
  },
  {
    avatar: 'assets/img/avatars/avatar-3.webp',
    rating: 5,
    text: 'Trade Switch is just what I was looking for. Nice work on Trade Switch.',
    name: 'Kyle Roberts DVM',
    position: 'Customer Web Consultant',
  },
];

@Component({
  selector: 'app-landing',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true,
})
export class Landing {
  landingSteps = landingSteps;
  discoverContent = discoverContent;
  testimonialData = testimonialData;

  constructor() {}
}
