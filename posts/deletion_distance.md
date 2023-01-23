---
date: 2023-02-23
title: Deletion Distance
tags:
- algorithm
- pramp 
- dynamic programming
---
# {{ $frontmatter.title }}

## Question

The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string.

For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.

Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them.




### Example
```
input:  str1 = "dog", str2 = "frog"
output: 3
input:  str1 = "some", str2 = "some"
output: 0
input:  str1 = "some", str2 = "thing"
output: 9
input:  str1 = "", str2 = ""
output: 0

```

## Solution 

In order to determine the minimum number of delete operations needed, we can use the length of the longest common sequence among the two given strings s1 and s2, say given by lcs. 
If m and n are the lengths of two strings, then we will have:

$$ distance = m + n - 2 * lcs $$

We could use Dynamic Programming to get the lcs.

We make use of a 2-D array dp, in which dp[i][j] represents the length of the longest common subsequence among the strings s1 and s2 considering their lengths upto (i-1)th index and (j-1)th index only respectively.

We fill the dp array in row-by-row order.

In order to fill the entry for dp[i][j], we can have two cases:

1. If the characters s1[i-1] and s2[j-1] match with each other. Then dp[i][j] = 1 + dp[i-1][j-1].
2. If The characters s1[i-1] and s2[j-1] don't match each other. We need to remove the current character from either s1 or s2. So dp[i][j] = max(dp[i-1][j] , dp[i][j-1]).
 



### Code
```python

def lcs_dp(s1, s2, m, n):
    dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]


def solution(s1, s2):
    m, n = len(s1), len(s2)
    lcs_result = lcs_dp(s1, s2, m, n)
    return m + n - 2 * lcs_result

```

### Time& Space Complexity

Time complexity : 

O(m*n). We need to fill in the dp array of size m*n. Here, m and n refer to the lengths of s1 and s2.

Space complexity : 

O(m*n). dp array of size m*n is used.
















