import { createStore } from 'redux';
import { Reducers } from '../reducers';

// eslint-disable-next-line import/prefer-default-export
export const Store = createStore(Reducers);
