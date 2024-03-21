module.exports = {
    format_date: (date) => {
      // Format date and time as MM/DD/YYYY HH:mm:ss
      const formattedDate = new Date(date);
      const year = formattedDate.getFullYear();
      const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = formattedDate.getDate().toString().padStart(2, '0');
      const hours = formattedDate.getHours().toString().padStart(2, '0');
      const minutes = formattedDate.getMinutes().toString().padStart(2, '0');
      const seconds = formattedDate.getSeconds().toString().padStart(2, '0');
      return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    }
  };
  
  