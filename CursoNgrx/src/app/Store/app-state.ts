// local de centralizacao dos reducers e effects

import { ActionReducerMap } from '@ngrx/store';
import { UsuariosState, usuariosReducer } from './usuarios/usuarios.reducer';
import { UsuariosEffects } from './usuarios/usuarios.effects';

export interface AppState {
  //usuarios é a mesma chave usada no reducer
  //createFeatureSelector<UsuariosState>('usuarios');
  //aqui adiciona todoos os states
  usuarios: UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
  //aqui adiciona todoos os reducers
  usuarios: usuariosReducer,
};

export const appEffects = [
  //aqui adiciona todoos os effects
  UsuariosEffects,
];
