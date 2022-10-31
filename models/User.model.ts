
enum userType {
  STUDENT = 'STUDENT', MENTOR = 'MENTOR'
}
export interface User {
  id: string;
  email: string;
  user_type: userType
  createdAt: Date;
  updatedAt: Date;

}
