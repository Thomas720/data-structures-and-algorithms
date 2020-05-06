# Tree Implementation

- Assign the First Root(Head Node) to Null and Assigninged the New Node to the Root Node and for the second immplementation if the new node's value is lower than the current node's, go to the left child. if the new node's value is greater than the current node's, go to the right child. when the current node is null, we've reached a leaf node, we insert the new node in that position.

## Links
    
- [Submmit Pull-Request](https://github.com/Thomas720/data-structures-and-algorithms/pull/28/)
    
## Challenge
    
![WhiteBoard]('../assets/tree.jpg')
    
## Approach & Efficiency
    
- we can use classes to generate our nodes and tree. Each node only really needs a pointer to the left/less and right/greater sides, the value.

## Testing


- npm test trees.test.js



