---
date: 2022-12-07
title: Find the Duplicates
tags:
- algorithm
- pramp 
- array
- binary-search
---
# {{ $frontmatter.title }}

## Question
Given two sorted arrays `arr1` and `arr2` of passport numbers, 
implement a function `findDuplicates` that returns an array of all passport numbers that are both arrays. 
Note that the output array should be sorted in ascending order.

Let `N` and `M` be the lengths of `arr1` and `arr2`, respectively. 
Solve for two cases and analyze the time & space complexities of your solutions:

`M` ≈ `N` - the array lengths are approximately the same 

`M` ≫ `N` - `arr2` is much bigger than `arr1`.

### Example
```
input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2
```

## Solution 1

### Case 1 (M ≈ N)

We can use the fact that the arrays are sorted to traverse both in an in-order manner simultaneously. 

The general idea of the algorithm is to use two indices, `i` and `j`, for `arr1` and `arr2`, respectively. 

If arr1[i] is less than arr2[j], we increment i. 

If arr1[i] is greater than arr2[j], we increment j.

If arr1[i] == arr2[j], we add the value to the output array and increment both indices.


### Code
```python
def find_duplicates1(arr1, arr2):
    i, j = 0, 0
    duplicates = []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] == arr2[j]:
            duplicates.append(arr1[i])
            i += 1
            j += 1
        elif arr1[i] < arr2[j]:
            i += 1
        else:
            j += 1
    return duplicates


def main():
    assert find_duplicates1(arr1=[1, 2, 3, 5, 6, 7], arr2=[3, 6, 7, 8, 20]) == [3, 6, 7]

```

### Time & Space Complexity:

Time Complexity: `O(M+N)` 

since in the worst-case scenario, we traverse both arrays once. 

Space Complexity: `O(N)`

the variable duplicates are the only dynamic auxiliary space we’re using in the algorithm. 
In the worst-case scenario, the size of duplicates is going to be as big as the smaller input array. 
For instance, when the smaller array is fully contained within the bigger one. The space complexity is therefore O(N), where N ≤ M.


## Solution 2
### Case 2 (M ≫ N)

When one array is substantially longer than the other, we should try to avoid traversing the longer one. 

Instead, we can traverse the shorter array and look up its values in the longer array by using the binary search algorithm. 

### Code

```python
def find_duplicates2(arr1, arr2):
    # let arr2 becomes the smaller one
    if len(arr1) < len(arr2):
        arr1, arr2 = arr2, arr1
    duplicates = []
    last_index = 0
    for i in arr2:
        search_index = binary_search_index(arr1, i, last_index, len(arr1) - 1)
        if search_index != -1:
            duplicates.append(arr1[search_index])
            last_index = search_index
    return duplicates


def binary_search_index(arr, element, start, end):
    low, high = start, end
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == element:
            return mid
        if arr[mid] < element:
            low = mid + 1
        else:
            high = mid - 1
    return -1


def main():
    assert find_duplicates2(arr1=[1, 2, 3, 5, 6, 7], arr2=[3, 6, 7, 8, 20]) == [3, 6, 7]

```

### Time & Space Complexity

Time Complexity: `O(N * log M)`

we running a binary search on `arr2` `N` times. Hence the time complexity is `O(N⋅log(M))`.

Space Complexity: `O(N)`

The same as solution1. 

