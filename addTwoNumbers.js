/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const temp_node = new ListNode(0);
    let l3 = temp_node;

    let carry = 0;
    while (l1 != null || l2 != null) {
        const l1_val = l1 != null ? l1.val : 0;
        const l2_val = l2 != null ? l2.val : 0;

        const current_sum = l1_val + l2_val + carry;
        carry = Math.floor(current_sum / 10);
        const last_digit = Math.floor(current_sum % 10);

        const new_node = new ListNode(last_digit);
        l3.next = new_node;

        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
        l3 = l3.next;
    }
    if (carry > 0) {
        const new_node = new ListNode(1);
        l3.next = new_node;
        l3 = l3.next;
    }
    return temp_node.next;
};
