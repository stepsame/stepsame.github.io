---
date: 2023-01-07
title: Merging 2 Packages
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

Given a package with a weight limit 'limit' and an array arr of item weights,
implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit 'limit'.
Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j.
If such a pair doesn’t exist, return an empty array.



### Example
```
input:  arr = [4, 6, 10, 15, 16],  lim = 21
output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21

```

## Solution 

two sum. 
We can use a dictionary store all number and its index. 
Traverse the array, find if limit minus current num in the dictionary.



### Code
```python
def solution(arr, limit):
    if len(arr) < 2:
        return []
    indexes = {}
    for i in range(len(arr)):
        if limit - arr[i] in indexes:
            j = indexes[limit - arr[i]]
            return [i, j]
        indexes[arr[i]] = i
    return []


def main():
    assert solution(arr=[4, 6, 10, 15, 16], limit=21) == [3, 1]


if __name__ == '__main__':
    main()


```

### Time& Space Complexity

Time Complexity: O(N)

Space Complexity: O(N)










