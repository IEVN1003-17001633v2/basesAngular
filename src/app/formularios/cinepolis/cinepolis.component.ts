import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-boletos-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'] 
})
export class BoletosCinepolisComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletos: number = 0;
  tarjetaCineco: string = 'No';
  valorPagar: string = '';

  procesar() {
    let precioBoleto = 12;
    let total = 0;

    const maxBoletosPorComprador = 7;
    const boletosPermitidos = this.cantidadCompradores * maxBoletosPorComprador;

    if (this.cantidadBoletos > boletosPermitidos) {
      alert(`Cada comprador puede adquirir un máximo de ${maxBoletosPorComprador} boletos. Debido a que son ${this.cantidadCompradores} compradores, el número máximo de boletos es ${boletosPermitidos}.`);
    return;
    }

    total = this.cantidadBoletos * precioBoleto;

    if (this.cantidadBoletos >= 5) {
      total *= 0.85;
    } else if (this.cantidadBoletos >= 3) {
      total *= 0.9;
    }

    if (this.tarjetaCineco === 'Si') {
      total *= 0.9;
    }

    this.valorPagar = `${total.toFixed(2)}`;
  }
}