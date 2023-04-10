import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { ShippingDetails } from './shipping-details.model';
// import { Item } from './item.model';
export class ShippingDetails {
  // name: string;
  // address: string;
  // city: string;
  // state: string;
  // zip: string;
  constructor(
    public name: string = '',
    public address: string = '',
    public city: string = '',
    public state: string = '',
    public zip: string = ''
  ) {}
}

export interface Item {
  name: string;
  price: number;
}
@Component({
  selector: 'app-checkout-with-detials',
  templateUrl: './checkout-with-detials.component.html',
  styleUrls: ['./checkout-with-detials.component.css']
})
export class CheckoutWithDetialsComponent {
  items: Item[];
  shippingDetails: ShippingDetails = new ShippingDetails(); // Shipping details object

  constructor() {
    // Initialize items array with sample data
    this.items = [
      { name: 'Item 1', price: 10.99 },
      { name: 'Item 2', price: 19.99 },
      { name: 'Item 3', price: 5.99 }
    ];
  }

  // Calculate total order amount
  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  documentType: string | undefined;
  academicLevel: string | undefined;
  documentTypes = [
    { label: 'Passport', value: 'passport' },
    { label: 'Driver License', value: 'driver-license' },
    { label: 'ID Card', value: 'id-card' }
  ];

  academicLevels = [
    { label: 'High School', value: 'high-school' },
    { label: "Bachelor's Degree", value: 'bachelor' },
    { label: "Master's Degree", value: 'master' },
    { label: 'PhD', value: 'phd' }
  ];

  // Handle form submission
  onSubmit() {
    // Perform checkout logic, e.g. send order details to a backend service
    console.log('Shipping details:', this.shippingDetails);
    console.log('Order items:', this.items);
    console.log('Total:', this.getTotal());
    // Reset form after submission
    this.shippingDetails = new ShippingDetails();
  }
}
