---
date: 2023-01-06
title: Getting a Different Number
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.



### Example
```
input:  arr = [0, 1, 2, 3]
output: 4
input:  arr = [0, 2, 3]
output: 1

```

## Solution 

We can use the array's index as the set.

we can traverse the array, if the current number is bigger than the length, we can ignore it.

if the current number is smaller than the length, we move this number to the number index and swap that number to the current number’s position.

Then, we traverse the array again. The first one not equal to its index is the answer. 
Otherwise, we return n.



### Code
```python
def solution(arr):
    n = len(arr)
    for i in range(n):
        if i != arr[i] and arr[i] < n:
            arr[arr[i]], arr[i] = arr[i], arr[arr[i]]
    print(arr)
    for i in range(n):
        if i != arr[i]:
            return i
    return n


def main():
    assert solution([100, 101, 108, 109]) == 0
    assert solution([100, 101, 108, 109]) == 0
    assert solution([0, 1, 2, 3]) == 4
    assert solution([0, 2, 3]) == 1


if __name__ == '__main__':
    main()

```

### Time& Space Complexity

Time Complexity: O(N)

Space Complexity: O(1)









