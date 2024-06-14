import {
  createAction,
  createFeatureSelector,
  createSelector,
  props,
} from '@ngrx/store';
import { UsuarioModel } from 'src/app/Models/UsuarioModel';
import { UsuariosState } from './usuarios.reducer';

export const enum usuariosTypeAction {
  LOAD_USUARIOS = '[LOAD_USUARIOS]',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS]',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL]',

  LOAD_USUARIO = '[LOAD_USUARIO]',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS]',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL]',

  CREATE_USUARIO = '[CREATE_USUARIO]',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS]',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL]',

  UPDATE_USUARIO = '[UPDATE_USUARIO]',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS]',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL]',

  DELETE_USUARIO = '[DELETE_USUARIO]',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS]',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL]',
}

// ---- load usuarios
export const LoadUsuarios = createAction(usuariosTypeAction.LOAD_USUARIOS);

export const LoadUsuariosSuccess = createAction(
  usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel[] }>()
);

export const LoadUsuariosFail = createAction(
  usuariosTypeAction.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);

// ---- load usuario
export const LoadUsuario = createAction(usuariosTypeAction.LOAD_USUARIO);

export const LoadUsuarioSuccess = createAction(
  usuariosTypeAction.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
  usuariosTypeAction.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);

// ---- create usuario
export const CreateUsuario = createAction(
  usuariosTypeAction.CREATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
  usuariosTypeAction.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioFail = createAction(
  usuariosTypeAction.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);

// ---- update usuario
export const UpdateUsuario = createAction(
  usuariosTypeAction.UPDATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioSuccess = createAction(
  usuariosTypeAction.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioFail = createAction(
  usuariosTypeAction.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);

// ---- delete usuario
export const DeleteUsuario = createAction(
  usuariosTypeAction.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const DeleteUsuarioSuccess = createAction(
  usuariosTypeAction.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

export const DeleteUsuarioFail = createAction(
  usuariosTypeAction.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);

// SELECTORS

/*
const getUsuariosFeatureState =
  createFeatureSelector<UsuariosState>('usuarios');

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios
);

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuario
);

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.error
);
*/
