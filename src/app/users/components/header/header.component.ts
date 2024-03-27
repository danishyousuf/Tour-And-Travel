import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'fet-t-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isNavbarCollapsed = true;
  isFullScreen = true;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

  }
 
  constructor() {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isFullScreen = window.innerWidth >= 768; // Check screen size at component initialization
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Logic to determine screen size and set isFullScreen accordingly
    this.isFullScreen = window.innerWidth >= 768; // Change threshold as needed
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = true; // Close navbar when a link is clicked
  }
}
