---
date: 2023-01-29
title: Basic Regex Parser
tags:
- algorithm
- pramp 
- dynamic programming
---
# {{ $frontmatter.title }}

## Question

Implement a regular expression function isMatch that supports the '.' and '*' symbols. The function receives two strings - text and pattern -
and should return true if the text matches the pattern as a regular expression.
In case you aren’t familiar with regular expressions, the function determines if the text and pattern are the equal, where the '.'
is treated as a single a character wildcard (see third example), and '*' is matched for a zero or more sequence of the previous letter.


### Example
```
input:  text = "aa", pattern = "a"
output: false
input:  text = "aa", pattern = "aa"
output: true
input:  text = "abc", pattern = "a.c"
output: true
input:  text = "abbb", pattern = "ab*"
output: true
input:  text = "acd", pattern = "ab*c."
output: true


```

## Solution 

We could use dynamic programming to solve it.

We use a 2-D dp, in which dp[i][j] represents whether text from start to index i-1 and pattern from start to index j-1 match.

let's calculate the first column dp[i][0]. An empty pattern p="" only matches an empty text, so dp[0][0] is true, and the rest of the first column is false.

Then let's calculate the first row dp[0][j]. An empty pattern can match an empty text, and a char with a star (for example 'a*') can also match it.
so dp[0][j] = dp[0][j-2] if pattern[j-1] == '*'.

finally, In the general situation, there are 2 cases for dp[i][j]:

case 1, pattern[j-1] == text[i-1] or '.'. in that case, dp[i][j] = dp[i-1][j-1]

case 2, pattern[j-1] == '*'. 

In that case, 
if pattern[j-2] == text[i-1] or '.', then this pattern can be used for the same char multiple times, so dp[i][j] = dp[i-1][j];

Otherwise, this pattern can only be used for an empty text, so dp[i][j] = dp[i][j-2];








### Code
```python
def is_match_dp(text, pattern):
    if not pattern:
        return not text
    n, m = len(text), len(pattern)
    dp = [[False] * (m+1) for _ in range(n+1)]
    dp[0][0] = True

    for j in range(2, m+1):
        if pattern[j-1] == '*':
            dp[0][j] = dp[0][j - 2]

    for i in range(1, n+1):
        for j in range(1, m+1):
            if pattern[j-1] in {text[i-1], '.'}:
                dp[i][j] = dp[i-1][j-1]
            elif pattern[j-1] == '*':
                dp[i][j] = dp[i-1][j] if (j >= 2 and pattern[j-2] in {text[i-1], '.'}) else (dp[i][j-2] if j >= 2 else False)
    return dp[n][m]

```

### Time& Space Complexity

Time Complexity:

Let M, and N be the lengths of the text and the pattern respectively.
We traverse the 2-D array once, hence, the time complexity is O(MN).

Space Complexity:

the space complexity is also O(MN).
















