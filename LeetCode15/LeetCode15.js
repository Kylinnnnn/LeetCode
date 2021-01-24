/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    var res = [];
    var i = 0;
    var j = nums.length - 1;
    if(nums[i] > 0 || nums[j] < 0){
        return res;
    }
    else{
        while(nums[i] <= 0){
            for(j = nums.length - 1; nums[j] >= 0 && i != j; j--){
                let third = 0 - (nums[i] + nums[j]);
                let temp = nums.slice(i+1,j);
                if(temp.indexOf(third) != -1){
                    let temp = [];
                    temp.push(nums[i], third, nums[j]);
                    res.push(temp);
                }
            }
            i++;
        }
        for (let a in res){
            res[a] = res[a].join('+');
        }
        var temp = new Set(res);
        res = Array.from(temp);
        for (let a in res){
            res[a] = res[a].split('+');
        }
        return res;
    }
};
// @lc code=end

