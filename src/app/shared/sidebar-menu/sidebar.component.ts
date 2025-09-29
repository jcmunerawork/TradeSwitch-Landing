import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { navigateToSignUp } from '../../features/utils/navigate.utils';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
})
export class Sidebar {
  isScrolled = false;
  isMenuOpen = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 5;
  }

  navigateToLogin() {
    window.open(
      'https://jcmunerawork.github.io/tradeManager-web/login',
      '_blank'
    );
  }

  goToSignUp() {
    navigateToSignUp();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
