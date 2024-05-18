import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransPagoPluxService {

  private apiUrl = 'http://localhost:4000/api/pagoPlux'; 

  constructor(private http: HttpClient) { }

  getTransactions(numeroIdentificacion: string, initialDate: string, finalDate: string, tipoPago: string, estado: string): Observable<any> {
    const requestBody = {
      numeroIdentificacion,
      initialDate,
      finalDate,
      tipoPago,
      estado
    };

    return this.http.post<any>(this.apiUrl, requestBody);
  }
}
