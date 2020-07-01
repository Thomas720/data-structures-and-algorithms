# Code Challenge

## Find common values in 2 binary trees.

- [Pull Request](https://github.com/Thomas720/data-structures-and-algorithms/pull/38)

### Code Methods

- We can find common elements in O(n) time.

1. Do inorder traversal of first tree and store the traversal in an auxiliary array ar1[]. See sortedInorder() here.
2. Do inorder traversal of second tree and store the traversal in an auxiliary array ar2[]
3. Find intersection of ar1[] and ar2[]. See this for details.

- Time complexity of this method is O(m+n) where m and n are number of nodes in first and second tree respectively. This solution requires O(m+n) extra space.

### Solutions

![White Board]('../wb.jpg')
