const dateOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-US", dateOptions);
};