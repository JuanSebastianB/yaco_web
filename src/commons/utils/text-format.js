export const truncateTextDescription = (text = '') =>
  text.length > 200 ? text.substring(0, 200).concat('...') : text;
