import { Component, OnInit } from '@angular/core';
import {TransPagoPluxService} from '../../services/trans-pago-plux.service'

@Component({
  selector: 'app-form-trans',
  templateUrl: './form-trans.component.html',
  styleUrl: './form-trans.component.css'
})
export class FormTransComponent implements OnInit{
  public numeroIdentificacion: string;
  public initialDate: string;
  public finalDate: string;
  public tipoPago: string;
  public estado: string;
  public respuestaJSON: any = {}

  constructor(private transPagoPluxService: TransPagoPluxService) {
    this.numeroIdentificacion = '';
    this.initialDate = '';
    this.finalDate = '';
    this.tipoPago = '';
    this.estado = '';
  }

  ngOnInit(): void {
  }

  enviar(): void {
    this.transPagoPluxService.getTransactions(this.numeroIdentificacion, this.initialDate, this.finalDate, this.tipoPago, this.estado)
      .subscribe(
        data => {
          console.log('Transacciones obtenidas:', data);
          this.respuestaJSON = data;
        },
        error => {
          console.error('Error al obtener transacciones:', error);
        }
      );
  }
}
