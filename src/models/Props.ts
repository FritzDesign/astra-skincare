import { Product } from './API';

export interface ButtonProps {
  text?: string;
  textColor?: string;
  bgColor?: string;
  size?: {
    h?: string;
    w?: string;
  };
  onClick: Function;
}

export interface Gallery3x1Props {
  heading?: string;
  padding?: {
    x?: string;
    y?: string;
  };
}

export interface HeroProps {
  bgColor: string;
  bgImage: string;
  showBtn: boolean;
  heading?: string;
}

export interface ImageWithTextProps {
  image: string;
  heading: string;
  text: string;
  reverse?: boolean;
}

export interface RichTextProps {
  heading?: string;
  text?: string;
  textColor?: string;
  bgColor?: string;
}

export interface GalleryCardProps {
  btnText: string;
  image: string;
}

export interface NavMenuProps {
  toggleMenu: Function;
}

export interface ProductProps {
  image: string;
  title: string;
  handle: string;
  price: string;
  category?: string;
  weight?: string;
  isNew?: boolean;
}

export interface ProductMenuProps {
  heading: string;
  hero: string;
  fallback: string;
  backdrop?: string;
  categoryNames?: string[];
  menuItems?: string[];
  showMenuBar?: boolean;
}

export interface ScaleableGalleryProps {
  length: number;
  title: string;
  collection: string;
  product?: Product;
  link?: {
    text: string;
    navTo: string;
  };
  id?: number;
}

export interface ScaleableGalleryCardProps {
  image: string;
  alt: string;
  title: string;
  isNew: boolean;
  category: string;
  price: string;
  weight: number;
}

export interface BlogPost {
  id: number;
  title: string;
  author?: string;
  image: string;
  category: string;
  tagline?: string;
  paragraphs?: string[];
}

export interface SPGalleryProps {
  photos: string[];
  index: number;
  galleryLength: number;
  setSelectedIndex: Function;
  setShowGallery: Function;
}
