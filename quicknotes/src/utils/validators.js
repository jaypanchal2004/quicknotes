export const isEmpty = (str) => !str.trim();
export const isTooLong = (str, limit = 200) => str.length > limit;
