---
date: 2023-01-13
title: Island Count
tags:
- algorithm
- pramp 
- dfs
- bfs
---
# {{ $frontmatter.title }}

## Question

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. 

Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner”
(i.e. they are diagonally neighbors).





### Example
```
input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]
output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.



```

## Solution 

To solve this problem, we’ll traverse binaryMatrix and every time we come across a cell of 1 we’ll do the following:
1. Change that cell and all its vertically and horizontally (but not diagonally) adjacent 1s into -1s.
 We do this in order to avoid recounting of islands.
2. Increment islands number by 1.
3. Traverse a cell whose value is 1 to other adjacent 1s in binaryMatrix is similar to running a 
Breadth-First Search (BFS) or a Depth-First Search (DFS).




### Code
```python
def bfs_search(binary_matrix, rows, cols, i, j):
    q = deque([(i, j)])
    while q:
        x, y = q.popleft()
        if binary_matrix[x][y] == 1:
            binary_matrix[x][y] = -1
            append_queue(q, rows, cols, x - 1, y)
            append_queue(q, rows, cols, x + 1, y)
            append_queue(q, rows, cols, x, y - 1)
            append_queue(q, rows, cols, x, y + 1)


def append_queue(q, rows, cols, x, y):
    if 0 <= x < rows and 0 <= y < cols:
        q.append([x, y])


def solution(binary_matrix):
    islands = 0
    rows, cols = len(binary_matrix), len(binary_matrix[0])
    for i in range(rows):
        for j in range(cols):
            if binary_matrix[i][j] == 1:
                bfs_search(binary_matrix, rows, cols, i, j)
                islands += 1
    return islands


def main():
    assert solution(binary_matrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]) == 6


if __name__ == '__main__':
    main()


```

### Time& Space Complexity

Time Complexity: O(N*M)

Visited every cell only once.

Space Complexity: O(N*M)

Queue length.













