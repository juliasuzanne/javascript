function createNode(data) {
  return { data: data, next: null };
}

function mergeLists(head1, head2) {
  let headA = head1; //save reference to pointer as we move through first list
  let headB = head2; //save reference to pointer as we move through second list
  let newNode = null;
  let newHead = null;
  let newTail = newHead;

  //has to run at least once, to have two lists to compare. the new node will be assigned a created node with the smaller or same data value.
  while (headA !== null && headB !== null) {
    if (headA.data <= headB.data) {
      newNode = createNode(headA.data);
      headA = headA.next;
    } else if (headA.data > headB.data) {
      newNode = createNode(headB.data);
      headB = headB.next;
    }
    //if head tracker is not set yet, set to smallest found in first block
    if (newHead === null) {
      newHead = newNode;
      newTail = newHead;
    }
    //else set tail tracker to have a next value of the new lowest value and then reassign tail tracker to new value
    else {
      newTail.next = newNode;
      newTail = newNode;
    }
  }

  //if out of while loop, point the next value of the tail to the current first pointer of the non null list
  if (headA === null) {
    newTail.next = headB;
  } else if (headB === null) {
    newTail.next = headA;
  }

  //return the head of the new list
  return newHead;
}
