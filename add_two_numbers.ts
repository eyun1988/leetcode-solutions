class ListNode {
  public value: number;
  public next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null) => {
  let temp_node: ListNode | null = new ListNode(0);
  let l3 = temp_node;

  let carry = 0;
  while (l1 != null || l2 != null) {
    // Store l1 and l2 vals in temp vars
    let l1_val: number = l1 != null ? l1.value : 0;
    let l2_val: number = l1 != null ? l2.value : 0;

    /**
     * Calculate for the sum and split the two digits.
     */
    let current_sum: number = l1_val + l2_val + carry;
    carry = Math.floor(current_sum / 10);
    let last_digit: number = Math.floor(current_sum % 10);

    /** create a new temp node */
    let new_node = new ListNode(last_digit);
    l3.next = new_node;

    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;

    l3 = l3.next;
  }
  if (carry > 0) {
    let new_node = new ListNode(1);
    l3.next = new_node;
    l3 = l3.next;
  }
  return temp_node.next;
};

let node1: ListNode | null = new ListNode(2);
let node2: ListNode | null = new ListNode(4);
let node3: ListNode | null = new ListNode(5);
node1.next = node2;
node2.next = node3;

let node4: ListNode | null = new ListNode(5);
let node5: ListNode | null = new ListNode(6);
let node6: ListNode | null = new ListNode(4);
node4.next = node5;
node5.next = node6;

console.log(addTwoNumbers(node1, node4));
