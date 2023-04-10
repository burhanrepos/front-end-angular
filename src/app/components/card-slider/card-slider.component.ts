import { Component } from '@angular/core';
@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css'],
})
export class CardSliderComponent {

  public cards = [
    {
      id: "1",
      title: "Custom Writing ",
      content: "Our team of qualified writers can create custom-written papers from scratch based on your requirements, ensuring high-quality and original work."
    },
    {
      id: "2",
      title: "Proofreading",
      content: "Our professional editors can review and edit your academic papers to improve grammar, punctuation, spelling, formatting, and overall coherence, ensuring error-free and polished work."
    },
    {
      id: "3",
      title: "Plagiarism",
      content: "Our specialized software can scan your papers for potential plagiarism, providing detailed reports and ensuring originality and academic integrity."
    },
    {
      id: "4",
      title: "Research",
      content: "Our experienced researchers and data analysts can assist you in conducting research, collecting data, and performing data analysis for your academic papers, ensuring accurate and reliable findings."
    },
    {
      id: "5",
      title: "Citation",
      content: "Our guides, templates, and tools can help you correctly format your papers and create accurate citations and references according to the required citation style, ensuring proper attribution and adherence to academic standards."
    },
    {
      id: "6",
      title: "Consultation",
      content: "Our subject-matter experts and tutors can provide one-on-one guidance, feedback, and advice on academic writing, research, and other related topics, ensuring personalized and tailored support for your academic needs."
    }
  ];

  // You can then access the id, titles, and content of the services using card.id, card.title, and card.content in your code


  ngOnInit() {

  }

  moveToNextCard() {
    this.cards.push(this.cards.shift() ?? { id: '', content: '', title: '' }); // Remove the last card and add it to the beginning
  }

  moveToPrevCard() {
    this.cards.unshift(this.cards.pop() ?? { id: '', content: '', title: '' }); // Remove the first card and add it to the end
  }

}
