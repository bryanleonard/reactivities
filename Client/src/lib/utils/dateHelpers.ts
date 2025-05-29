// export const formatDate = (dateString: string) => {
//   const [year, month, day] = dateString.split('T')[0].split('-');
//   return `${day}-${month}-${year}`;
// };

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export const getDateOnly = (dateString: string) => {
  return dateString.split('T')[0];
};