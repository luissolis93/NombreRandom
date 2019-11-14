import { Component, OnInit } from '@angular/core';
import { DatosPersonasService } from '../../services/datos-personas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public ocultar:boolean=false;

  public prueba(){
    this.ocultar=true;
  }

public datos:any={}


public genero:string=""
public ActivoA:boolean=true;
public ActivoF:boolean=false;
public ActivoM:boolean=false;

  public CambiarValor(valor){
  
    if(valor=='A'){
      this.ActivoA=true;
      this.ActivoF=false;
      this.ActivoM=false;
      this.genero="";
      document.getElementById("elInput").focus();
      return 
    }
    if(valor=='F'){
      this.ActivoA=false;
      this.ActivoF=true;
      this.ActivoM=false;
      this.genero="F";
      document.getElementById("elInput").focus();
      return 
    }
    if(valor=='M'){
      this.ActivoA=false;
      this.ActivoF=false;
      this.ActivoM=true;
      this.genero="M";
      document.getElementById("elInput").focus();
      return 
    } 
  }

  public colorAleatorio(){
    return Math.floor(Math.random() * this.colores.length);
  }

  //public colores:Array<string>=['#33A5FF','#FFD133','#5EDE0F','#00AF7F','#00AF7F','#9D3FCF','#0EAB04','#04AB71','#5A3014','#3E8818','black']
  public colores:Array<string>=['green'];

  public color="#00"

  public ObtenerDatos(){

    console.log(this.genero);
    this._datosPersonas.DatosPeronas(this.genero).subscribe((info:any)=>{
      this.color=this.colores[this.colorAleatorio()]
      this.datos=info;
      console.log(this.datos);

      
    });
  }
  
  constructor(private _datosPersonas:DatosPersonasService) {

this._datosPersonas.DatosPeronas(this.genero).subscribe((info:any)=>{
  
      this.datos=info;
      console.log(this.datos);
      document.getElementById("espacio").focus();
      // this.ocultar=true;
    });
 
  }

  ngOnInit() {
  }

}
