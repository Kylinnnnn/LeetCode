/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    let i = 0;
    let sentry = 1;
    while (i < nums.length) {
        if (nums[i] === nums[sentry]) {
            sentry++;
        }
        if (sentry === nums.length || nums[i] != nums[sentry]) {
            nums.splice(i, sentry - i - 1);
            i++;
            sentry = i + 1;
        }
    }
    return nums.length;
};