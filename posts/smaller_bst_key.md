---
date: 2023-02-03
title: Largest Smaller BST Key
tags:
- algorithm
- pramp 
- tree
---
# {{ $frontmatter.title }}

## Question

Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num.\
If such a number doesn’t exist, return -1. \
Assume that all keys in the tree are nonnegative.



### Example
```
Input: For num = 17 and the binary search tree below:
            20
            /  \
          9    25
         / \
        5   12
            /  \
         11    14
Output: 14 since it’s the largest key in the tree that is still smaller than 17.

```

## Solution 
We could use the binary search algorithm to find the smaller key.\
We start from the root. \
If the root value is greater than or equal to num, we move to the left subtree; \
otherwise, we compare the value with the current min value and move to the right subtree.


### Code
```python
   
    def find_largest_smaller_key(self, num):
        result = -1
        node = self.root
        while node:
            if node.key < num:
                result = node.key
                node = node.right
            else:
                node = node.left
        return result

```

### Time& Space Complexity

Time Complexity: 

We scan the tree once from the root to the leaves and do a constant number of actions for each node. \
if the tree is balanced the complexity is O(log(N)). \
Otherwise, it could be up to O(N).

Space Complexity:

Throughout the entire algorithm, we used only a constant amount of space, hence the space complexity is O(1).








