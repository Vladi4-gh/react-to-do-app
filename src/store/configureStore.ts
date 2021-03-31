import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import { appReducer } from './state/app/reducer';
import { State } from './types/State';
import { taskReducer } from './state/task/reducer';

const reducer = combineReducers<State>({
  app: appReducer,
  task: taskReducer
});
const localStorageNamespace = 'react-to-do-app';
const storeEnhancers = [save({ namespace: localStorageNamespace })];

export const store = createStore(reducer, load({ namespace: localStorageNamespace }), composeWithDevTools(applyMiddleware(...storeEnhancers)));
