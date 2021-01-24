/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    else{
        let len = 1;
        let i = 0;
        let j = 1;
        let temp = 1;
        for(j;j<nums.length;j++){
            temp = (nums[j-1]<nums[j])?temp+1:1;
            len = (len<temp)?temp:len;
            i = (nums[j-1]<nums[j])?i:j;
        }
        return len;
    }
};
// @lc code=end