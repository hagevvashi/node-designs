#! /usr/bin/env node

process.stdin.on("readable", () => {
  let chunk;
  console.log("New data available");
  while ((chunk = process.stdin.read()) !== null) {
    console.log(`Chunk read: (${chunk.length}) "${chunk.toString()}"`);
  }
});
