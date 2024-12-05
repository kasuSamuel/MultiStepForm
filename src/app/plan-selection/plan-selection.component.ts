import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-selection',
  standalone: true,
  imports: [],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.css'
})
export class PlanSelectionComponent {
  constructor(private router: Router){}

goToNextPage() {
this.router.navigate(['/pick-add-ons']);
  }
  goBack() {
    this.router.navigate(['/personal-infor']);
  }





}
