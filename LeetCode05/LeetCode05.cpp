class Solution {
public:
    string longestPalindrome(string s) {
        int i,j;
        int MaxRight = 0;
        int pos = 0;
        int MaxLen = 0;
        int a = s.size();
        int RL[2001];
        string::iterator target;
        for(i = 0;i <2*a+1;i+=2){
            s.insert(i,"#");
        }   
        
        j = 0;
        for(i = 0;i < 2*a+1;i++){
            if(i < MaxRight) RL[i] = (RL[2 * pos - i] > MaxRight - i) ? (MaxRight - i) : RL[2 * pos - i];
            else RL[i] = 1;
            while(i - RL[i] >= 0 && i + RL[i] < 2*a+1 && s[i - RL[i]] == s[i + RL[i]]){
                    RL[i] += 1;
                }
            if(RL[i] + i - 1 > MaxRight){
                MaxRight = RL[i] + i - 1;
                pos = i;
            }
            j = (MaxLen > RL[i]) ? j : i;
            
            MaxLen = (MaxLen > RL[i]) ? MaxLen : RL[i];            
        }
        i = 0;
        string result = s.substr(j-MaxLen+1,2*MaxLen-2);
        for(target=result.begin();target != result.end();target++){
            result.erase(target);
        }
        return result;
    }
};
