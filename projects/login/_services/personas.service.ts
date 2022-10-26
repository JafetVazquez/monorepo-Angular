import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Persona } from "../_shared/persona";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  rutaAPI = "https://rest-api-angular-php--parzibyte.repl.co";

  constructor(private http: HttpClient) { }

  obtener(){
    return this.http.get(`${this.rutaAPI}/obtenerPersonas.php`);
  }

  registrar(persona: Persona){
    return this.http.post(`${this.rutaAPI}/registrarPersona.php`, persona)
  }

  actualizar(persona: Persona){
    return this.http.post(`${this.rutaAPI}/actualizarPersona.php`, persona);
  }

  eliminar(id: string | number){
    return this.http.delete(`${this.rutaAPI}/eliminarPersona.php?=${id}`);
  }

}
