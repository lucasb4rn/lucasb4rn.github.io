import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Colaborador } from './colaborador.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ColaboradorService {

  private storage: Storage;

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar, private router: Router) { 
    this.storage = window.localStorage;
  }

  findAll():Observable<Colaborador[]>{
    const url = `${this.baseUrl}/colaborador`
    return this.http.get<Colaborador[]>(url)
  }
  
  findById(id: String): Observable<Colaborador>{
    const url = `${this.baseUrl}/colaborador/${id}`
    return this.http.get<Colaborador>(url);
  }


  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }


  get(key: string): any {
    if (this.storage) {
      return this.storage.getItem(key);
    }
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }



}
