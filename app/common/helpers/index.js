 /* eslint import/prefer-default-export: 0 */
export const dedupe = (ar) => {
  const deduped = ar.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
  return deduped;
};
