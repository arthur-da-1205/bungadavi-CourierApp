import {API_HOST} from '../../config';
import {storeData} from '../../utils/storage';
import {toastMessage} from '../../utils/toastMessage';
import {setLoading} from './global';

export const signInAction = (form, deviceToken, navigation) => dispatch => {
  dispatch(setLoading(true));
  API_HOST.post('/login', form)
    .then(res => {
      dispatch(setLoading(false));
      const token = res.data.token;
      const profile = {
        id: res.data.data[0].id,
        fullName: res.data.data[0].fullname,
        username: res.data.data[0].username,
        uuid: res.data.data[0].uuid,
        email: res.data.data[0].email,
        mobilePhone: res.data.data[0].mobile,
        point: res.data.data[0].point,
        photo: res.data.data[0].photo,
      };

      storeData('TOKEN', {value: token});
      storeData('USER_PROFILE', profile);

      const courierUuid = res.data.data[0].uuid;
      const dataToken = new FormData();
      dataToken.append('courier_uuid', courierUuid);
      dataToken.append('fcm', deviceToken);

      // API_HOST.put('/add_fcm', dataToken, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      //   .then(response => {})
      //   .catch(err => {
      //     toastMessage(err, 'danger');
      //   });
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err);
      toastMessage('Invalid username or password', 'danger');
    });
};

export const resetPasswordAction = () => {};
