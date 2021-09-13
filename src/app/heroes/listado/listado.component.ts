import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
heroes:string[]=['spiderman','ironman','hulk','panteraNegra'];
heroeBorrado:string="";  
constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("onInit");
  }
  borrarHeroe(){
   this.heroeBorrado= this.heroes.shift()|| '';
    console.log("borrado"+ this.heroeBorrado);
  }

}
