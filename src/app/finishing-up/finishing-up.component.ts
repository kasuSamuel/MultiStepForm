import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finishing-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css'
})
export class FinishingUpComponent {
  isConfirmed = false;

  constructor(private router: Router){}
  plansData: any = sessionStorage.getItem('optionData') ? JSON.parse(sessionStorage.getItem('optionData')!) : null;
  dataTwo: any = sessionStorage.getItem('selectedPlan') ? JSON.parse(sessionStorage.getItem('selectedPlan')!) : null;

amount: string = this.dataTwo.selectedPrice;
totalAmount: number = parseFloat(this.amount.replace(/[^0-9.-]+/g, ""));

 sum: number = this.plansData.reduce((total: number, Data: { selectedPlanValue: string; }) => {
  // Extract the number by removing the non-numeric characters
  const numericValue = parseFloat(Data.selectedPlanValue.replace(/[^0-9.-]+/g, ""));
  return total + numericValue;
}, 0);

totalSum :number = this.sum + this.totalAmount;
 toConfirm() {
      this.router.navigate(['/thank-you']);
}

goBack() {
  if (sessionStorage.getItem('optionData')) {
    sessionStorage.removeItem('optionData');
  }
    this.router.navigate(['/pick-add-ons']);
}

}
