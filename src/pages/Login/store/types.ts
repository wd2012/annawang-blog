import { ActionWithState, ActionsWithState, ActionsObjectWithState } from '../../../types';
import { LoginState } from './state';

export type Action = ActionWithState<LoginState>;
export type ActionsObject = ActionsObjectWithState<LoginState>;
export type Actions = ActionsWithState<LoginState>;