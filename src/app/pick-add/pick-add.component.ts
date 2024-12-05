import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-add',
  standalone: true,
  imports: [],
  templateUrl: './pick-add.component.html',
  styleUrl: './pick-add.component.css'
})
export class PickAddComponent {

  constructor(private router: Router){}

  goToNextPage() {
  this.router.navigate(['/finishing-up']);
    }
    goBack() {
      this.router.navigate(['/plan-selection']);
    }
}
