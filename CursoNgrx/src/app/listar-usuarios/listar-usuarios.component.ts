import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Repository/UsuarioService';
import { UsuarioModel } from '../Models/UsuarioModel';

import { AppState } from '../Store/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  //listaUsuarios: UsuarioModel[] = [];

  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuarios
  );
  constructor(
    //private usuarioService: UsuarioService
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    /*this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios = usuarios;
    });*/
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }
}
