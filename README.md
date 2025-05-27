# ♞ Knight's Travails

This project is a solution to the **Knight's Travails** assignment from [The Odin Project’s JavaScript curriculum](https://www.theodinproject.com/lessons/javascript-knights-travails). It demonstrates the use of **Breadth-First Search (BFS)** to calculate the shortest path a knight can take on a standard 8×8 chessboard.

## 📌 Objective

Write a program that finds the shortest possible path a knight can take from one square to another on a chessboard. The knight can only move in valid L-shaped patterns, and the program should return the full path taken.

---

## 🧠 Concepts Used

- **Breadth-First Search (BFS)** for shortest path traversal
- **JavaScript data structures** like `Map`, `Set`, and arrays
- **Coordinate-based pathfinding**
- Basic understanding of chessboard constraints

---

## 🚀 Features

- Valid knight movement in all 8 directions
- Returns the shortest path from start to destination
- Prevents cycles and revisits using a visited set
- Clean and readable path output to the console

---

## 📂 Project Structure

knights-travails/
├── knights.js # Main BFS logic and knight movement
└── README.md # Project description and instructions

---

## 📌 Example Output

Calling:

```js
knightMoves([3, 3], [4, 3]);
```

Will log something like:

You made it in 3 moves! Here's your path:
[3,3] => [4,5] => [2,4] => [4,3]
