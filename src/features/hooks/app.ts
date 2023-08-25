import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

type DispatchFunc = () => AppDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useUserSelector = () =>
  useAppSelector((state: RootState) => state.user);
