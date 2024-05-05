const currentYear = new Date().getFullYear();
const data = {
  sitename: 'Joanner Pena Portfolio',
  sitetagline: 'Something great is on the way! ✨ 🔥',
  siteurl: 'https://joannerpena.me/',
  sitelogo: '',
  title: 'Coming Soon!',
  description:
    'We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.',
  newsletterheading: 'Stay tuned for our live updates!',
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
