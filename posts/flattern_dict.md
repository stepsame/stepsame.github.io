---
date: 2023-02-22
title: Flatten a Dictionary
tags:
- algorithm
- pramp 
- recursion
---
# {{ $frontmatter.title }}

## Question

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it.
If a certain key is empty, it should be excluded from the output (see e in the example below).


### Example
```
input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }
output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }

```

## Solution 

Recursion is a natural choice for this kind of problem.

We iterate over the keys in the dictionary and distinguish between two cases: 

1. If the value mapped to a key is primitive, we take that key and simply concatenate it to the flattened key we've created up to this point. We then map the resulting key to the value in the output dictionary.
2. If the value is a dictionary, we again concatenate the keys, but instead of adding the resulting key and value to the output dictionary, we recurse on the value with the newly formed key.

Because it is useful to create the output dictionary outside of the recursive function, it makes sense to use a helper function in this problem.




### Code
```python
def flatten_dict(path, original_dict, flat_dict):
    for key, value in original_dict.items():
        if path and key:
            updated_path = f'{path}.{key}'
        elif path:
            updated_path = path
        else:
            updated_path = key
        if not isinstance(value, dict):
            flat_dict[updated_path] = value
        else:
            flatten_dict(updated_path, value, flat_dict)


def solution(original_dict):
    flat_dict = {}
    flatten_dict("", original_dict, flat_dict)
    print(flat_dict)
    return flat_dict

```

### Time& Space Complexity

Time Complexity: O(N)

where N is the number of keys in the input dictionary. 

We visit every key in the dictionary only once, hence the linear time complexity.

Space Complexity: O(N) 

since the output dictionary is asymptotically as big as the input dictionary. 

We also store recursive calls in the execution stack which in the worst-case scenario could be O(N), as well. 

The total is still O(N).














