interface ProductImages {
  height: number;
  width: number;
  id: string;
  src: string;
}

interface ProductVariants {
  available: boolean;
  id: string;
  compareAtPrice: string;
  image: {
    src: string;
  };
  price: {
    amount: string;
    currencyCode: string;
  };
  weight: number;
}

export interface Product {
  availableForSale: boolean;
  createdAt: string;
  title: string;
  description: string;
  handle: string;
  id: string;
  productType: string;
  images: ProductImages[];
  variants: ProductVariants[];
}
