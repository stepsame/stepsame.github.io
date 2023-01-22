---
date: 2023-02-22
title: Number of Paths
tags:
- algorithm
- pramp 
- dynamic programming
---
# {{ $frontmatter.title }}

## Question

You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of an n×n grid.

The car is supposed to get to the opposite, Northeast (top-right), corner of the grid.

Given n, the size of the grid’s axes, write a function numOfPathsToDest that returns the number of the possible paths the driverless car can take.

For convenience, let’s represent every square in the grid as a pair (i,j).

The first coordinate in the pair denotes the east-to-west axis, and the second coordinate denotes the south-to-north axis.

The initial state of the car is (0,0), and the destination is (n-1,n-1).

The car must abide by the following two rules: it cannot cross the diagonal border.

In other words, in every step the position (i,j) needs to maintain i >= j.

In every step, it may go one square North (up), or one square East (right), but not both. E.g. if the car is at (3,1), it may go to (3,2) or (4,1).



### Example
```
input:  n = 4
output: 5

```

## Solution 
We can use dynamic programming to solve this problem.

We can use a two-dimensional array to store the number of unique paths to each square on the grid.

The number of unique paths to each square on the left border would be 1.

The number of unique paths to each square on the top border would be 1.

The number of unique paths to other squares on the left border would be the sum of the number of unique paths to its previous left square and top square. So we will have

$$ dp[i][j] = dp[i-1][j] + dp[i][j-1] ( i >= j ) $$





### Code
```python
def solution(n):
    dp = [[0 for _ in range(n)] for _ in range(n)]
    dp[0][0] = 1
    for i in range(n):
        for j in range(n):
            if i >= j:
                if i - 1 >= 0:
                    dp[i][j] += dp[i - 1][j]
                if j - 1 >= 0:
                    dp[i][j] += dp[i][j - 1]
    return dp[n - 1][n - 1]


def main():
    assert solution(n=4) == 5


if __name__ == '__main__':
    main()


```

### Time& Space Complexity
Time Complexity: O(N * M) where N and M are the dimensions of the input matrix

Space Complexity: O(N * M) for the DP matrix
or O(1) if we use an in-place approach for the DP matrix

















