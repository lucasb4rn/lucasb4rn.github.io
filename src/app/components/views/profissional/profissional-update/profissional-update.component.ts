import { ActivatedRoute, Router } from '@angular/router';
import { ProfissionalService } from '../profissional.service';
import { Component, OnInit } from '@angular/core';
import { Profissional } from '../profissional.module';
import { ColaboradorService } from '../../colaborador/colaborador.service';

@Component({
  selector: 'app-profissional-update',
  templateUrl: './profissional-update.component.html',
  styleUrls: ['./profissional-update.component.css']
})
export class ProfissionalUpdateComponent implements OnInit {
  
  profissional: Profissional = {
    id: '',
    nome: '',
    colaborador: {
      nome: ''
    }
  }
  
  
  constructor(private service: ProfissionalService, private serviceColaborador: ColaboradorService, private route: ActivatedRoute, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.profissional.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  
  findById(): void {
    this.service.findById(this.profissional.id!).subscribe((resposta) => {
      this.profissional = resposta;
    })
  }

  update(): void {
    this.service.update(this.profissional).subscribe((resposta) => {
      this.router.navigate(['profissional'])
      this.service.mensagem("Profissional atualizado com Sucesso!")
    }, err => {
      for(let i =0 ; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message);
      }
    })
  }

  navegarParaBuscarColaborador(){
    this.serviceColaborador.set('nomeProfissional',  this.profissional.nome.toString());
    this.router.navigate([`colaborador`])
  }

  cancel(): void {
    this.router.navigate([`profissional`])
  }
  
  
}
