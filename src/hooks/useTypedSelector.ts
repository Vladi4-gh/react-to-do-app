import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { State } from '../store/types/State';

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
