import { Component } from '@angular/core';
@Component({
  selector: 'app-checkout-with-detials',
  templateUrl: './checkout-with-detials.component.html',
  styleUrls: ['./checkout-with-detials.component.css']
})
export class CheckoutWithDetialsComponent {
  showCardContent: boolean = false;
  showWalletContent: boolean = false;
  showPay50Percent: boolean = false;
  public actualPrice = 0;
  public discountPrice = 0;
  public fiftyPercentAmount = 0;
  walletRows = [
    { label: 'Your Balance', amount: '$500' },
    { label: 'To be Paid', amount: '$150' },
    { label: 'Balance After', amount: '$350' }
  ];
  discountedPrice(event:any){
    this.actualPrice = event.actual_price;
    this.discountPrice = event.discounted_price;
    this.fiftyPercentAmount = event.discounted_price/2;
  }

  onPayWithCardClick() {
    this.showCardContent = !this.showCardContent;
    this.showWalletContent=false;
  }

  onPayWithWalletClick() {
    this.showWalletContent = !this.showWalletContent;
    this.showCardContent = false;


  }

}
