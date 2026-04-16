export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  link: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project 1: Logistics Dashboard',
    description: 'Developed an interactive dashboard to analyze performance metrics, highlighting key trends and insights. Identified inefficiencies and proposed actionable improvements.',
    tools: ['Power BI', 'Excel'],
    link: 'https://github.com/sophiebui105/logistics-dashboard',
    imageUrl: '/overview.png',
  },
  {
    id: '2',
    title: 'Project 2: Heart Analytics',
    description: 'Applied machine learning techniques to analyze ECG data, identifying patterns and anomalies. Developed a predictive model to reduce false positives for AF/AFL heart symptoms.',
    tools: ['Machine Learning', 'ECG Analytics'],
    link: 'https://github.com/sophiebui105/ecg-analytics',
    imageUrl: '/ECG.png',
  },
  {
    id: '3',
    title: 'Project 3: Renewable Energy Analysis',
    description: 'Conducted a comprehensive analysis of renewable energy data, identifying trends and insights. Proposed strategies to optimize energy production and reduce costs based on data-driven findings.',
    tools: ['Power BI', 'Excel'],
    link: 'https://github.com/sophiebui105/Renewable-energy',
    imageUrl: '/renewable.png',
  },
  {
    id: '4',
    title: 'Project 4: Supply Chain Analysis',
    description: 'Analyzed supply chain data to identify bottlenecks and inefficiencies. Proposed strategies to optimize operations and reduce costs based on data-driven insights.',
    tools: ['SQL', 'Python'],
    link: 'https://github.com/sophiebui105/supplychain',
    imageUrl: '/supplychain.png',
  },
//   {
//     id: '5',
//     title: 'Project 5: Sales Analytics',
//     description: 'Developed an analytics dashboard to assess performance and optimize operations. Used insights to suggest strategies and improve outcomes across metrics.',
//     tools: ['Power BI', 'DAX'],
//     link: 'https://github.com',
//     imageUrl: '/project-5.jpg',
//   },
//   {
//     id: '6',
//     title: 'Project 6: Business Intelligence',
//     description: 'Analyzed data to uncover key segments and high-value opportunities. Proposed strategies for optimization and growth based on customer behavior.',
//     tools: ['SQL', 'Python'],
//     link: 'https://github.com',
//     imageUrl: '/project-6.jpg',
//   },
];
