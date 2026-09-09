import profile from 'data/profile';

const title = 'Get in touch';
const eyebrow = 'Contact';

const description = 'I am always happy to talk about front-end architecture, building teams, or the JavaScript community in Manaus. Email is the quickest way to reach me.';

const action = {
  label: 'Send me an email',
  href: profile.links.email.href,
};

const links = [profile.links.linkedin, profile.links.github];

export default {
  title,
  eyebrow,
  description,
  action,
  links,
  email: profile.email,
  location: profile.location,
};
