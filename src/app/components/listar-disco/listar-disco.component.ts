import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-listar-disco',
  templateUrl: './listar-disco.component.html',
  styleUrls: ['./listar-disco.component.css']
})
export class ListarDiscoComponent implements OnInit {
  listDiscos: Disco[] = [];

  constructor(private _discoService: DiscoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDiscos();
  }

  obtenerDiscos(){

    this._discoService.getdiscos().subscribe(data => {
      console.log('prueba',data);
      this.listDiscos = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarDisco(id: any){

    this._discoService.eliminarDiscos(id).subscribe(data => {
      this.toastr.error('Este disco fue eliminado', 'Disco eliminado');
      this.obtenerDiscos();
    }, error => {
      console.log(error);
    })
  }
}
