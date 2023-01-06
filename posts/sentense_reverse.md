---
date: 2023-01-06
title: Sentence Reverse
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

You are given an array of characters arr that consists of sequences of characters separated by space characters.
Each space-delimited sequence of characters defines a word.
Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.




### Example
```
input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
                'm', 'a', 'k', 'e', 's', ' ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', ' ',
          'm', 'a', 'k', 'e', 's', ' ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]


```

## Solution 

First, we can reverse the whole array. 

After that, the order of the words is reversed and every character of each word is also reversed.

Then we reverse every word to get the answer. 



### Code
```python
def reverse_helper(arr, start, end):
    i, j = start, end
    while i < j:
        arr[i], arr[j] = arr[j], arr[i]
        i += 1
        j -= 1


def solution(arr):
    n = len(arr)
    reverse_helper(arr, 0, n - 1)
    start, end = 0, 0
    for i in range(n):
        if arr[i] == ' ':
            end = i - 1
            reverse_helper(arr, start, end)
            start = i + 1
    reverse_helper(arr, start, n - 1)
    return arr


def main():
    assert solution(['p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
                     'm', 'a', 'k', 'e', 's', ' ',
                     'p', 'r', 'a', 'c', 't', 'i', 'c', 'e']) == ['p', 'r', 'a', 'c', 't', 'i', 'c', 'e', ' ',
                                                                  'm', 'a', 'k', 'e', 's', ' ',
                                                                  'p', 'e', 'r', 'f', 'e', 'c', 't']


if __name__ == '__main__':
    main()


```

### Time& Space Complexity

Time Complexity: O(N)

Space Complexity: O(1)










