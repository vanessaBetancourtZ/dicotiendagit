import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/services/disco.service';

@Component({
  selector: 'app-ver-disco',
  templateUrl: './ver-disco.component.html',
  styleUrls: ['./ver-disco.component.css']
})
export class VerDiscoComponent implements OnInit {

  constructor(private _discoService: DiscoService) { }

  ngOnInit(): void {
    this.obtenerDiscos();
  }
  obtenerDiscos(){

    this._discoService.getdiscos().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}




