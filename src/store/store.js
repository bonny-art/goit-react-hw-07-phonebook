import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from '../store';

const reducer = {
  filter: filterReducer,
  contacts: contactsReducer,
};

const customMiddleware = store => {
  return next => {
    return action => {
      if (typeof action === 'function') {
        action(store.dispatch);
        return;
      }
    };
  };
};

export const store = configureStore({
  reducer,
  middleware: () => [customMiddleware],
});
