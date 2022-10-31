interface InterestArea {
  mentoring_area: string;
}
interface Mentorships {
  name: string
}

interface Mentor {
  id: string;
  name: string;
  phone: string;
  cnpj: string;
  publicEmail: string;
  chavePix: string
  createdAt: Date;
  updatedAt: Date;
  InterestArea?: InterestArea;
  Mentorships?: Mentorships[]

}
export default Mentor;
