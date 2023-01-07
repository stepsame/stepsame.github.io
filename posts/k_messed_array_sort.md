---
date: 2023-01-07
title: K-Messed Array Sort
tags:
- algorithm
- pramp 
- sorting
- heap
---
# {{ $frontmatter.title }}

## Question

Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr.

For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.


### Example
```
input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```

## Solution 

We can use the heap sort to solve it.

The idea is to construct a min-heap of size k+1 and insert the first k+1 elements into the heap.

Then we pop the min value and push the next element from the array into the heap and continue the process until both the array and the heap are exhausted.



### Code
```python
Import heapq

def solution(arr, k):
    n = len(arr)

    # build the min-heap from the first k+1 elements of arr
    heap = arr[:k+1]
    heapq.heapify(heap)

    for i in range(k+1, n):
        # extract the top element from the min-heap and
        # assign it to the next available array index
        arr[i - (k + 1)] = heapq.heappop(heap)

        # push the next array element into the min-heap
        heapq.heappush(heap, arr[i])

    # extract all remaining elements from the min-heap
    # and assign them to the next available array index
    for i in range(k+1):
        arr[n - (k + 1) + i] = heapq.heappop(heap)

    print(arr)
    return arr


def main():
    assert solution(arr=[1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k=2) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


if __name__ == '__main__':
    main()


```

### Time& Space Complexity

Time Complexity: O(N logK)

building a heap takes O(K) time for K+1 elements.
Insertion into and extraction from the min-heap take O(log(K)), each.
Across all three loops, we do at least one of these actions N times, so the total time complexity is O(N⋅log(K)).

Space Complexity: O(K)

we need to a maintain min-heap of size K+1 
 











