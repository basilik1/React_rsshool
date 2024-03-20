export const chunkArray = (data, selectedLimit) => {
  const result = [];

  const count = +selectedLimit;
  for (let i = 0; i < data.length; i += count) {
    result.push(data.slice(i, i + count));
  }

  return result;
};
