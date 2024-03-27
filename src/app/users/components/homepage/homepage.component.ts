import { Component, ElementRef, ViewChild ,HostListener} from '@angular/core';

@Component({
  selector: 'fet-t-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  @ViewChild('contactSection', { static: true }) contactSection!: ElementRef<HTMLElement>;
  isFullScreen = true; // Set to true by default
  img1:string="././assets/images/banner/banner1.avif"
  img2:string="././assets/images/banner/banner2.avif"
  img3:string="././assets/images/banner/banner3.jpg"
  bannerimg:string=this.img1
  showExtra: boolean = false;
  buttonText: string = "Read More";
  extraText: string = "";

  constructor() {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isFullScreen = window.innerWidth >= 768; // Check screen size at component initialization
    }
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

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    // Logic to determine screen size and set isFullScreen accordingly
    this.isFullScreen = window.innerWidth >= 768; // Change threshold as needed
  }

  scrollToContact() {
    if (this.contactSection && this.contactSection.nativeElement) {
      this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

 
  toggleContent() {
    this.showExtra = !this.showExtra;
    this.buttonText = this.buttonText === "Read More" ? "Read Less" : "Read More";
  }

  prev() {
    if(this.bannerimg===this.img3) {
      this.bannerimg=this.img2
    } else if(this.bannerimg===this.img2) {
      this.bannerimg=this.img1
    } else if(this.bannerimg===this.img1) {
      this.bannerimg=this.img3
    }
  }

  next() {
    if(this.bannerimg===this.img1) {
      this.bannerimg=this.img2
    } else if(this.bannerimg===this.img2) {
      this.bannerimg=this.img3
    } else if(this.bannerimg===this.img3) {
      this.bannerimg=this.img1
    }
  }
}
