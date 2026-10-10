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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let currentNode: ListNode | null = head;
        let previous: ListNode | null = null;

        while (currentNode !== null) {
            const next: ListNode | null = currentNode.next;

            currentNode.next = previous;
            previous = currentNode;
            currentNode = next;
        }

        return previous;
    }
}
