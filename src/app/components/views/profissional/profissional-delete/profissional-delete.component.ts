import { ProfissionalService } from '../profissional.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from '../profissional.module';

@Component({
  selector: 'app-profissional-delete',
  templateUrl: './profissional-delete.component.html',
  styleUrls: ['./profissional-delete.component.css']
})
export class ProfissionalDeleteComponent implements OnInit {
  
  profissional: Profissional = {
    id: '',
    nome: '',
    colaborador: {
      nome: ''
    }
  }
  
  constructor(private service: ProfissionalService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.profissional.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  
  findById(): void {
    this.service.findById(this.profissional.id!).subscribe((resposta) =>{
      this.profissional = resposta;
      console.log(this.profissional)
    } )
  }
  
  delete(): void {
    this.service.delete(this.profissional.id!).subscribe((resposta) => {
      this.router.navigate(['profissional'])
      this.service.mensagem("Profissional deletado com Sucesso!")
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }
  
  cancel(): void {
    this.router.navigate(['profissional'])
  }
  
  
  
}
