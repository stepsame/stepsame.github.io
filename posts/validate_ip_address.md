---
date: 2023-01-04
title: Validate IP Address
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.


### Example
```
ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false
```

## Solution

For each address, we split it into chunks delimited by a period. A valid address must have 4 chunks. Then, for each chunk, we will check whether it is the string representation of a number from 0 to 255.

We need to check that all the characters in the string are digits and that there are no leading zeroes, and the string-to-int representation is in the range [0, 255].








### Code
```python
def is_valid_ip_part(part):
   for char in part:
       if ord(char) < ord('0') or ord(char) > ord('9'):  # if not char.isdigit():
           return False
   number = int(part)
   if number > 255:
       return False
   if part[0] == '0' and len(part) > 1:
       return False
   return True


def solution(ip):
   parts = ip.split('.')
   if len(parts) != 4:
       return False
   for i in parts:
       if not is_valid_ip_part(i):
           return False
   return True


def main():
   assert solution('192.168.123.456') == False
   assert solution('192.168.00.456') == False
   assert solution('192.168.0.123') == True


if __name__ == '__main__':
   main()

```

### Time & Space Complexity:

Time Complexity: O(N), where N is the number of characters in ip.

Our split operation takes O(N) time, and our is_valid_ip operation takes a linear amount of time for each chunk, and the sum of the chunks is the whole string.

Space Complexity: O(N)

Our split operation takes O(N) space.






