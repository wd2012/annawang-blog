import { ActionWithState, ActionsWithState, ActionsObjectWithState } from '../../../types';
import { IndexState } from './state';

export type Action = ActionWithState<IndexState>;
export type ActionsObject = ActionsObjectWithState<IndexState>;
export type Actions = ActionsWithState<IndexState>;