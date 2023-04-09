// Given an array of integers, the task is to find any three elements 
// A[i], A[j], and A[k], such that A[i] < A[j] < A[k] and i < j < k.

// Pseudo Code:

// 1. Initialize the minimum value as infinity and the maximum value as -infinity
// 2. Initialize two arrays of size n, where L[i] stores the smallest value on the left side of A[i], and R[i] stores the largest value on the right side of A[i].
// 3. Fill the L[] array from left to right, keeping track of the minimum value.
// 4. Fill the R[] array from right to left, keeping track of the maximum value.
// 5. Traverse the array A[] from left to right and check if there exists any element A[i], such that L[i] < A[i] < R[i]. If found, return true.
// 6. If no such element exists, return false.