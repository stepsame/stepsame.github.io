---
date: 2023-01-04
title: Bracket Match
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa.
For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets
at the end, so you’d return 2.
Given a string that consists of brackets, write a function `bracketMatch` that takes a bracket string as an input and returns the minimum number of brackets
you’d need to add to the input in order to make it correctly matched.


### Example
```
input:  text = “(()”
output: 1
input:  text = “(())”
output: 0
input:  text = “())(”
output: 2


```

## Solution

We can use two variables open_unpair_count and close_unpair_count to store unpaired open and close bracket counts.

We need to traverse the string. 

If we meet an open bracket, we increase open_unpair_count.

If we meet a close bracket, we decrease open_unpair_count when open_unpair_count is positive; otherwise, we increase close_unpair_count.




### Code
```python
def solution(input_bracket):
   open_unpaired_count, close_unpaired_count = 0, 0
   for i in input_bracket:
       if i == '(':
           open_unpaired_count += 1
       elif i == ')':
           if open_unpaired_count > 0:
               open_unpaired_count -= 1
           else:
               close_unpaired_count += 1
       else:
           pass
   return open_unpaired_count + close_unpaired_count


def main():
   assert solution("(()") == 1
   assert solution("(())") == 0
   assert solution("())(") == 2
   assert solution(")(") == 2


if __name__ == '__main__':
   main()

```

### Time & Space Complexity:

Time Complexity: `O(N)`

We need to traverse the whole string, so the time complexity is O(N).

Space Complexity: `O(1)`

We only use two variables, so the space complexity is O(1).




