import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  panelOpenState = false;
  
  constructor() { 
    
  }
  
  ngOnInit(): void {
    
  }
  
  hideColaborador: boolean = false;
  hidePaciente: boolean = false;
  hideRelatorios: boolean = false;
  
  escondeColaborador(){
    
    if(this.hideColaborador == true){
      this.hideColaborador = false;
    } else {
      this.hideColaborador =true;
    }
    
  }

  escondePaciente(){

    if(this.hidePaciente == true){
      this.hidePaciente = false;
    } else {
      this.hidePaciente =true;
    }
  }
  
  escondeRelatorios(){

    if(this.hideRelatorios == true){
      this.hideRelatorios = false;
    } else {
      this.hideRelatorios =true;
    }
  }

  
}
