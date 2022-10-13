import { ColaboradorService } from './../../colaborador/colaborador.service';
import { ProfissionalService } from '../profissional.service';
import { Component, OnInit } from '@angular/core';
import { Profissional } from '../profissional.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-read',
  templateUrl: './profissional-read.component.html',
  styleUrls: ['./profissional-read.component.css']
})
export class ProfissionalReadComponent implements OnInit {
  
  profissional: Profissional[] = []
  
  displayedColumns: string[] = ['id', 'nome', 'colaborador', 'acoes'];
  
  constructor(private service: ProfissionalService, private colaboradorService: ColaboradorService, private router: Router) { }
  
  ngOnInit(): void {
    this.findAll();
  }
  
  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.profissional = resposta;
    })
    
  }

  navegarParaProfissionalCreate(){
    this.colaboradorService.clear();
    this.router.navigate(["profissional/create"])
  }
}
