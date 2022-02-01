import moment from "moment";

const FormatStringDate = (stringDate) => {
  const formattedDate = moment(stringDate).format("DD/MM/YYYY");
  return formattedDate;
};

export default FormatStringDate;
