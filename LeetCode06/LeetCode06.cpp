/*
 * @lc app=leetcode.cn id=6 lang=cpp
 *
 * [6] Z 字形变换
 */

// @lc code=start
class Solution {
public:
    string convert(string s, int numRows) {
        if(numRows == 1)   //单独处理只有一行的情况
            return s;
        else{
            string str = "";
            for (int j = 1; j <= numRows; j++){        //从字符串中按顺序检索符合Z字形矩阵中第j行数字特征的数
                for (int i = j; i <= s.length(); i++){
                    if(j == 2){
                        if(i % (2 * numRows - 2) == j|| i % (2 * numRows - 2) == 0)
                        str.append(1, s[i - 1]);
                    }
                    else if(i % (2 * numRows - 2) == j|| i % (2 * numRows - 2) == 2 * numRows - j)
                        str.append(1, s[i - 1]);
                }           
            }
            return str;
        }
    }
};
// @lc code=end

