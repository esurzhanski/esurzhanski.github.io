export const profile = {
  name: 'Evgeni Surzhanski',
  role: 'Product Manager',
  roleAccent: 'AI-Native',
  location: 'Saint-Petersburg (Remote)',
  telegram: '@esurzhanski',
  telegramUrl: 'https://t.me/esurzhanski',
  linkedin: '/in/esurzhanski',
  linkedinUrl: 'https://www.linkedin.com/in/evgeny-surzhansky-76909a1b',
  cvUrl: '/Evgeni-Surzhanski-CV.pdf',
  keywords: ['AI-Native Products', 'Fintech', 'Mobile', 'Gaming', 'Growth'],
  summary:
    'Product Manager with 10+ years of experience building and scaling digital products across Fintech, Mobile, and Gaming. Proven track record of turning complex challenges into successful products and business outcomes by leveraging people, technology, and AI. Strong advocate of practical AI adoption, shaping the transition toward an AI-native era.',
};

export const stats = [
  { value: 'AI', label: 'Multiple AI Transformations Delivered' },
  { value: '$1M+', label: 'Single Ad Creative Spend' },
  { value: '$4M+', label: 'Monthly App Revenue' },
  { value: '2X', label: 'Oracle ERP Turnarounds' },
];

export interface ExperienceItem {
  role: string;
  company: string;
  domain: string;
  location: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Contract Product Manager',
    company: 'NDA · Startups',
    domain: 'Fintech & Startups',
    location: 'Saint-Petersburg',
    period: '2024 — 2026',
    points: [
      'Supported multiple AI-driven transformations, helping teams adopt AI-powered workflows.',
      'Launched and established multiple B2B acquisition channels, including entry into a new market.',
      'Designed proprietary trading strategies, delivering 60% average annual returns.',
    ],
  },
  {
    role: 'CEO / Product Manager',
    company: 'Startups',
    domain: 'Health & Wellness Mobile Apps',
    location: 'Saint-Petersburg / Limassol',
    period: '2020 — 2024',
    points: [
      'Launched an MVP, achieving strong validation with 20K+ female users in the USA.',
      'Led and transformed multiple startups, building and inspiring high-performing teams around a shared product vision.',
      'Raised $200K in investment, earning investor recognition for strategic vision and product execution.',
    ],
  },
  {
    role: 'Product Manager / Game Producer',
    company: 'Playgendary',
    domain: 'Gaming Mobile Apps',
    location: 'Minsk',
    period: '2019 — 2020',
    points: [
      'Led the development of high-performing ad creatives for campaigns with multi-million-dollar spend.',
      'Designed and built a new generation of high-performance playable ads.',
      'Built and scaled the playable ads team from 16 to 62 people.',
    ],
  },
  {
    role: 'Product Manager',
    company: 'Playgendary & Banuba',
    domain: 'High-tech Mobile Apps',
    location: 'Minsk',
    period: '2017 — 2019',
    points: [
      'Managed end-to-end development of new iOS / Android products, aligning two co-founders with differing visions.',
      'Established a data-driven product development approach integrating A/B testing, CJM, and Design Thinking.',
      'Co-created proprietary avatar technology with the R&D team.',
    ],
  },
  {
    role: 'Project Manager / Product Manager',
    company: 'Apalon Apps · IAC',
    domain: 'Mobile Apps',
    location: 'Minsk',
    period: '2016 — 2017',
    points: [
      'Successfully launched three new products — Coloring Book, Call Recorder, and VPN.',
      'Managed Planes Live and other live products in the portfolio.',
    ],
  },
  {
    role: 'Project Manager',
    company: 'Life (Turkcell) → Asstra → Diasoft',
    domain: 'ERP & Fintech',
    location: 'Minsk / Moscow',
    period: '2010 — 2015',
    points: [
      'Successfully relaunched two Oracle ERP systems.',
      'Implemented a new fintech product for VTB.',
    ],
  },
];

export const expertise = [
  {
    title: 'Product Strategy & Leadership',
    items: [
      'Product Vision, Strategy & Roadmaps',
      'Zero-to-One Product Development',
      'Product-Market Fit & Scaling',
      'Product Discovery, CJM & Design Thinking',
      'Cross-Functional Leadership & Stakeholder Alignment',
    ],
  },
  {
    title: 'Growth & Business Development',
    items: [
      'B2B / B2C Growth & Go-to-Market Strategy',
      'Customer Acquisition & Lifecycle Growth',
      'Monetization & Revenue Optimization',
      'Conversion Optimization & Experimentation',
      'Business Development, Partnerships & Investor Relations',
    ],
  },
  {
    title: 'AI, Technology & Innovation',
    items: [
      'AI-Native Products, Teams & Workflows',
      'AI Adoption & Business Transformation',
      'Mobile & iOS / Android Ecosystems',
      'Game Mechanics & UX Gamification',
      'AR, Computer Vision & Avatar Technologies',
      'Enterprise ERP Technologies',
    ],
  },
];

export const education = [
  {
    title: 'MBA',
    place: 'International School of Business and Management of Technology, BSU',
  },
  {
    title: 'PMP Certificate No. 1407563',
    place: 'Project Management Institute (2011–2017)',
  },
  {
    title: 'BSc in Mechanics / Applied Mathematics',
    place: 'Belarusian State University',
  },
  {
    title: 'Certified professional development',
    place: 'Product Manager · Program Manager · SCRUM Master',
  },
];

export const languages = [
  { name: 'Russian', level: 'Native' },
  { name: 'English', level: 'Upper-Intermediate (B2), extensive international experience' },
];
