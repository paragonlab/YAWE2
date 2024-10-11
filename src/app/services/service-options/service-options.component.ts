import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-service-options',
  templateUrl: './service-options.component.html',
  styleUrls: ['./service-options.component.css']
})
export class ServiceOptionsComponent implements OnInit {
  serviceName: string;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this.serviceName = this.route.snapshot.paramMap.get('service');
  }

  onRequestContact() {
    console.log('Solicitar contacto para:', this.serviceName);
    // Implementar lógica para solicitar contacto
  }

  onSearchExisting() {
    console.log('Buscar en contactos existentes para:', this.serviceName);
    // Implementar lógica para buscar en contactos existentes
  }

  onBack() {
    this.routerExtensions.back();
  }
}