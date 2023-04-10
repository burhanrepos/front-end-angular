import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
  public hostDetails =[
    {
      src:"../../../assets/time.png",
      description:"24/7 always open"
    },
    {
      src:"../../../assets/telephone.png",
      description:"(+1) 888 68 4420"
    },
    {
      src:"../../../assets/mail.png",
      description:"info@dynamicwebsite.com"
    },
  ]

}
