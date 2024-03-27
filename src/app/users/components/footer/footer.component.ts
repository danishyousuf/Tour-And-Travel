import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'fet-t-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
