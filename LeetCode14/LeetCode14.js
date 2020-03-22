/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var i = 0;
    var n = 0;
    var res = "";   
    if(!strs.length) return res;
    while(true){
        for(str of strs){
            if(!str) return res;
            if(i > str.length - 1) return res;
            var pre = strs[0][i];
            if(str[i] != pre) return res;            
            if(n == strs.length - 1){
                res += pre;
                n = 0;
            }
            else{
                n++;
            }           
        }
        i++;
    }
};
// var longestCommonPrefix = function(strs) {
//     if(strs.length == 0) 
//         return "";
//     let ans = strs[0];
//     for(let i =1;i<strs.length;i++) {
//         let j=0;
//         for(;j<ans.length && j < strs[i].length;j++) {
//             if(ans[j] != strs[i][j])
//                 break;
//         }
//         ans = ans.substr(0, j);
//         if(ans === "")
//             return ans;
//     }
//     return ans;
// };
// @lc code=end

