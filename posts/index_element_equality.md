---
date: 2023-01-05
title: Array Index & Element Equality
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i.
Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.



### Example
```
input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2
input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.

```

## Solution 

Because the imputed array is sorted, we could use the binary search algorithm to search the answer.

For every loop in the binary search, we compare the middle element’s value to its index.

There are 4 cases:
1. If the value is equal to the index and the previous one is not equal,  then we find the answer.
2. If they are equal but the previous one is equal, the answer will be in the left part.
3. If the value is less than the index, the answer will be in the right part.
4. If the value is greater than the index, the answer will be in the left part, same in case 2.







### Code
```python
def solution(arr):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if mid == arr[mid] and (mid == 0 or mid - 1 != arr[mid-1]):
            return mid
        if mid > arr[mid]:
            left = mid + 1
        else:
            # two case: mid < arr[mid]; mid == arr[mid] and mid - 1 == arr[mid-1]
            right = mid - 1
    return -1


def main():
    assert solution([-8,0,2,5]) == 2
    assert solution([-1,0,3,6]) == -1
    assert solution([0, 1, 2, 3, 4, 5]) == 0


if __name__ == '__main__':
    main()
```

### Time& Space Complexity

Time Complexity: O(logN) 

The binary search algorithm’s time complexity is O(logN).

Space Complexity: O(1)








