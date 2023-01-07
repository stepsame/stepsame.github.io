---
date: 2023-01-07
title: Toeplitz Matrix
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element.
Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix.
The matrix can be any dimension, not necessarily square.


### Example
```
input:  
[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]

output: true
input:  
[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]

output: false

```

## Solution 

We can traverse the matrix from (1, 1) to (m, n).

For every element, we only check if (i, j) is equal to (i-1, j-1)




### Code
```python
def solution(matrix):
    m, n = len(matrix), len(matrix[0])
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] != matrix[i-1][j-1]:
                return False
    return True


def main():
    assert solution([[1, 2, 3, 4],
                     [5, 1, 2, 3],
                     [6, 5, 1, 2]]) is True
    assert solution([[1, 2, 3, 4],
                     [5, 1, 9, 3],
                     [6, 5, 1, 2]]) is False


if __name__ == '__main__':
    main()

```

### Time& Space Complexity

Time Complexity: O(N*M)

Because we traverse the whole matrix.

Space Complexity: O(1)











