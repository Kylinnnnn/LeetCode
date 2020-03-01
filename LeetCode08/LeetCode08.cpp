/*
 * @lc app=leetcode.cn id=8 lang=cpp
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
class Solution {
public:
    int myAtoi(string str) {
        long res = 0;
        if(str.length() == 0) return 0;
        while(str[0] == ' '){
            str = str.erase(0,1);
        }
        if(str.length() == 0) return 0;
        if(str[0]!='-'&&str[0]!='+'&&(str[0]<'0'||str[0]>'9'))
            return 0;
        if(str[0] == '-'){
            str = str.erase(0,1);
            while(str[0]<='9'&&str[0]>='0'){
                res = res*10-str[0]+'0';
                str = str.erase(0,1);
                if(!overflowCheck(res)) return INT_MIN;
            }
        }
        else{
            if (str[0] == '+')
                str = str.erase(0,1);
             while(str[0]<='9'&&str[0]>='0'){
                res = res*10+str[0]-'0';
                str = str.erase(0,1);
                if(!overflowCheck(res)) return INT_MAX;
            }          
        }
        return (int)res;
    }
    int overflowCheck(long target){
        if(target<INT_MIN||target>INT_MAX){
            return 0;
        }
        else return 1;
    }
};
// @lc code=end

