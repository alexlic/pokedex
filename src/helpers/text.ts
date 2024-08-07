/* eslint-disable curly */
export const capitalizeWord = (word: string): string => {
  if (!word || word.length <= 0) return '';
  return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
};

export const replaceCharAt = (text: string, index: number): string => {
  if (!text || text.length <= 0) return '';
  return `${text.substring(0, index)}${text.substring(index + 1, text.length)}`;
};
