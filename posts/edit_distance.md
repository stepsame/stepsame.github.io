---
date: 2023-02-02
title: Shortest Word Edit Path
tags:
- algorithm
- pramp 
- graph
- bfs
---
# {{ $frontmatter.title }}

## Question

Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.\
Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.\
If the task is impossible, return -1.


### Example
```
input: source = "bit", target = "dog" , words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.

input source = "no", target = "go", words = ["to"]
output: -1

```

## Solution 
We could convert this problem to a graph traversal problem.\
Every word is a graph node and two words that differ by 1 letter are connected. And we need to traverse the graph from the source to the target word.

Firstly, we build the graph using a dictionary that mapped every word and its connected words.\
Then We can use a breadth-first search algorithm to traverse the graph to find the shortest path.


### Code
```python

def solution(source, target, words):
    # construct the graph
    one_edit_distance_graph = {}
    words.append(source)
    for i in range(len(words)):
        base_word = words[i]
        for j in range(len(words)):
            if i == j:
                continue
            new_word = words[j]
            if not is_one_edit_distance(base_word, new_word):
                continue
            if base_word in one_edit_distance_graph:
                one_edit_distance_graph[base_word].append(new_word)
            else:
                one_edit_distance_graph[base_word] = [new_word]

    # bfs traverse graph
    queue = [(source, 0)]
    visited_word_set = set()
    while queue:
        current_word, current_step = queue.pop(0)
        for word in one_edit_distance_graph[current_word]:
            if word in visited_word_set:
                continue
            if word == target:
                return current_step + 1
            visited_word_set.add(word)
            queue.append((word, current_step + 1))
    return


def is_one_edit_distance(word1, word2):
    diff_char_count = 0
    for i in range(len(word1)):
        if word1[i] != word2[i]:
            diff_char_count += 1
        if diff_char_count > 1:
            return False
    return True

```

### Time& Space Complexity

Time Complexity: O(N^2*M) 

N is words count, M is word length 

Space Complexity: O(N^2)

The graph dictionary task O(N^2) space.

