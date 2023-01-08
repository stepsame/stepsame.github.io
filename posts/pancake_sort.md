---
date: 2023-01-08
title: Pancake Sort
tags:
- algorithm
- pramp 
- sorting
---
# {{ $frontmatter.title }}

## Question

Given an array of integers arr:

   1. Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
   2. Write a function pancakeSort(arr) that sorts and returns the input array.
      
You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.




### Example
```
input:  arr = [1, 5, 4, 3, 2]
output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output


```

## Solution 

For the flip method, we could use two variable low and high point to the low and high index. Traverse the array, and swap the low and high elements.

For the pancakeSort, we can find the max number’s index mi, and flip the first mi elements, so the max number will be the first element, then we can flip the whole array to move it to the last.
Then we can find the next biggest one until the whole array is ordered.



### Code
```python
def flip(arr, k):
    low, high = 0, k
    while low < high:
        arr[low], arr[high] = arr[high], arr[low]
        low += 1
        high -= 1


def find_max_index(arr, end):
    max_num = 0
    mi = 0
    for i in range(end + 1):
        if arr[i] > max_num:
            max_num = arr[i]
            mi = i
    return mi


def solution(arr):
    n = len(arr)
    for i in range(n - 1, -1, -1):
        mi = find_max_index(arr, i)
        flip(arr, mi)
        flip(arr, i)
        # print(arr)
    return arr


def main():
    assert solution(arr = [1, 5, 4, 3, 2]) == [1, 2, 3, 4, 5]


if __name__ == '__main__':
    main()

```

### Time& Space Complexity

Time Complexity: O(N^2)

Flip method takes O(N) time.
Find max number takes O(N) time.
In the PancakeSort method, we traverse the whole array, and in every iteration, we find the max number, and flip the array twice, so every iteration takes O(N) time.
Hence the Time Complexity is O(N^2)


Space Complexity: O(1)













