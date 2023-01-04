---
date: 2023-01-04
title: Move Zeros To End
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

Given a static-sized array of integers arr, move all zeroes in the array to the end of the array.
You should preserve the relative order of items in the array.
We should implement a solution that is more efficient than a naive brute force.


### Example
```
input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
```

## Solution

We can use a variable point to the first zero’s index. All numbers before this variable are non-zero numbers.

Traverse the array, if we met a non-zero number, we swap this number with the first_zero variable,  then move first_zero to next.






### Code
```python
def solution(arr):
   first_zero = 0
   for i in range(len(arr)):
       if arr[i] != 0:
           arr[i], arr[first_zero] = arr[first_zero], arr[i]
           first_zero += 1
   print(arr)
   return arr


def main():
   assert solution([1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]) == [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]


if __name__ == '__main__':
   main()


```

### Time & Space Complexity:

Time Complexity: `O(N)` 

We need to the traverse the whole array.

Space Complexity: `O(1)` 

We only use one variable.
