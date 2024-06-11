export const localStorageSetter = (key: string, value: string) => {
  value === ''
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, value);
};
// export const localStorageGetter = (key: string) => {
//   const rawData = localStorage.getItem(key);
//   return rawData ? JSON.parse(rawData) : '';
// };
export const localStorageGetter = (key: string) => {
  if (typeof window !== 'undefined') {
    const rawData = localStorage.getItem(key);
    return rawData ? JSON.parse(rawData) : '';
  }
  return null; // Or a default value appropriate for your application
};
