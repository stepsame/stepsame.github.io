---
date: 2023-02-02
title: Diff Between Two Strings
tags:
- algorithm
- pramp 
- dynamic programming
---
# {{ $frontmatter.title }}

## Question

Given two strings of uppercase letters source and target, list (in string form) a sequence of edits to convert from source to target that uses the least edits possible.

For example, with strings source = "ABCDEFG", and target = "ABDFFGH" we might return: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"

More formally, for each character C in source, we will either write the token C, which does not count as an edit;or write the token -C, which counts as an edit.

Additionally, between any token that we write, we may write +D where D is any letter, which counts as an edit.

At the end, when reading the tokens from left to right, and not including tokens prefixed with a minus-sign, the letters should spell out target(when ignoring plus-signs.)

In the example, the answer of A B -C D -E F +F G +H has total number of edits 4 (the minimum possible), and ignoring subtraction-tokens, spells out A, B, D, F, +F, G, +H which represents the string target.

If there are multiple answers, use the answer that favors removing from the source first.



### Example
```
input: source = "ABCDEFG", and target = "ABDFFGH" 
output: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"

```

## Solution 
This question is similar to the longest common subsequence problem.\
So we could use the dynamic programming algorithm to find the minimum edit distance, then use the dp matrix to print the edit distance.

1. We use a 2-D array dp, which dp[i][j] represents min edit distances among s[:i-1] and t[:j-1]\
When i = 0 or j = 0, the dp[i][j] value is the length of the other string.\
And in the general, if s[i-1] == t[j-], dp[i][j] = dp[i-1][j-1]; else dp[i][j] = 1 + max(dp[i-1][j], dp[i][j-1])\

2. dp[n][m] is the min edit distance. So We will only print the distances in descending order. \
We use i and j for the source and target string index, and let i = n, j = m.\
Because the answer favors removing the letter first, in descending order we need to add the letter first.\
If dp[i][j-1] < dp[i][j]: then we add letter t[j-1], and decrease j;\
If s[i-1] == t[j-1], then just print the char and decrease i and j both;\
Otherwise, we decrease the letter s[i-1] and decrease i.

In the end, we reverse the distances.


### Code
```python
def solution(source, target):
    n, m = len(source), len(target)
    dp = [[0] * (m+1) for _ in range(n+1)]
    for j in range(1, n+1):
        dp[0][j] = j
    for i in range(1, n+1):
        dp[i][0] = i
    for i in range(1, n+1):
        for j in range(1, m+1):
            if source[i-1] == target[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j-1])
        print(dp[i])

    i, j = m, n
    ans = []
    while i > 0 and j > 0:
        if dp[i][j-1] < dp[i][j]:
            ans.append('+' + target[j - 1])
            j -= 1
        elif source[i - 1] == target[j - 1]:
            ans.append(source[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] < dp[i][j]:
            ans.append('-' + source[i - 1])
            i -= 1
    while i > 0:
        ans.append('-' + source[i - 1])
        i -= 1
    while j > 0:
        ans.append('+' + target[j - 1])
        j -= 1
    ans.reverse()
    return ans


```

### Time& Space Complexity

Time Complexity: O(MN), 

where M is the length of the source string and N is the length of the target string, from the nested for loop.

Space Complexity: O(MN), 

where M is the length of the source string and N is the length of the target string, the space taken by dp array.








