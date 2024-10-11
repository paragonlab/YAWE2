import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  featuredServices = [
    { name: 'Plomería', icon: '~/assets/icons/plumber.png' },
    { name: 'Electricista', icon: '~/assets/icons/electrician.png' },
    { name: 'Mecánica', icon: '~/assets/icons/mechanic.png' },
    { name: 'Limpieza', icon: '~/assets/icons/cleaning.png' },
    { name: 'Peluquería', icon: '~/assets/icons/hairdresser.png' },
    { name: 'Reparación de computadoras', icon: '~/assets/icons/computer-repair.png' },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  onRequestService() {
    this.routerExtensions.navigate(['/services']);
  }

  onNavigate(path: string) {
    this.routerExtensions.navigate([path]);
  }

  onServiceTap(serviceName: string) {
    console.log(`Servicio seleccionado: ${serviceName}`);
    this.routerExtensions.navigate(['/services']);
  }
}