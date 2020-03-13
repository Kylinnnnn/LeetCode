/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let _max = Math.min(height[i], height[j]) * (j - i);
    while(i!=j){
        (height[i] < height[j]) ? i++ : j--;
        _max = (_max > Math.min(height[i], height[j]) * (j - i)) ? _max : Math.min(height[i], height[j]) * (j - i);        
    }
    return _max;
};