---
date: 2023-01-21
title: Decode Variations
tags:
- algorithm
- pramp 
- dynamic programming
---
# {{ $frontmatter.title }}

## Question

A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'

A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'
Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.


### Example
```
input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.

```

## Solution 

We can use dynamic programming to solve this problem.

Assuming there is a string X(for example, ‘12’) and I know the ways to decode it is 2 ([1,2] or [12]). 

Let me append one more char(for example, ‘3’). Obviously, for the new string, the decode way is 2 (by decoding 3 to ‘C’ and getting [1,2,3] or [12,3]) + 1 (by decoding 3 with its previous char ‘2’, and then use adopt the decode ways for ‘1’ which is 1) = 3. 

So in general, if I use dp[i] for the decode ways of the string ending at index i, I will have

$$ dp[i] = dp[i-1] + dp[i-2] (0 < s[i-1] + s[i] ≤ 26) $$




### Code
```python
def solution(s):
    dp = [0 for _ in range(len(s))]
    dp[0] = 1
    for i in range(1, len(s)):
        if s[i] != '0':
            dp[i] += dp[i - 1]
        if 10 <= int(s[i-1:i+1]) <= 26:
            dp[i] += dp[i - 2] if i - 2 > 0 else 1
    return dp[-1]


def main():
    assert solution(s = '1262') == 3


if __name__ == '__main__':
    main()
```

### Time& Space Complexity

Time Complexity: O(N)

It takes only one iteration of all input (assuming there are N letters) so the time complexity is O(N).


Space Complexity: O(N)

I use an array to store up to N+1 values (for an initialization value and decode ways of s[:0], s[:1], s[:2] and etc.) so the space needed is proportional to N and hence the space complexity is O(N) as well.












