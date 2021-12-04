import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-crear-disco',
  templateUrl: './crear-disco.component.html',
  styleUrls: ['./crear-disco.component.css']
})
export class CrearDiscoComponent implements OnInit {

  discoForm: FormGroup;
  titulo = 'Actualizar Disco';
  id:string | null;

  constructor(private fb: FormBuilder,
  private router: Router,
  private toastr: ToastrService,
  private _discosService : DiscoService,
  private aRouter: ActivatedRoute) {
    
  
   this.discoForm = this.fb.group ({
    artista: ['',Validators.required],
    album: ['',Validators.required],
    año: ['',Validators.required],
    categoria: ['',Validators.required],
    estado: ['',Validators.required],
    precio: ['',Validators.required],
   
  })
  this.id = this.aRouter.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.enEditar()
   

  }

  agregarDisco(){
    
    const DISCO: Disco={
      artista: this.discoForm.get('artista')?.value,
      album: this.discoForm.get('album')?.value,
      año: this.discoForm.get('año')?.value,
      categoria: this.discoForm.get('categoria')?.value,
      estado: this.discoForm.get('estado')?.value,
      precio: this.discoForm.get('precio')?.value,
      

    }
    console.log(DISCO);
    this._discosService.guardarDiscos(DISCO).subscribe(data =>{
      this.toastr.success('Disco agregado con exito', 'Guardado');
      this.router.navigate(['/']);
    },error=>{
      console.log(error);
      this.discoForm.reset();
    
    })
    
  }

  enEditar(){
if(this.id !== null){
this.titulo = 'Actualizar Disco';
this._discosService.obtenerDisco(this.id).subscribe(data=>{
this.discoForm.setValue({
    artista: data.artista,
    album: data.album,
    año: data.año,
    categoria:data.categoria,
    estado: data.estado,
    precio: data.precio,


})

})

}
}


}
