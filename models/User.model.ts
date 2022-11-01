
export enum userType {
  STUDENT = 'STUDENT', MENTOR = 'MENTOR'
}
interface User {
  id: string;
  email: string;
  user_type: userType
  createdAt: Date;
  updatedAt: Date;
}

export default User;
