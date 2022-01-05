import {API_HOST} from '../../config';
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
        console.log(res.data.msg);
        dispatch({type: 'SET_ASSIGN', value: res.data.msg});
        dispatch(setLoading(false));
        console.log('Success fetch data');
      })
      .catch(err => {
        // dispatch(setLoading(false));
        console.log('Error: ', err);
      });
  }
};
