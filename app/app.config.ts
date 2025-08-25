export default defineAppConfig({
  url: 'https://huseyin.org',
  title: 'Huseyin M Ozyilmaz',
  description: "I am the Head of Software Engineering, working as a Technical Assurance Director at Wood plc in the UK",
  blogTitle: 'Notes on Software Development & Technology',
  headline: "Leading a global software development team with 100+ highly skilled professionals at one of the world's renowned consulting and engineering companies operating across 60 countries.",
  logo: {
    src: '/resources/icons/huseyin-ozyilmaz-logo.svg',
    alt: 'Logo of Huseyin Ozyilmaz'
  },
  profile: {
    fullName: 'Huseyin M Ozyilmaz',
    fullNameTr: 'Hüseyin M Özyılmaz',
    shortName: 'Huseyin Ozyilmaz',
    titles: [
      'Head of Software Engineering',
      'Technical Director'
    ],
    photo: {
      src: '',
      alt: 'Profile photo of Huseyin Ozyilmaz'
    },
    social: {
      linkedIn: {
        title: 'LinkedIn Profile',
        url: 'https://www.linkedin.com/in/huseyinozyilmaz',
        icon: 'linkedin',
        pinned: true,
      },
      twitter: {
        title: 'Twitter Profile',
        url: '',
        id: '@huseyinozyilmaz',
        pinned: false,
        image: {
          src: 'https://huseyin.org/resources/images/huseyin-ozyilmaz-profile-photo-lg.webp',
          alt: 'Profile photo of Huseyin Ozyilmaz'
        }
      },
      github: {
        title: 'GitHub Profile',
        url: 'https://github.com/huseyinozyilmaz',
        icon: 'github',
        pinned: true
      }
    },
    skills: [],
    areasOfWork: [
      { title: 'AI & Machine Learning', icon: 'brain' }, 
      { title: 'Software Development', icon: 'code' }, 
      { title: 'Solution Architecture', icon: 'boxed' }, 
      { title: 'System <br> Design', icon: 'layers' }, 
      { title: 'Team <br> Building', icon: 'users-plus' }, 
      { title: 'Product Development', icon: 'product' }, 
      { title: 'Design <br> Thinking', icon: 'board' }, 
      { title: 'DevOps <br> CI/CD', icon: 'infinity' }, 
      { title: 'Test <br> Automation', icon: 'lab' }, 
      { title: 'App Security & Data Privacy', icon: 'shield' }, 
      { title: 'Technical Assurance', icon: 'ribbon' }, 
      { title: 'Customer Experience (CX)', icon: 'user-heart' }, 
      { title: 'SaaS <br> Operations', icon: 'cloud-app' }, 
      { title: 'Cloud Cost Optimisation', icon: 'dollar' }, 
      { title: 'Continuous Learning', icon: 'school' }
    ],
    experience: [{
      id: 4,
      from: 'Apr 2019',
      to: 'Now',
      organisation: 'Wood',
      title: 'Head of Software Engineering',
      subTitle: 'Technical Assurance Director'
    }, {
      id: 3,
      from: 'Sep 2012',
      to: 'Apr 2019',
      organisation: 'Wood',
      title: 'Software Development Manager'
    }, {
      id: 2,
      from: '2011',
      to: '2012',
      organisation: 'Intetech',
      title: 'Lead Software Engineer'
    }, {
      id: 1,
      from: '2007',
      to: '2011',
      organisation: 'Intetech',
      title: 'Software Engineer'
    }],
    education: [{
      id: 3,
      from: '2006',
      to: '2007',
      organisation: 'University of Manchester',
      degree: 'MSc',
      title: 'Information Systems Organisation and Management'
    }, {
      id: 2,
      from: '2003',
      to: '2006',
      organisation: 'University of Manchester',
      degree: 'BSc',
      title: 'Software Engineering'
    }, {
      id: 1,
      from: '1999',
      to: '2001',
      organisation: 'Selcuk University',
      degree: 'HND',
      title: 'Programming'
    }]
  }  
})
