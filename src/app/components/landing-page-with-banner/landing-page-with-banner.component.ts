import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page-with-banner',
  templateUrl: './landing-page-with-banner.component.html',
  styleUrls: ['./landing-page-with-banner.component.css']
})
export class LandingPageWithBannerComponent {
  public title = "Essay Blues? We sing a different tune and write it for you."
  public items = [{
    src: "../../../assets/fountain-pen-close-up.png",
    title: "250+",
    description: "Academic Writing"
  },
  {
    src: "../../../assets/money-back-guarantee.png",
    title: "100%",
    description: "Money Back Gurantee"
  },
  {
    src: "../../../assets/authentic.png",
    title: "100%",
    description: "Plagiarism Free Content"
  },
  {
    src: "../../../assets/half-filled-rating-star.png",
    title: "50%",
    description: "Prepay Upfront - Half After We Deliver"
  },]

  public navItems = [
    'Writers',
    'Samples',
    'Pricing',
    'FAQs',
    'Why Us',
    'Reviews',
    'Blogs'
  ]
}
