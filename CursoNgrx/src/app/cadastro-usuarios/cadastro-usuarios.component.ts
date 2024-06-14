import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuarioService } from '../Repository/UsuarioService';
import { AppState } from '../Store/app-state';
import { Store } from '@ngrx/store';

import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(
    // private usuarioService: UsuarioService
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  addUsuario() {
    if (this.model.id === 0) {
      console.log(this.model);

      // this.usuarioService.addUsuario(this.model).subscribe();
      this.store.dispatch(
        fromUsuariosAction.CreateUsuario({ payload: this.model })
      );
    }
  }
}
