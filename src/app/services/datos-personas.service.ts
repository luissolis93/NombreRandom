import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonasService {

  
  public DatosPeronas(genero){
  let url:string='https://uinames.com/api/?ext&amount=1';
    
    switch (genero){
      case "M": 
      url+='&gender=male';
      break;

      case "F":
      url+='&gender=female'
      console.log('Femenino');
      
      break;
      
      default:
        url=url;
        console.log('Aleatorio');
      break;    
    }
    
    
    return this.http.get(url)

  }
public SoloHombre(){
  return this.http.get('https://uinames.com/api/?ext&amount=1&gender=male')
}
public SoloMujeres(){
  return this.http.get('https://uinames.com/api/?ext&amount=1&gender=female')
}

  constructor(private http:HttpClient) { }
}
