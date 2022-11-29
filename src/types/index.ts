export interface Asset {
  id: string;
  url: string;
  width: number;
  height: number;
  mimetype: string;
  
  videoheight?: number;
  videowidth?: number;
  
  islandscape?: boolean;
  aspectratio?: {
    width: number;
    height: number;
  };
}

export interface HeroType {
  featured: Asset[];
  viewport: {
    width: number;
    height: number;
  };
}

export interface Three extends Asset {
  boxWidth: number;
  boxHeight: number;
  index?: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  director: string;
  featured: Asset;
  assets: Asset[];
}

export interface HomeProps {
  projects: Project[];
  featured: Project[];
  height: number;
}

export interface Contact {
  type: 'Email' | 'Phone' | 'Link';
  value: string;
  label: string;
  id: string;
}

export interface AboutProps {
  heading: string;
  subheading: string;
  contacts: Contact[];
}

