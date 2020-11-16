#! /usr/bin/env node

process.stdin.on("data", chunk => {
  console.log("New data available");
  console.log(`Chunk read: (${chunk.length}) "${chunk.toString()}"`);
})
