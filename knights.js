// These are all the possible offsets of a given position that the
// knight chess piece can move (given the position is not off the board).
const moveOffsets = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

// This function uses a Queue to implement a BFS (breadth-first search) to find the shortest path
// on the chess board to the provided destination.
function knightMoves(start, end) {
  const [startX, startY] = start;
  const [endX, endY] = end;
  const queue = [[startX, startY]];
  const visited = new Set();
  const cameFrom = new Map(); // format will be KEY came from VALUE

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (x === endX && y === endY) {
      printPath(`${endX},${endY}`);
      return;
    }

    const key = `${x},${y}`;
    if (visited.has(key)) continue; // position has already been visited
    visited.add(key); // mark the new position as visited

    for (const [dx, dy] of moveOffsets) {
      const newX = dx + x;
      const newY = dy + y;
      const newKey = `${newX},${newY}`;
      // check that the position is on the chess board and check
      // that the new value hasnot been visited yet
      if (
        newX >= 0 &&
        newX < 8 &&
        newY >= 0 &&
        newY < 8 &&
        !visited.has(newKey)
      ) {
        cameFrom.set(`${newX},${newY}`, `${x},${y}`);
        queue.push([newX, newY]);
      }
    }
  }

  function printPath(destination) {
    // generate the path of the knight's traversal from the cameFrom map
    const origin = `${startX},${startY}`;
    const path = [];
    path.push(`[${destination}]`);
    let key = cameFrom.get(destination);
    while (key && key !== origin) {
      path.push(`[${key}]`);
      key = cameFrom.get(key);
    }
    path.push(`[${origin}]`);
    path.reverse();

    // print out the result
    let distance = path.length - 1;
    const seperator = " => ";
    const resultString = path.join(seperator);
    console.log(`You made it in ${distance} moves! Here's your path:`);
    console.log(resultString);
  }
}

knightMoves([3, 3], [4, 3]);
