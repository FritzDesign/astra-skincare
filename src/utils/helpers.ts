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

export const encodeQuery = (query: string) => {
  return query.replace(' ', '-').toLowerCase();
};
