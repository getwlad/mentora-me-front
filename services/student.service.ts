import Student from "../models/Student.model";
import api from "./api.service";
import axios, { AxiosResponse } from "axios";

export default class StudentService {
  async getStudent(token: string) {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response: AxiosResponse = await api.get('/student/show', config);
      const studentData: Student = response.data;
      return studentData;

    } catch (error: any) {
      if (axios.isAxiosError(error)) {

        const data: any = error.response.data
        let message: string = error.message;
        if (data) message = data.error;
        return message;
      }
      else {
        throw error.message;
      }
    }
  }
}
