import Store from 'redux-zero/interfaces/Store';

export type ActionWithState<T> = (state: T, ...args: any[]) => Partial<T> | Promise<Partial<T>>;
export interface ActionsObjectWithState<T> {
  [actionName: string]: ActionWithState<T>;
};
export type ActionsWithState<T> = (store: Store<T>) => ActionsObjectWithState<T>;
