/**
 * Single source for the details that appear in more than one section.
 *
 * Everything here comes from the CV and the public GitHub profile. Two things
 * are deliberately absent: the phone number from the CV, and the email address.
 * Neither belongs on a page anyone can read — LinkedIn is the way in.
 */
const name = 'Matheus Alves';
const role = 'Senior Software Engineer';
const location = 'Manaus, Amazonas, Brazil';

const links = {
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mhsalves/',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/mhsalves',
  },
};

export default {
  name,
  role,
  location,
  links,
};
