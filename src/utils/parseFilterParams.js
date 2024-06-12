const parseIsFavourite = (isFavourite) => isFavourite === 'true';

const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedType = parseType(contactType);

  return {
    favourite: parsedIsFavourite,
    contactType: parsedType,
  };
};
