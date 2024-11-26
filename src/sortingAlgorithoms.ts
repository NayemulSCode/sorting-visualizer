export const bubbleSort = (arr: number[]): number[][] => {
  const animations: number[][] = [];
  const copy = [...arr];
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length - i - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
        animations.push([...copy]);
      }
    }
  }
  return animations;
};

export const insertionSort = (arr: number[]): number[][] => {
  const animations: number[][] = [];
  const copy = [...arr];
  for (let i = 1; i < copy.length; i++) {
    let j = i;
    while (j > 0 && copy[j] < copy[j - 1]) {
      [copy[j], copy[j - 1]] = [copy[j - 1], copy[j]];
      animations.push([...copy]);
      j--;
    }
  }
  return animations;
};

// Add quickSort, mergeSort, heapSort, and selectionSort similarly
