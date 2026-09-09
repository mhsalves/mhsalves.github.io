/**
 * Single source for the details that appear in more than one section.
 *
 * Everything here comes from the CV and the public GitHub profile. The phone
 * number on the CV is deliberately left out: it is not something to publish on
 * a page anyone can read.
 */
const name = 'Matheus Alves';
const role = 'Senior Software Engineer';
const company = 'CESAR';
const location = 'Manaus, Amazonas, Brazil';

const email = 'matheus.henriquesouzaalves@gmail.com';

const links = {
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mhsalves/',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/mhsalves',
  },
  email: {
    label: 'Email',
    href: `mailto:${email}`,
  },
};

export default {
  name,
  role,
  company,
  location,
  email,
  links,
};
