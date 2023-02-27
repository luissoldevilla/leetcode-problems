function runningSum(nums) {
    console.log(nums)
    if (nums.length==0) return []

    const sumArray = []

    let index1 = nums[0]

    sumArray.push(index1)

    for (let i = 1; i < index1.length; i++) {
        index1 = index1 + nums[i]
    }

}

runningSum([1,2,3,4]);