import axios, { AxiosResponse } from 'axios';

import api from "./api.service";
import { userType } from "../models/User.model";
interface loginData {
  auth: boolean;
  user?: {
    id: string,
    email: string,
    user_type: userType,
    createdAt: Date,
    updatedAt: Date
  },
  token?: string;
  error?: any;
}

export default class UserService {
  async login(email: string, password: string) {
    try {
      let response: AxiosResponse = await api.post('/user/login', { email, password });

      const data: loginData = response.data;
      return data;
    } catch (error: any) {

      if (axios.isAxiosError(error)) {

        const data: any = error.response.data
        let message: string = error.message;
        if (data) message = data.error;

        const err: loginData = {
          auth: false,
          error: message
        }
        return err;
      }
    }

  }
}
