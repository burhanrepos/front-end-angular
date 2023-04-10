import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/shared/data-service.service';
import { IPriceModel } from 'src/app/shared/price.model';
@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.css']
})
export class PriceFormComponent {
  @Output() discountedPrice = new EventEmitter();
  constructor(private formBuilder: FormBuilder,private dataService: DataServiceService) { }
  get dead_line(): FormGroup {
    return this.checkoutForm.get('dead_line') as FormGroup;
  }
  checkoutForm = this.formBuilder.group({
    email: new FormControl("",[Validators.required,Validators.email]),
    phone: new FormControl(""),
    doc_type: new FormControl(""),
    academic_level: new FormControl(""),
    number_of_pages: new FormControl("0"),
    dead_line: this.formBuilder.group({
      date:new FormControl(""),
      time:new FormControl(""),
    })
  });

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

  addNumberOfPages():void{
    const prevoiusValue = parseInt(this.checkoutForm.controls['number_of_pages'].value??"");
    this.checkoutForm.controls['number_of_pages'].patchValue((prevoiusValue+1).toString());

  }
  removeNumberOfPages():void{
    const prevoiusValue = parseInt(this.checkoutForm.controls['number_of_pages'].value??"");

    if(prevoiusValue != 0 )
      this.checkoutForm.controls['number_of_pages'].setValue((prevoiusValue-1).toString());
  }
  getPriceDetail():void{
    const payload = {
      ...this.checkoutForm.value,
      "dead_line":this.dead_line.controls['date'].value+this.dead_line.controls['time'].value
    }

    this.dataService.getPriceData(payload as IPriceModel).subscribe((result)=>{
      console.log(result);
      this.discountedPrice.emit(result);
    })
  }
}
