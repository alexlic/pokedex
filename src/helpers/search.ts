export const getPredictions = (list, keyword) => {
  const predictions = [];
  let count = 0;
  if (list.length > 0 && keyword) {
    while (predictions.length < 8 && count < list.length) {
      if (keyword.length <= 2 && list[count].name.startsWith(keyword)) {
        predictions.push(list[count]);
      }
      if (keyword.length > 2 && list[count].name.includes(keyword)) {
        predictions.push(list[count]);
      }
      count += 1;
    }
  }
  return predictions;
};
