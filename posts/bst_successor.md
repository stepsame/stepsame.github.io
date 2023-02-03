---
date: 2023-02-03
title: BST Successor Search
tags:
- algorithm
- pramp 
- tree
---
# {{ $frontmatter.title }}

## Question

In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node(see examples below). \
Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode.\
If inputNode has no Inorder Successor, return null.\
```
            20
           /   \ 
          9    25
         / \
        5   12
           /  \
         11    14
```


### Example
```
iinput = node 11
output = node 12

input = node 9
output = node 11

input = node 14
output = node 20


```

## Solution 
A node’s in-order successor is its right subtree’s leftmost child.\
If the right subtree of the node doesn’t exist, then the in-order successor is the parent of the current left subtree.\
So we can move up the tree towards the root until we encounter a node that is the left child of its parent. 

### Code
```python
    def find_in_order_successor(self, input_node):
        if input_node.right:
            # return the node with minimum key in the right subtree
            while input_node.left:
                input_node = input_node.left
            return input_node

        child = input_node
        ancestor = input_node.parent

        # travel up using the parent pointer until you see
        # a node which is the left child of its parent. The parent
        # of such a node is successorNode.
        while ancestor and ancestor.right == child:
            child = ancestor
            ancestor = child.parent
        return ancestor


```

### Time& Space Complexity

Time Complexity: 

in both cases where either inputNode has a right child or doesn’t have one,
 we are visiting only O(H) number of nodes, where H is the height of the BST.\
  For a balanced BST, since H = log(N), where N is the number of nodes in the BST, the time complexity is O(log(N)).\
   For an unbalanced BST, the time complexity is O(N).

Space Complexity: 

throughout the entire algorithm, we used only a constant amount of space, hence the space complexity is O(1).






