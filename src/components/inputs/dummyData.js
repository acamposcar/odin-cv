import { v4 as uuidv4 } from 'uuid';

export const school = (organization, city, title, from, to, description) => {
  const id = uuidv4();
  return {
    id, organization, city, title, from, to, description,
  };
};

const company = (name, city, role, from, to, description) => {
  const id = uuidv4();
  return {
    id, name, city, role, from, to, description,
  };
};

export const DUMMY_COMPANY_A = company(
  'A Boring Company',
  'San Francisco, US',
  'Frontend Developer',
  new Date(),
  new Date(),
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ex nisl. Duis sed euismod risus. Integer tristique pretium nunc vitae sagittis. ',
);
export const DUMMY_COMPANY_B = company(
  'The Office',
  'Valencia, Spain',
  'Backend Developer',
  new Date(),
  new Date(),
  'Sed vestibulum, dui id cursus finibus, velit neque pretium purus, ac pretium turpis justo in urna. Fusce dapibus, est a vestibulum auctor, massa elit vulputate orci, ut mollis nibh orci vel enim. Nunc dictum augue eu lectus fringilla lacinia. Aenean tristique convallis diam, at pharetra neque congue at. ',

);
export const DUMMY_SCHOOL_A = school(
  'Universitat Politècnica',
  'Valencia',
  'Bachelor\'s Degree in Industrial Engineering',
  new Date(2010, 8, 1),
  new Date(2014, 6, 1),
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ex nisl. Duis sed euismod risus. Integer tristique pretium nunc vitae sagittis. ',
);
export const DUMMY_SCHOOL_B = school(
  'Universitat Politècnica',
  'Valencia',
  'Master\'s Degree in Industrial Engineering Developer',
  new Date(2014, 8, 1),
  new Date(2016, 8, 1),
  'Sed vestibulum, dui id cursus finibus, velit neque pretium purus, ac pretium turpis justo in urna. Fusce dapibus, est a vestibulum auctor, massa elit vulputate orci, ut mollis nibh orci vel enim. Nunc dictum augue eu lectus fringilla lacinia. Aenean tristique convallis diam, at pharetra neque congue at. ',
);

export const DUMMY_PERSONAL = {
  firstName: 'Alejandro',
  lastName: 'Campos',
  role: 'Software Programmer',
  address: 'Valencia, Spain',
  phone: '+34654123456',
  email: 'acampos@example.com',
};
