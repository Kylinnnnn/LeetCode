class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int i,j,m,n;
        int length;
        i = 0;
        length = 0;
        m = 0;
        j = s.size() - 1;
        if(j == 0){
            return 1;
        }else{
            while(m < j){
                m++;
                for(n = i;n < m;n++){
                    if(s[n] == s[m]) i = n+1;
                }
            length = (length > (m - i +1)) ? length : (m - i + 1);
            }
        return length;
        }
    }
};
