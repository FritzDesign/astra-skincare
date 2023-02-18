import { Product } from '../models/API';

export const sortBySelection = (
  sortCollectionItems: Product[],
  comparisonItems: Product[]
) => {
  const matches: Product[] = [];
  const rest: Product[] = [];
  comparisonItems.filter((item) => {
    sortCollectionItems.forEach((_item) => {
      if (item.id === _item.id) {
        matches.push(item);
      }
    });
    if (!matches.includes(item) && !rest.includes(item)) {
      rest.push(item);
    }
  });

  return [...matches, ...rest];
};

const comparePriceLH = (productA: Product, productB: Product) => {
  const priceProductA = +productA.variants[0].price.amount;
  const priceProductB = +productB.variants[0].price.amount;
  console.log(priceProductA, priceProductB);

  return priceProductA - priceProductB;
};

const comparePriceHL = (productA: Product, productB: Product) => {
  const priceProductA = +productA.variants[0].price.amount;
  const priceProductB = +productB.variants[0].price.amount;
  console.log(priceProductA, priceProductB);

  return priceProductB - priceProductA;
};

export const sortByPrice = (products: Product[], lowToHigh = true) => {
  if (lowToHigh) {
    return products.sort(comparePriceLH);
  } else {
    return products.sort(comparePriceHL);
  }
};

export const encodeQuery = (query: string) => {
  if (query.includes('Price')) {
    return query.replaceAll(' ', '').toLowerCase();
  } else {
    return query.replaceAll(' ', '-').toLowerCase();
  }
};
