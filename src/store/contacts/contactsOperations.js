import * as contactsActions from './contactsSlice';
import * as contactsAPI from '../../services/';

export const setContactsAction = () => {
  return async dispatch => {
    try {
      dispatch(contactsActions.fetchContactsStart());
      const data = await contactsAPI.getAllContacts();
      dispatch(contactsActions.fetchContactsSuccess(data));
    } catch (error) {
      console.log('error :>> ', error);
      dispatch(contactsActions.fetchContactsError(error));
    }
  };
};
