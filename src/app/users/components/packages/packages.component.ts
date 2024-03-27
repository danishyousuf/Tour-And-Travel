import { Component, ElementRef, ViewChild,HostListener } from '@angular/core';

@Component({
  selector: 'fet-t-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  @ViewChild('contactSection', { static: true }) contactSection!: ElementRef<HTMLElement>;

  scrollToContact() {
    if (this.contactSection && this.contactSection.nativeElement) {
      this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  showExtra: boolean = false;
  buttonText: string = "Read More";
  extraText: string = "";

  toggleContent() {
    this.showExtra = !this.showExtra;
    this.buttonText = this.buttonText === "Read More" ? "Read Less" : "Read More";
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollFunction();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollFunction() {
    const scrollButton = document.querySelector('.scroll-to-top') as HTMLElement;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
}
