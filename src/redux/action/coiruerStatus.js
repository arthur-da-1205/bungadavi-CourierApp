import {API_HOST} from '../../config';

export const changeStatus = (flagStatus, token) => {
  switch (flagStatus) {
    case 'assigning':
      flagStatus = '1';
      break;
    case 'accepted':
      flagStatus = '2';
      break;
    default:
      return flagStatus;
  }

  API_HOST.put('change_status_assigntment', flagStatus, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
