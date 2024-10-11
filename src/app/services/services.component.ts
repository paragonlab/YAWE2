import { Component, ViewContainerRef } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ModalDialogService, ModalDialogOptions } from '@nativescript/angular';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

interface Service {
  name: string;
  icon: string;
}

interface Category {
  name: string;
  services: Service[];
}

@Component({
  selector: 'ns-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  categories: Category[] = [
    {
      name: 'Hogar',
      services: [
        { name: 'Plomería', icon: '~/assets/icons/plumber.png' },
        { name: 'Electricista', icon: '~/assets/icons/electrician.png' },
        { name: 'Limpieza', icon: '~/assets/icons/cleaning.png' },
        { name: 'Albañilería', icon: '~/assets/icons/masonry.png' },
        { name: 'Herrería', icon: '~/assets/icons/blacksmith.png' },
        { name: 'Pintura', icon: '~/assets/icons/painting.png' },
        { name: 'Carpintería', icon: '~/assets/icons/carpentry.png' },
        { name: 'Jardinería', icon: '~/assets/icons/gardening.png' },
      ]
    },
    {
      name: 'Automotriz',
      services: [
        { name: 'Mecánica', icon: '~/assets/icons/mechanic.png' },
        { name: 'Lavado de autos', icon: '~/assets/icons/car-wash.png' },
        { name: 'Electricidad automotriz', icon: '~/assets/icons/auto-electrician.png' },
        { name: 'Hojalatería y pintura', icon: '~/assets/icons/auto-body.png' },
      ]
    },
    {
      name: 'Tecnología',
      services: [
        { name: 'Reparación de computadoras', icon: '~/assets/icons/computer-repair.png' },
        { name: 'Soporte técnico', icon: '~/assets/icons/tech-support.png' },
        { name: 'Reparación de celulares', icon: '~/assets/icons/phone-repair.png' },
        { name: 'Instalación de redes', icon: '~/assets/icons/network-installation.png' },
      ]
    },
    {
      name: 'Belleza y Cuidado Personal',
      services: [
        { name: 'Peluquería', icon: '~/assets/icons/hairdresser.png' },
        { name: 'Manicure y Pedicure', icon: '~/assets/icons/manicure.png' },
        { name: 'Maquillaje', icon: '~/assets/icons/makeup.png' },
        { name: 'Masajes', icon: '~/assets/icons/massage.png' },
      ]
    },
    {
      name: 'Educación',
      services: [
        { name: 'Clases particulares', icon: '~/assets/icons/tutoring.png' },
        { name: 'Idiomas', icon: '~/assets/icons/language.png' },
        { name: 'Música', icon: '~/assets/icons/music-lessons.png' },
      ]
    },
    {
      name: 'Eventos',
      services: [
        { name: 'Fotografía', icon: '~/assets/icons/photography.png' },
        { name: 'Catering', icon: '~/assets/icons/catering.png' },
        { name: 'Decoración', icon: '~/assets/icons/decoration.png' },
        { name: 'DJ y Sonido', icon: '~/assets/icons/dj.png' },
      ]
    }
  ];

  constructor(
    private routerExtensions: RouterExtensions,
    private modalDialogService: ModalDialogService,
    private viewContainerRef: ViewContainerRef
  ) {}

  onNavigate(path: string) {
    this.routerExtensions.navigate([path]);
  }

  onServiceTap(serviceName: string) {
    console.log(`Servicio seleccionado: ${serviceName}`);
    const options: ModalDialogOptions = {
      viewContainerRef: this.viewContainerRef,
      context: { serviceName: serviceName },
      fullscreen: true
    };

    this.modalDialogService.showModal(ServiceDetailComponent, options)
      .then((result) => {
        if (result) {
          console.log('Resultado del servicio:', result);
          if (result.mode === 'request') {
            console.log('Solicitud de servicio:', result);
            // Implementar lógica para procesar la solicitud
          } else if (result.mode === 'search') {
            console.log('Búsqueda de proveedores para:', result.serviceName);
            // Implementar lógica para mostrar más proveedores o realizar una búsqueda más detallada
          }
        }
      });
  }
}