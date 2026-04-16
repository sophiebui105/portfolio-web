export interface PortfolioInfo {
  name: string;
  headline: string;
  tagline: string;
  description: string;
  cta: string;
  cvLink?: string;
}

export const portfolioInfo: PortfolioInfo = {
  name: 'Sophie Bui',
  headline: 'HELLO, I\'M SOPHIE',
  tagline: 'A passionate professional with expertise in data analysis, and project management. Welcome to my portfolio where you can explore my projects and professional journey.',
  description: 'Explore my journey in data analysis, and project management. Discover the projects that showcase my technical skills and professional growth. Each project below represents a unique challenge and learning experience.',
  cta: 'CONTINUE',
  cvLink: '/resume.pdf',
};
