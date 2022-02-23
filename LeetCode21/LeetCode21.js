/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function (list1, list2) {
    let res = new ListNode(0, null);
    let start = res;
    while (list1 != null || list2 != null) {
        if (list1 === null) { res.next = list2; break; }
        else if (list2 === null) { res.next = list1; break; }
        else if (list1.val > list2.val) {
            res.next = list2;
            list2 = list2.next;
        }
        else {
            res.next = list1;
            list1 = list1.next;
        }
        res = res.next;
    }
    return start.next;
};