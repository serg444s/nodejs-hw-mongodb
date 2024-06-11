const parseIsFavourite = (type) => type === 'true';

export const parseFilterParams = (query) => {
  const { isFavourite } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    isFavourite: parsedIsFavourite,
  };
};
