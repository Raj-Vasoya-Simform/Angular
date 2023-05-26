import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '' ;
  amount!: number;
  height!:number;
  miles!:number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  onMileschange(event: any){
    const value = event.target.value;
    this.miles = parseFloat(value);
  }

  onHeightChange(event: any){
    const value = event.target.value;
    this.height = parseFloat(value);
  }

  onNameChange(event: any) {
    const value = event.target.value;
    this.name = value;
  }

  onDateChange(event: any) {
    const value = event.target.value;
    this.date = value;
  }

  onAmountChange(event: any){
    const value = event.target.value;
    this.amount = parseFloat(value);
  }
}
