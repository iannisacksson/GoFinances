const formatDate = (date: Date): string => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

  return formattedDate;
};

export default formatDate;
