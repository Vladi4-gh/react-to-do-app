import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './state/app/reducer';
import { localizationReducer } from './state/localization/reducer';
import { State } from './types/State';
import thunk from 'redux-thunk';

const reducer = combineReducers<State>({
  app: appReducer,
  localization: localizationReducer
});
const enhancers = [applyMiddleware(thunk)];

export const store = createStore(reducer, composeWithDevTools(...enhancers));
