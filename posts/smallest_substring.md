---
date: 2023-01-07
title: Smallest Substring of All Characters (Minimum Window Substring)
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str
containing all the characters in arr. 

Return "" (empty string) if such a substring doesn’t exist.


### Example
```
input:  arr = ['x','y','z'], str = "xyyzyzyx"
output: "zyx"


```

## Solution 

We can use the Sliding windows method to solve it.

First, we use a Dictionary to store the substring’s characters and the counts.
And use two variables to store the substring's start and end indexes.

We traverse the string, add the current char to the Dict, and check if the substring contains all chars.
If it does, we record the current substring, then we can try to shrink the substring from the left and update the answer.













### Code
```python
def solution(arr, string):
    char_count = {char: 0 for char in arr}
    meet_count = 0
    i = 0
    min_length = len(string)
    result_start, result_end = 0, 0
    for j in range(len(string)):
        char = string[j]
        if char in char_count:
            if char_count[char] == 0:
                meet_count += 1
            char_count[char] += 1

        if meet_count == len(arr):
            # shrink
            while i <= j:
                # record
                if j - i + 1 < min_length:
                    min_length = j - i + 1
                    result_start = i
                    result_end = j

                # shrink
                if string[i] in char_count:
                    char_count[string[i]] -= 1
                    if char_count[string[i]] == 0:
                        meet_count -= 1
                i += 1
                if meet_count < len(arr):
                    break

    return string[result_start : result_end+1]


def main():
    assert solution(arr = ['x','y','z'], string = "xyyzyzyx") == "zyx"


if __name__ == '__main__':
    main()

```

### Time& Space Complexity

Time Complexity: O(N)

We traverse the string and check every char once.

Space Complexity: O(M)

The dictionary’s length is equal to arr’s.














