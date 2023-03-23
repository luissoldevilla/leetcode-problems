
// Given an array of integers 'nums', calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to 
// the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no 
// elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Solution:
function findPivotIndex(nums) {

    let totalSum = nums.reduce((partialSum, a) => partialSum + a, 0)

    console.log(totalSum)
    let index1 = 0

    for(let i = 0; i < nums.length; i++) {
        // console.log(nums[i])
        
    }
}

findPivotIndex([1,7,3,6,5,6])
findPivotIndex([1,7,3,6,5,6])