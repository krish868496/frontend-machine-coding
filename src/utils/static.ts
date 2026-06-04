export const generateCombinators = (size: number) => {
  const combinations: number[][] = [];

  // for rows
  for (let row = 0; row < size; row++) {
    const rows = [];
    for (let col = 0; col < size; col++) {
      rows.push(row * size + col);
    }
    combinations.push(rows);
  }

  // for cols
  for (let row = 0; row < size; row++) {
    const cols = [];
    for (let col = 0; col < size; col++) {
      cols.push(col * size + row);
    }
    combinations.push(cols);
  }

//   for diagonals 1
 const diagonal1:number[] = [];
  for (let i = 0; i < size; i++) {
               diagonal1.push(i * size + i)
  }
  combinations.push(diagonal1);

//   for diagonals 2
 const diagonal2:number[] = [];
  for (let i = 0; i < size; i++) {
               diagonal2.push(i * size + (size - 1 - i));
  }
  combinations.push(diagonal2);

  return combinations;
};
