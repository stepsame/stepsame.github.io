---
date: 2023-01-04
title: Drone Flight Planner
tags:
- algorithm
- pramp 
- array
---
# {{ $frontmatter.title }}

## Question

You’re an engineer at a disruptive drone delivery startup and your CTO asks you to come up with an efficient algorithm that calculates
the minimum amount of energy required for the company’s drone to complete its flight.

You know that the drone burns 1 kWh (kilowatt-hour is an energy unit) for every mile it ascends, and it gains 1 kWh for every mile it descends.

Flying sideways neither burns nor adds any energy.

Given an array route of 3D points, implement a function calcDroneMinEnergy that computes and returns the minimal amount of energy the drone would need
to complete its route. Assume that the drone starts its flight at the first point in route. That is, no energy was expended to place the drone at the starting point.

For simplicity, every 3D point will be represented as an integer array whose length is 3.
Also, the values at indexes 0, 1, and 2 represent the x, y and z coordinates in a 3D point, respectively.



### Example
```
input:  route = [ [0,   2, 10],
                        [3,   5,  0],
                        [9,  20,  6],
                        [10, 12, 15],
                        [10, 10,  8] ]
output: 5 # less than 5 kWh and the drone would crash before the finish
               # line. More than `5` kWh and it’d end up with excess e

```

## Solution

Only ascending burns energy and descending gains energy, so the x and y coordinates are useless and we can only care about the z coordinate.

Also, because only ascending needs energy, it will cost the most energy when we are at the highest point.

So, if we can reach the highest point from the starting point, then we are safe for the rest of the journey. so we can just calculate how many miles between the starting point’s height and the highest point’s height.






### Code
```python
def solution(route):
   highest_altitude = route[0][2]
   for i in route:
       if i[2] > highest_altitude:
           highest_altitude = i[2]
   return highest_altitude - route[0][2]


def main():
   assert solution([[0, 2, 10],
                    [3, 5, 0],
                    [9, 20, 6],
                    [10, 12, 15],
                    [10, 10, 8]]) == 5


if __name__ == '__main__':
   main()
```

### Time & Space Complexity:

Time Complexity: `O(N)`

Because we need to traverse the array to find the highest point.

Space Complexity: `O(1)`

We only use one variable.






