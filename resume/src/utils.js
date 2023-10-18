export const parseLocation = (city, country) => {
  return city + ", " + country;
};

export const parseTimeRange = (start_time, end_time) => {
  return convertDate(start_time) + " - " + convertDate(end_time);
};

function convertDate(d) {
  if (d.toLowerCase() == "ongoing") {
    return d;
  }
  const inputDateString = d;

  let dateParts = inputDateString.split("-"); // Split the string into parts

  if (dateParts.length === 3) {
    const [month, day, year] = dateParts;
    const date = new Date(`${year}-${month}-${day}`); // Create a Date object
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(date);
    return formattedDate;
  } else {
    console.log("Invalid date format");
  }
}
