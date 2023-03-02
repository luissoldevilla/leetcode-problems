// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.
// This is the First Solution
function runningSum(nums) {
    // console.log(nums)
    if (nums.length==0) return []

    const sumArray = []

    let index1 = nums[0]

    sumArray.push(index1)

    for (let i = 1; i < index1.length; i++) {
        index1 = index1 + nums[i]
        sumArray.push(index1)
    }

    console.log(sumArray)
    return sumArray

}

runningSum([1,2,3,4]);

// SECOND SOLUTION
// This is the second solution for the problem

function runningSum2(nums) {
    let currentSum = 0
    for( let i = 0; i < nums.length; i++) {
        // currentSum = currentSum + nums[i]
        currentSum+=nums[i]
        nums[i] = currentSum;
    }
    console.log(nums)
    return nums
}

runningSum2([1,2,3,4]);
runningSum2([1,2,3,4,5]);

// THIRD SOLUTION
// using .map()

function runningSum3(nums) {
    let currentSum = 0
    const mapping = nums.map((num) => currentSum += num)
    console.log(mapping)
    return mapping
}

runningSum3([1,2,3,4])
runningSum3([1,2,3,4,5])