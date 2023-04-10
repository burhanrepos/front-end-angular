import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  images = [
    { src: '../../../assets/calendar.png', alt: 'Deadline Driven', text: 'Deadline Driven' },
    { src: '../../../assets/truck.png', alt: '100% Money back gurantee', text: '100% Money back gurantee' },
    { src: '../../../assets/profit.png', alt: 'Prepay 50% Upfront - Half after we deliver', text: 'Prepay 50% Upfront - Half after we deliver' },
    { src: '../../../assets/magnifying-glass.png', alt: 'No Plagiarism Guranteed (Reports Provided)', text: 'No Plagiarism Guranteed (Reports Provided)' },
    { src: '../../../assets/confidential.png', alt: '100% Private and Confidential', text: '100% Private and Confidential' }
  ];
}
