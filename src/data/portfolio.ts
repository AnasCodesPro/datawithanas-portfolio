/**
 * Single source of truth for all portfolio content.
 * Sourced from CLAUDE.md — edit here to update the site.
 */

export const profile = {
  name: 'Muhammad Anas',
  brand: 'datawithanas',
  title: 'Data Scientist & Analyst',
  pitch:
    'I turn raw data into production pipelines, predictive models, and decisions stakeholders can act on — owning the path from ingestion to dashboard.',
  location: 'Karachi, Pakistan',
  email: 'muhammadanasaug@gmail.com',
  phone: '+92-335-232-3374',
  linkedin: 'https://linkedin.com/in/muhammadanaskhi',
  github: 'https://github.com/AnasCodesPro',
  resumeNote: 'AWS Certified (ML – Data Engineering)',
};

export const stats: { value: string; label: string }[] = [
  { value: '5+', label: 'Years of experience' },
  { value: '3×', label: 'Promotions in 26 months' },
  { value: '99.9%', label: 'Infrastructure uptime' },
  { value: '50%', label: 'Less manual effort via CI/CD' },
];

export const about = {
  summary: [
    'Data professional with 5+ years across analytics engineering, ML infrastructure, and BI reporting. I work end-to-end — building the pipelines that move data, the models that predict from it, and the dashboards that put it in front of decision-makers.',
    'Currently a Data & Analytics / Cloud Engineer at DigitalOcean, where I have been promoted three times in 26 months. M.S. in Data Science from NED University, and AWS Certified in Machine Learning – Data Engineering.',
  ],
  education: [
    {
      degree: 'M.S. Data Science',
      school: 'NED University',
      years: '2022 – 2024',
    },
    {
      degree: 'B.E. Telecommunications Engineering',
      school: 'NED University',
      years: '2016 – 2019',
    },
  ],
};

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: 'Data Science & ML',
    skills: [
      'Supervised Learning',
      'Regression & Classification',
      'Clustering',
      'Time-Series (LSTM, ARIMA)',
      'Feature Engineering',
      'Model Evaluation',
      'Predictive Analytics',
      'MLOps (Docker, Kubernetes)',
      'CI/CD & GitHub Actions',
      'Model Versioning',
    ],
  },
  {
    category: 'Analytics & BI',
    skills: [
      'Power BI',
      'Tableau',
      'KPI Dashboards',
      'Sales Forecasting',
      'Statistical Analysis',
      'Descriptive & Predictive Analytics',
      'Data Storytelling',
      'Executive Reporting',
    ],
  },
  {
    category: 'Data Engineering',
    skills: [
      'ETL Pipelines',
      'Real-time Ingestion',
      'Data Modeling',
      'SQL Query Optimization',
      'Reporting Automation',
      'Snowflake',
      'Databricks',
      'dbt',
    ],
  },
  {
    category: 'Cloud & Databases',
    skills: [
      'AWS (ML – Data Eng. Certified)',
      'GCP',
      'Azure',
      'MySQL',
      'BigQuery',
      'AWS RDS',
      'Redis',
    ],
  },
  {
    category: 'Programming',
    skills: ['Python', 'pandas / NumPy', 'scikit-learn', 'Matplotlib', 'SQL', 'Bash'],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: 'Data & Analytics Engineer / Cloud Engineer',
    company: 'DigitalOcean',
    period: 'Jan 2023 – Present',
    current: true,
    highlights: [
      'Promoted 3× in 26 months',
      'Built ML-ready cloud infrastructure across AWS, GCP, Linode & DigitalOcean at 99.9%+ uptime',
      'Automated ETL workflows → 30% improvement in data reliability',
      'Optimized SQL queries and caching → 35% faster data retrieval',
      'Built real-time ingestion pipelines → 25% reduction in processing latency',
      'Containerized model deployments (Docker + Kubernetes) → 40% faster deployment',
      'CI/CD pipelines via GitHub Actions → 50% reduction in manual effort',
      'Partnered with data scientists, analysts & product on KPI tracking and executive dashboards',
    ],
  },
  {
    role: 'BI Analyst',
    company: 'TeleCard Private Limited',
    period: 'Mar 2020 – Dec 2022',
    highlights: [
      'Built Power BI and Tableau dashboards for senior management',
      'Sales forecasting models on call-flow and revenue data',
      'Statistical analysis on network data → 15% improvement in network quality',
      'Automated monitoring & alerting → 20% better continuity, 25% less downtime',
      'Standardized KPI definitions across business units',
    ],
  },
  {
    role: 'Network Operations Intern',
    company: 'Pakistan International Airlines',
    period: 'May – Jun 2019',
    highlights: [
      'Monitored live network infrastructure across PIA\'s internal operations, identifying and escalating fault patterns.',
      'Gained practical exposure to enterprise network topology and real-time incident tracking workflows.',
    ],
  },
  {
    role: 'Telecom Intern',
    company: 'PTCL',
    period: 'Oct – Nov 2018',
    highlights: [
      'Worked within PTCL\'s core telecom infrastructure team, learning switching, transmission, and fiber-optic systems.',
      'Documented operational procedures and assisted in routine maintenance checks across a live network environment.',
    ],
  },
];

export type Project = {
  title: string;
  tags: string[];
  description: string[];
};

export const projects: Project[] = [
  {
    title: 'Tropical Storm Damage Detection',
    tags: ['Python', 'Remote Sensing', 'ML Classification', 'Satellite Imagery'],
    description: [
      'Image-based feature extraction pipeline for satellite imagery at scale.',
      'Supervised ML classification for storm-damage severity by region.',
      'Results visualized in a stakeholder-facing summary dashboard.',
    ],
  },
  {
    title: 'Crypto Price Prediction',
    tags: ['Time-Series', 'LSTM', 'ARIMA', 'Binance API'],
    description: [
      'Real-time data ingestion pipeline via the Binance API.',
      'LSTM and ARIMA models for short-term price forecasting.',
      'Evaluated using MAE and directional-accuracy metrics.',
    ],
  },
  {
    title: 'Customer Segmentation & Market Basket Analysis',
    tags: ['K-Means', 'Clustering', 'Power BI', 'SQL'],
    description: [
      'K-Means and hierarchical clustering on 100K+ transactional records.',
      'Interactive Power BI dashboards for marketing stakeholders.',
      'Informed targeted campaigns and product-bundling strategy.',
    ],
  },
  {
    title: 'Real-Time Sales & Revenue Reporting Pipeline',
    tags: ['ETL', 'SQL', 'Tableau', 'Automation'],
    description: [
      'End-to-end pipeline ingesting live transactional data via API.',
      'Real-time Tableau dashboards for revenue and sales KPIs.',
      'Cut time-to-insight from 24 hours to under 30 minutes.',
    ],
  },
];

export type Certification = { name: string; issuer: string; year: string };

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Machine Learning – Data Engineering',
    issuer: 'Amazon Web Services',
    year: '2024',
  },
  {
    name: 'MLOps Essentials: Model Development & Integration',
    issuer: 'LinkedIn Learning',
    year: '2025',
  },
  { name: 'Generative AI for Data Engineering', issuer: 'LinkedIn Learning', year: '2025' },
  { name: 'MySQL for Data Analytics', issuer: 'Udemy', year: '2020' },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];
