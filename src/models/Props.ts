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
  heading?: string;
  showBtn: boolean;
}

export interface ImageWithTextProps {
  reverse?: boolean;
  image: string;
  heading: string;
  text: string;
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
  isNew?: boolean;
  image: string;
  title: string;
  category: string;
  price: string;
  weight: string;
}

export interface ProductMenuProps {
  backdrop: string;
  hero: string;
  heading: string;
  categoryNames: string[];
  menuItems: string[];
}