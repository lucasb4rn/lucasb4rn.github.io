import { Colaborador } from "../colaborador/colaborador.module";

export interface Profissional {
  id?: String;
  nome: String;
  colaborador : Colaborador;

}