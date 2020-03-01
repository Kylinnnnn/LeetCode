/*
 * @lc app=leetcode.cn id=7 lang=cpp
 *
 * [7] 整数反转
 */

// @lc code=start
class Solution {
public:
    int a;//余数    int b;//除之后的数
    long c = 0;//转换之后的数
    int reverse(int x) {
        a = x % 10;
        x /= 10;
        c *= 10;
        c += a;
        if(c > INT_MAX || c < INT_MIN)
            return 0;
        else if(x != 0)
            return reverse(x);
        else
            return (int)c;
    }
};
// @lc code=end

