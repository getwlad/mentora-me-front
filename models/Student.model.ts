interface InterestArea {
  mentoring_area: string;
}
interface Student {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
  user_id: string
  interests: InterestArea[];
}


export default Student
