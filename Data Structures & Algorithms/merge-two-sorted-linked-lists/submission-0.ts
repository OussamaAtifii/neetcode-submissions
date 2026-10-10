/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        let current1 = list1;
        let current2 = list2;

        const dummy: ListNode = {
            val: -1,
            next: null,
        };

        let tail = dummy;

        while (current1 !== null && current2 !== null) {
            if (current1.val <= current2.val) {
                tail.next = current1;
                current1 = current1.next;
                tail = tail.next;
            } else {
                tail.next = current2;
                current2 = current2.next;
                tail = tail.next;
            }
        }

        tail.next = current1 ?? current2;

        return dummy.next;
    }
}
