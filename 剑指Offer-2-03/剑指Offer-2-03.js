/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let temp = new Array(nums).fill(false)
    for(let i of nums){
        if(temp[i]) return i
        else temp[i]=true
    }
};
