import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-account',
  templateUrl: './account.component.html',
})
export class AccountComponent {
  isPrestador: boolean = false;
  roleDescription: string = 'Como contratante, podrás solicitar servicios de profesionales.';

  constructor(private routerExtensions: RouterExtensions) {}

  onNavigate(path: string) {
    this.routerExtensions.navigate([path]);
  }

  setRole(isPrestador: boolean) {
    this.isPrestador = isPrestador;
    this.updateRoleDescription();
  }

  private updateRoleDescription() {
    if (this.isPrestador) {
      this.roleDescription = 'Como prestador de servicios, podrás ofrecer tus habilidades y ser contratado.';
    } else {
      this.roleDescription = 'Como contratante, podrás solicitar servicios de profesionales.';
    }
  }
}