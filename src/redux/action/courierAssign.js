import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import {API_HOST} from '../../config';
import {toastMessage} from '../../utils';
import {setLoading} from './global';

export const getAssignData = (token, courierId) => dispatch => {
  if (token) {
    dispatch(setLoading(true));
    API_HOST.get('/courier_assign', {
      params: {courier_uuid: courierId},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        dispatch(setLoading(false));
        console.log('Success fetch data');
        console.log(res.data);
      })
      .catch(err => {
        // dispatch(setLoading(false));
        console.log('Error: ', err);
      });
  }
};
