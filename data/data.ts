const currentYear = new Date().getFullYear();
const data = {
  sitename: 'Joanner Pena Portfolio',
  sitetagline: 'Something great is on the way! ✨ 🔥',
  siteurl: 'https://joannerpena.me/',
  sitelogo: '',
  title: 'Coming Soon!',
  description:
    'I&apos;m currently working 👨‍💻 hard to bring you something great, and I can&apos;t wait to share it with you 📅.',
  copyrightText: `Copyright © ${currentYear}`,
  socialIconsHeading: 'Follow Us 📣',
  hideSubscribeForm: true, // make true to disable subscription form
  socialIcons: [
    {
      icon: 'github',
      link: 'https://github.com/joannerpena',
    },
    {
      icon: 'linkedIn',
      link: 'https://www.linkedin.com/in/joannerpena/',
    },
  ],
  hide: {
    subscribeForm: true, // make true to disable subscription form
    header: false,
    content: false,
    footer: false,
  },
};

export default data;
