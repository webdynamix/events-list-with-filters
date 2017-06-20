
export const dedupe = (ar) => {
  const cleanlist = ar.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
  return cleanlist;
};
