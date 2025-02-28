const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  
  export const formatCommentDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", dateOptions);
  };

  export const formatPhotoDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", dateOptions);
  };