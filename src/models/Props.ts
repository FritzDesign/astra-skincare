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
}
