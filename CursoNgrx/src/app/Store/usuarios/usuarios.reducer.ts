import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { UsuarioModel } from 'src/app/Models/UsuarioModel';
import * as fromUsuarioActions from '../usuarios/usuarios.actions';

export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string | '';
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

const _usuariosReducer = createReducer(
  initialState,
  on(fromUsuarioActions.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuarioActions.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuarioActions.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuarioActions.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuarioActions.CreateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuarioActions.CreateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuarioActions.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if (row.id === payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),
  on(fromUsuarioActions.UpdateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuarioActions.DeleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((row) => row.id !== payload),
    error: '',
  })),
  on(fromUsuarioActions.DeleteUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

export function usuariosReducer(state = initialState, action: Action) {
  return _usuariosReducer(state, action);
}

const getUsuariosFeaturestate =
  createFeatureSelector<UsuariosState>('usuarios');

export const getUsuario = createSelector(
  getUsuariosFeaturestate,
  (state: UsuariosState) => state.usuario
);
export const getUsuarios = createSelector(
  getUsuariosFeaturestate,
  (state: UsuariosState) => state.usuarios
);
export const getUsuarioErro = createSelector(
  getUsuariosFeaturestate,
  (state: UsuariosState) => state.error
);
