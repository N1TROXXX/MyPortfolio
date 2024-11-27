module.exports = {
  email: 'INFO@ALKHAZISHVILI.COM',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/N1TROXXX',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alkhaz_a',
    },
    {
      name: 'Twitter',
      url: 'https://X.com/alkhazishvili2',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alkhazishvili',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/N1TROXXX',
    },
  ],

  navLinks: [
    
    {
      name: 'Home',
      url: '/#home',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'About Me',
      url: '/#about',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },

  ],

  colors: {
    green: '#64ffda',
    navy: '#1b17eb',
    darkNavy: '#64ffda',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
