import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './state/app/reducer';
import { State } from './types/State';
import { taskReducer } from './state/task/reducer';

const reducer = combineReducers<State>({
  app: appReducer,
  task: taskReducer
});
const enhancers = [applyMiddleware(thunk)];

export const store = createStore(reducer, composeWithDevTools(...enhancers));
