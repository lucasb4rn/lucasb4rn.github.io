import { ColaboradorService } from './../../colaborador/colaborador.service';
import { Colaborador } from './../../colaborador/colaborador.module';
import { Router } from '@angular/router';
import { ProfissionalService } from '../profissional.service';
import { Component, OnInit } from '@angular/core';
import { Profissional } from '../profissional.module';

@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.css']
})
export class ProfissionalCreateComponent implements OnInit {

  profissional: Profissional = {
    nome: '',
    colaborador: {
      nome: ''
    }
  
  }

  constructor(private service: ProfissionalService, private serviceColaborador: ColaboradorService, private router: Router) { }

  ngOnInit(): void {
    
    if(this.serviceColaborador.get('nomeProfissional')){
       this.profissional.nome = this.serviceColaborador.get('nomeProfissional');
     }

    if(this.serviceColaborador.get('id')){
     this.serviceColaborador.findById(this.serviceColaborador.get('id')).subscribe((resposta) => {
      this.profissional.colaborador = resposta;
     });
    }

  }

  create(): void  {
    this.service.create(this.profissional).subscribe((resposta) => {
      this.router.navigate(['profissional'])
      this.service.mensagem('Profissional cadastrado com sucesso!');
    }, err => {
      for(let i =0 ; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message);
      }

    })
  }

  cancel(): void {
    this.router.navigate([`profissional`])
  }


  navegarParaBuscarColaborador(){
    this.serviceColaborador.set('nomeProfissional',  this.profissional.nome.toString());
    this.router.navigate([`colaborador`])
  }

}
