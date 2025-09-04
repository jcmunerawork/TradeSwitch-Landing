import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';
import { navigateToSignUp } from '../utils/navigate.utils';

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
    name: 'Roger Brown',
    position: 'Customer Web Consultant',
  },
  {
    avatar: 'assets/img/avatars/avatar-1.webp',
    rating: 4,
    text: 'Finally, something that makes switching trades less of a headache!',
    name: 'Kyle Roberts DVM',
    position: 'Crypto Investor',
  },
  {
    avatar: 'assets/img/avatars/avatar-2.webp',
    rating: 5,
    text: 'It saved me so much time today, keep it up!',
    name: 'Viviana Pérez',
    position: 'Data Analist',
  },
  {
    avatar: 'assets/img/avatars/avatar-3.webp',
    rating: 5,
    text: 'Props to the team, this feels built for real traders, not just casual apps.',
    name: 'Olivia Davis',
    position: 'Retail Investor',
  },
];

@Component({
  selector: 'app-landing',
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true,
})
export class Landing {
  @ViewChild('testimonialsContent', { static: true })
  testimonialsContent!: ElementRef;
  landingSteps = landingSteps;
  discoverContent = discoverContent;
  testimonialData = testimonialData;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  constructor() {}

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX =
      event.pageX - this.testimonialsContent.nativeElement.offsetLeft;
    this.scrollLeft = this.testimonialsContent.nativeElement.scrollLeft;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.testimonialsContent.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.testimonialsContent.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  stopDrag() {
    this.isDragging = false;
  }

  goToSignUp() {
    navigateToSignUp();
  }
}
