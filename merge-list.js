function createNode(data) {
  return { data: data, next: null };
}

function mergeLists(head1, head2) {
  let headA = head1; //save reference to pointer as we move through first list
  let headB = head2; //save reference to pointer as we move through second list
  let newNode = null;

  while (headA !== null || headB !== null) {
    if (headA === null && headB !== null) {
      if (newNode !== null) {
        newNode.next = createNode(headB.data);
        newNode = newNode.next;
        newNode.next = headB.next;
      } else {
        newNode = createNode(headB.data);
        newNode.next = headB.next;
      }
    } else if (headA !== null && headB === null) {
      if (newNode !== null) {
        newNode.next = createNode(headA.data);
        newNode = newNode.next;
        newNode.next = headA.next;
      } else {
        newNode = createNode(headA.data);
        newNode.next = headA.next;
      }
    } else if (headA.data <= headB.data) {
      if (newNode === null) {
        newNode = createNode(headA.data);
        headA = headA.next;
      } else {
        newNode.next = createNode(headA);
        newNode = newNode.next;
        headA = headA.next;
      }
    } else if (head1.data > head2.data) {
      if (newNode === null) {
        newNode = createNode(headB.data);
        headB = headB.next;
      } else {
        newNode.next = createNode(headB);
        newNode = newNode.next;
        headB = headB.next;
      }
    }
  }
  return newNode;
}
