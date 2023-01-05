---
date: 2023-01-04
title: Busiest Time in The Mall
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

The Westfield Mall management is trying to figure out what the busiest moment at the mall was last year.

You’re given data extracted from the mall’s door detectors. Each data point is represented as an integer array whose size is 3.

The values at indices 0, 1, and 2 are the timestamp, the count of visitors, and whether the visitors entered or exited the mall (0 for exit and 1 for entrance),
respectively. Here’s an example of a data point: [ 1440084737, 4, 0 ].

Given an array, data, of data points, write a function findBusiestPeriod that returns the time at which the mall reached its busiest moment last year.

The return value is the timestamp, e.g. 1480640292. Note that if there is more than one period with the same visitor peak, return the earliest one.

Assume that the array data is sorted in ascending order by the timestamp.



### Example
```
input:  data = [ [1487799425, 14, 1],
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]
output: 1487800378
```

## Solution 

We need traverse the data array. For every data point, we need to increase or decrease the current visitor number based on the third data.

If the next data point’s timestamp is equal to the current’s, then we can jump to the next data point.
Otherwise, we find the current timestamp’s visitor number. So we can compare it to the maximum visitor number.


### Code
```python
def solution(data):
    max_people = 0
    max_timestamp = 0
    current_people = 0
    for i in range(len(data)):
        current_timestamp, visitors, entered = data[i]
        if entered == 1:
            current_people += visitors
        elif entered == 0:
            current_people -= visitors

        # check if this timestamp has multiple data points
        if i < len(data) - 1 and data[i + 1][0] == current_timestamp:
            continue

        if current_people > max_people:
            max_people = current_people
            max_timestamp = current_timestamp
    return max_timestamp


def main():
    assert solution([[1487799425, 14, 1],
                     [1487799425, 4, 0],
                     [1487799425, 2, 0],
                     [1487800378, 10, 1],
                     [1487801478, 18, 0],
                     [1487801478, 18, 1],
                     [1487901013, 1, 0],
                     [1487901211, 7, 1],
                     [1487901211, 7, 0]]) == 1487800378


if __name__ == '__main__':
    main()


```

### Time& Space Complexity


Time Complexity: O(N)

Because we traverse the data array.

Space Complexity: O(1)



