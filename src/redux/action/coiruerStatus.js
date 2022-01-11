import {API_HOST} from '../../config';

export const changeStatus = (bodyData, token) => dispatch => {
  API_HOST.put('change_status_assigntment', bodyData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(res => {
      dispatch({type: 'SET_STATUS', value: res.data.msg});
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
