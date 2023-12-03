export const formatDateToString = (dateObject) => {
    if (!(dateObject instanceof Date) || isNaN(dateObject)) {
      return "Invalid date";
    }
  
    const month = dateObject.toLocaleString('en-us', { month: 'short' });
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
  
    const formattedDateString = `${month} ${day} ${year}`;
  
    return formattedDateString;
  }