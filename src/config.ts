import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Public Impact Partners",
  logo: "/logo-color.webp",
  email: "chelsey@publicimpactpartners.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Email",
    url: "mailto:chelsey@publicimpactpartners.com",
    icon: "mdi:email",
  },
  {
    title: "LinkedIn",
    url: "https://github.com/TimWitzdam",
    icon: "mdi:linkedin",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Public Impact Partners",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Public Sector and Homelessness Consulting",
  description: `
We primarily provide technical assistance and consulting for organizations working in homelessness. We provide governments, non-profits, and continuum's of care (COCs) with evidence-based approaches to fight and end homelessness. 
<br/><br/>
Public Impact Partners can provide your organization with program design, HUD compliance, training seminars, and .`,
  socialLinks: socialLinks,
  links: [
    {
      title: "About",
      url: "/about",
    },{
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Public Impact Partners",
    description:
      `Full time student from Germany who loves building cool things using code.`,
    image: identity.logo,
  },
  subtitle: "Chelsey Mandell, Consultant",
  about: {
    description: `
I'm Chelsey Mandell, a public policy professional who is passionate about ending homelessness. I began my career in direct service at Homeward Alliance in Fort Collins, Colorado. 
After studying social policy at the Evans School at the University of Washington, I've served in federal and state government roles centered on housing, homelessness, and HUD compliance.
<br/><br/>
I bring twelve years of non-profit and governmental experience to organizations in the housing space. `, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've been in a variety of roles working to end homelessness.`, // Markdown is supported
    items: [
      {
        title: "Capacity-Building Contractor & Special Projects Manager",
        company: {
          name: "Office of Homeless Initiatives",
          image: "/dola-logo.webp",
          url: "https://doh.colorado.gov",
        },
        date: "2023 - 2024",
      },
      {
        title: "Program Manager",
        company: {
          name: "Office of Homeless Initiatives",
          image: "/dola-logo.webp",
          url: "https://doh.colorado.gov",
        },
        date: "2021 - 2023",
      },
      {
        title: "Homeless Programs Specialist",
        company: {
          name: "Office of Homeless Initiatives",
          image: "/dola-logo.webp",
          url: "https://doh.colorado.gov",
        },
        date: "2020 - 2021",
      },
      {
        title: "Community Planning & Development Representative",
        company: {
          name: "U.S. Department of Housing and Urban Development",
          image: "/hud-logo.webp",
          url: "https://www.hud.gov",
        },
        date: "2019 - 2020",
      },
      {
        title: "Director of Development",
        company: {
          name: "Homeward Alliance",
          image: "/hwa-logo.webp",
          url: "https://www.homewardalliance.org",
        },
        date: "2014 - 2018",
      },
      {
        title: "Employment Advocate",
        company: {
          name: "Homeward Alliance",
          image: "/hwa-logo.webp",
          url: "https://www.homewardalliance.org",
        },
        date: "2014",
      },
    ],
  },
  
  education: {
    description: `I've been in a variety of roles working to end homelessness.`, // Markdown is supported
    items: [
      {
        title: "Evans School of Public Policy & Governance, University of Washington",
        company: {
          name: "Master of Public Administration - Social Policy",
          image: "/dola-logo.webp",
          url: "https://doh.colorado.gov",
        },
        date: "2023 - 2024",
      },
      {
        title: "Colorado Statue University",
        company: {
          name: "Bachelor of Arts - Social Work",
          image: "/dola-logo.webp",
          url: "https://doh.colorado.gov",
        },
        date: "2021 - 2023",
      },
      
    ],
  },

  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Services | Public Impact Partners",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
