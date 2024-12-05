import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finishing-up',
  standalone: true,
  imports: [],
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css'
})
export class FinishingUpComponent {
  constructor(private router: Router){}

  toConfirm() {
    }
    goBack() {
      this.router.navigate(['/pick-add-ons']);
    }
}
