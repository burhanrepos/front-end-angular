import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Please refer to our return policy for more information.',
      active: false
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging in to your account and navigating to the order tracking section. If you don\'t have an account, please contact us for assistance.',
      active: false
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location. Please refer to our shipping policy for estimated delivery times.',
      active: false
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Orders can be canceled within 24 hours of purchase. Please contact us as soon as possible if you wish to cancel your order.',
      active: false
    }
  ];

  toggleAccordion(index: number): void {

    this.faqs.forEach((element,i)=>{
      if(i!=index)
          element.active = false;
    })
    this.faqs[index].active = !this.faqs[index].active;
  }
}
