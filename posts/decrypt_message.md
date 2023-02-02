---
date: 2023-02-01
title: Decrypt Message
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

Every word is encrypted as follows:

  - Convert every letter to its ASCII value.
  - Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter.
  - Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII.
  - Convert the values back to letters.

For instance, to encrypt the word “crime”

Decrypted message:  c   r   i   m   e
Step 1:             99  114 105 109 101
Step 2:            100  214 319 428 529
Step 3:            100  110 111 116 113
Encrypted message:  d   n   o   t   q

Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.





### Example
```
input:  word = "dnotq"
output: "crime"
input:  word = "flgxswdliefy"
output: "encyclopedia"


```

## Solution 

So the encryption algorithm is:

1. ord(Y[0]) = ord(X[0]) + 1
2. ord(Y[1]) = ord(X[1]) + ord(Y[0]) - N*26

Then we can modify the equation to get the decryption algorithm:

1. ord(X[0]) = ord(Y[0]) - 1
2. ord(X[1]) = ord(Y[1]) - ord(Y[0]) + N*26




### Code
```python
def solution(word):
    decryption = ""
    prev_letter_value = 1

    for letter in word:
        letter_ascii_value = ord(letter)
        letter_ascii_value -= prev_letter_value

        while letter_ascii_value < ord('a'):
            letter_ascii_value += 26

        decryption += chr(letter_ascii_value)
        prev_letter_value += letter_ascii_value
    print(decryption)
    return decryption

```

### Time& Space Complexity

Time Complexity:

the function’s asymptotic time complexity is O(N), where N is the length of the input string.

the loop that iterates through the letters in the input is performed N times.

Space Complexity: 

the space usage is also O(N) since the output is the same size as the input,
and we only keep the output and the second step in storage.







