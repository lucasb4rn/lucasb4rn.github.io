import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from '../colaborador.module';
import { ColaboradorService } from '../colaborador.service';


@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.css']
})
export class ColaboradorReadComponent implements OnInit {
  
  colaboradores: Colaborador[] = []
  
  displayedColumns: string[] = ['id', 'nome', 'acoes'];

  constructor(private service: ColaboradorService, private router: Router) { }
  
  ngOnInit(): void {
    this.findAll();
  }
  
  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.colaboradores = resposta;
    })
    
  }

  irParaCadastroProfissional(valor: string){
    this.service.set('id', valor);
    this.router.navigate(['profissional/create'])
  }

  
}
