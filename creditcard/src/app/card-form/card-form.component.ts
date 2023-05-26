import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormContorl } from '../date-form-contorl';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormContorl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/[1-9]/)
    ]),
  });

  constructor() {
    console.log(this.cardForm.get('name'));
  }

  ngOnInit(): void {}

  getControl(field: string) {
    return this.cardForm.get(field) as FormControl;
  }

  onSubmit() {
    console.log('Form was submitted.');
  }

  onReset(){
    this.cardForm.reset();
  }
}
