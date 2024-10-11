import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  onNavigate(path: string) {
    this.routerExtensions.navigate([path]);
  }
}