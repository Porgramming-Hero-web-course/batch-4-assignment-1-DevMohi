const countWordOccurrences = (sentence: string, word: string) => {
  let count: number = 0;

  const words = sentence.split(" ");
  for (let w of words) {
    if (w == word) {
      count++;
    }
  }

  return count;
};
