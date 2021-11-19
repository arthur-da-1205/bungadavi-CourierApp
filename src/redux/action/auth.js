import axios from 'axios';

import {API_HOST} from '../../config';
import {toastMessage} from '../../utils';
import {storeData} from '../../utils/storage';
import {setLoading} from './global';

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST}/kurir/login`, form)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;

      dispatch(setLoading(false));

      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      toastMessage('Invalid email or password', 'danger');
      console.log(err?.response?.data?.message);
    });
};
