/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *result,*p,*q,*r,*t;
        p = l1;
        q = l2;
        result = new ListNode(0);
        r = result;
        int flag = 0;
        while(p != NULL || q != NULL || flag == 1){
            if(flag == 1) r->val++;
            if(p != NULL) {
                r->val += p->val;
                p = p->next;
            }
            if(q != NULL) {
                r->val += q->val;
                q = q->next;
            }
            if(r->val >= 10){
                r->val -= 10;
                flag = 1;
            }else{
                flag = 0;
            }
            if(p == NULL && q == NULL && flag == 0) break;
            t = new ListNode(0);
            r->next = t;
            r = t;
        }
        return result;
    }
};
