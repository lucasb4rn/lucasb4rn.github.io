import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profissional } from './profissional.module';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  
  baseUrl: String = environment.baseUrl;
  
  constructor(private http: HttpClient, private _snack: MatSnackBar, private router: Router) { }
  
  findAll():Observable<Profissional[]>{
    const url = `${this.baseUrl}/profissional`
    return this.http.get<Profissional[]>(url)
  }
  
  findById(id: String): Observable<Profissional>{
    const url = `${this.baseUrl}/profissional/${id}`
    return this.http.get<Profissional>(url);
  }
  
  create(profissional: Profissional): Observable<Profissional>{
    const url = `${this.baseUrl}/profissional`
    return this.http.post<Profissional>(url, profissional);
  }
  
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  
  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/profissional/${id}`
    return this.http.delete<void>(url)
  }
  
  update(profissional: Profissional):Observable<void>{
    const url = `${this.baseUrl}/profissional/${profissional.id}`
    return this.http.put<void>(url, profissional)
  }
  

  navegarParaBuscaColaborador(){
    this.router.navigate(['/colaborador'])
  }


}


