import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import {API_HOST} from '../../config';
import {toastMessage} from '../../utils';
import {setLoading} from './global';

export const getAssignData = (token, courierId) => dispatch => {
  dispatch(setLoading(true));
  API_HOST.get(`/courier_assign?courier_uuid=${courierId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart-form',
    },
  })
    .then(res => {
      dispatch(setLoading(false));
      dispatch({type: 'SET_ASSIGN', value: res.data.msg});
      console.log('Success fetch data');
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log('Error: ', err);
    });
};
