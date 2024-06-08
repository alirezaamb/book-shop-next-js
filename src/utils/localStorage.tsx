export const localStorageSetter = (key: string, value: string) => {
  value === ''
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, value);
};
export const localStorageGetter = (key: string) => {
  const rawData = localStorage.getItem(key);
  return rawData ? JSON.parse(rawData) : '';
};
