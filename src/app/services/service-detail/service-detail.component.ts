import { Component } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';
import { DatePicker } from '@nativescript/core';

@Component({
  selector: 'ns-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent {
  serviceName: string;
  selectedDate: Date = new Date();
  description: string = '';
  budget: string = '';
  imageSrc: string = '';
  mode: 'request' | 'search' = 'request';

  providers = [
    { name: 'Proveedor 1', rating: 4.5, comments: 10 },
    { name: 'Proveedor 2', rating: 4.2, comments: 8 },
    { name: 'Proveedor 3', rating: 4.8, comments: 15 },
  ];

  constructor(private params: ModalDialogParams) {
    this.serviceName = params.context.serviceName;
  }

  onDateChanged(args) {
    this.selectedDate = args.value;
  }

  onDescriptionChanged(args) {
    this.description = args.object.text;
  }

  onBudgetChanged(args) {
    this.budget = args.object.text;
  }

  onCameraButtonTap() {
    // Implementar la lógica para tomar una foto
    console.log('Tomar foto');
  }

  onConfirmButtonTap() {
    const result = {
      mode: this.mode,
      serviceName: this.serviceName,
      date: this.selectedDate,
      description: this.description,
      budget: this.budget,
      imageSrc: this.imageSrc
    };
    this.params.closeCallback(result);
  }

  onModeChange(args) {
    this.mode = args.object.selectedIndex === 0 ? 'request' : 'search';
  }

  onProviderSelect(providerName: string) {
    console.log(`Proveedor seleccionado: ${providerName}`);
    // Aquí puedes implementar la lógica para contactar al proveedor
  }
}