import { Component, OnInit } from '@angular/core';
import { Cambio } from 'src/app/models/cambio';
import { TipoCambio } from 'src/app/models/tipo-cambio';
import { CambioService } from 'src/app/services/cambio.service';

@Component({
  selector: 'app-cambios',
  styleUrls: ['./cambios.component.css'],
  template: `
  <h2>Tipo de Cambio</h2>
  <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>id</th>
      <th>Fecha de Tipo de Cambio</th>
      <th>Moneda de Origen</th>
      <th>Moneda de Destino</th>
      <th>Tipo de Transacción</th>
      <th>Tipo de Cambio</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let cambio of cambios">
      <td>{{ cambio.id }}</td>
      <td>{{ cambio.fechaTipoCambio }}</td>
      <td>{{ cambio.monedaOrigen }}</td>
      <td>{{ cambio.monedaDestino }}</td>
      <td>{{ cambio.tipoTransaccion }}</td>
      <td>{{ cambio.montoCambio }}</td>
    </tr>

  </tbody>
</table>

  <h2>Formulario</h2>
  <div class="row">
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px;">
      <label for="MontoOrigen" class="form-label">Moneda Origen</label>
      <input   type="text" class="form-control" id="MontoOrigen" [(ngModel)]="tipoCambio.monedaOrigen" name="MonedaOrigen">
    </div>
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px;">
      <label for="MontoDestino" class="form-label">Moneda Destino</label>
      <input  type="text" class="form-control" id="MontoDestino" [(ngModel)]="tipoCambio.monedaDestino" name="MonedaDestino">
    </div>
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px;">
      <label for="TipoOperacion" class="form-label">Tipo de Operación</label>
      <input type="text" class="form-control" id="TipoOperacion" [(ngModel)]="tipoCambio.tipoTransaccion" name="MonedaOrigen">
    </div>
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px;">
      <label for="Fecha" class="form-label">Fecha</label>
      <input type="text" class="form-control" id="Fecha" [(ngModel)]="tipoCambio.fechaTipoCambio" name="Fecha">
      <label for="Fecha" class="form-label">Formato Obligatorio: dd-MM-yyyy</label>
    </div>
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px;">
      <label for="Monto" class="form-label">Monto</label>
      <input type="number" class="form-control" id="Monto" [(ngModel)]="tipoCambio.monto" name="Monto">
    </div>
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px; padding-top: 32px;">
      <button type="submit" class="btn btn-primary" (click)="calcular()">Calcular</button>
    </div>
  </div>
  <br>
  <h2>Resultados</h2>
  <br>
  <div class="row">
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px;">
      <label for="MontoDevuelto" class="form-label">Monto Devuelto</label>
      <input class="form-control" type="text" value="{{MontoTipoCambio}}"  aria-label="readonly input example" readonly>
    </div>
    <div class="col-xs-6" style ="padding-right: 15px;  padding-left: 15px;">
      <label for="TipoCambio" class="form-label">TipoCambio</label>
      <input class="form-control" type="text" value="{{MontoCambio}}" aria-label="readonly input example" readonly>
    </div>
  </div>

`
})
export class CambiosComponent implements OnInit {

  cambios: Cambio[] ;
  tipoCambio: TipoCambio =new TipoCambio();
  MontoTipoCambio: number;
  MontoCambio: number;
  constructor(private service:CambioService) { }

  ngOnInit() {
    this.service.listar().subscribe(cambios => this.cambios = cambios);
  }

  public calcular():void {
    this.service.calcular(this.tipoCambio).subscribe(tipoCambio => {
      this.MontoTipoCambio= tipoCambio.montoTipoCambio;
      this.MontoCambio = tipoCambio.montoCambio;
      console.log(tipoCambio);
      console.log(this.MontoTipoCambio);
      console.log(this.MontoCambio);

    })
  }

}
