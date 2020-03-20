/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var pre = 0;
    var cur = 0;
    var i = 0;
    var res = 0;
    do{
        cur = s[s.length - 1-i];
        switch(cur){
            case 'I':
                cur = 1;
                break;
            case 'V':
                cur = 5;
                break;
            case 'X':
                cur = 10;
                break;
            case 'L':
                cur = 50;
                break;
            case 'C':
                cur = 100;
                break;
            case 'D':
                cur = 500;
                break;
            case 'M':
                cur = 1000;
                break;
        }
        if(cur < pre){
            res -= cur;
        }
        else{
            res += cur;
        }
        pre = cur;
        i++;
    }while(i <= s.length - 1)
    return res;
};