import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://fintech-backend-mfxg.onrender.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getOtp = async phone => {
  try {
    const response = await api.post('user/otp/generate', {phoneNo: phone});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyOtp = async (phone, otp) => {
  try {
    const response = await api.post('user/otp/verify', {
      phoneNo: phone,
      otp: otp,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
