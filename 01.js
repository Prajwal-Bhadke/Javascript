const number = 2; // The number for which to generate the table

console.log(`Multiplication Table for ${number}:`);

for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}