export const getDate = (day = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
