import {BaseToast, ErrorToast} from 'react-native-toast-message';
import {GlobalColors} from '../constants/Colors';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: GlobalColors.light.BgSuccess,
        width: '98%',
        border: 0,
        borderLeftColor:GlobalColors.light.BgSuccess
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '800',
        color:GlobalColors.light.DividerSuccess
      }}
      swipeable:true
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
        color: GlobalColors.light.ContentError
      }}
      style={{
        backgroundColor: GlobalColors.light.BgError,
        width: '98%',
        border: 0,
        borderLeftColor:GlobalColors.light.BgError
      }}
      swipeable:true

    />
  ),
};

export default toastConfig;
