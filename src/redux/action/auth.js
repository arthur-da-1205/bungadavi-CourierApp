import axios from 'axios';

import {API_HOST} from '../../config';
import {toastMessage} from '../../utils';
import {storeData} from '../../utils/storage';
import {setLoading} from './global';

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post('http://api.bungadavi.brits-team.com:8080/api/v1/kurir/login', form)
    .then(res => {
      const token = res.data.token;
      const profile = {
        id: res.data.data[0].id,
        username: res.data.data[0].username,
        email: res.data.data[0].email_courier,
        mobilePhone: res.data.data[0].phone_courier,
        point: res.data.data[0].point_courier,
        photo: res.data.data[0].photo_courier,
      };

      dispatch(setLoading(false));
      storeData('TOKEN', {value: token});
      storeData('USER_PROFILE', profile);

      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err);
      toastMessage('Invalid email or password', 'danger');
    });
};

export const resetPasswordAction = () => {};
