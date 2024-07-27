// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getNewNode(value) {
  return { data: value, next: null };
}

function mergeLists(head1, head2, mergeNode = null) {
  let firstPointer = head1;
  let secondPointer = head2;
  let newhead = null;
  let newTail = newhead;
  let newNode = mergeNode;

  while (firstPointer != null && secondPointer != null) {
    if (firstPointer.data == secondPointer.data) {
      newNode = getNewNode(firstPointer.data);
      firstPointer = firstPointer.next;
    } else if (firstPointer.data < secondPointer.data) {
      newNode = getNewNode(firstPointer.data);
      firstPointer = firstPointer.next;
    } else if (firstPointer.data > secondPointer.data) {
      newNode = getNewNode(secondPointer.data);
      secondPointer = secondPointer.next;
    }
    if (newhead == null) {
      newhead = newNode;
      newTail = newhead;
    } else {
      newTail.next = newNode;
      newTail = newNode;
    }
  }

  if (firstPointer == null) {
    newTail.next = secondPointer;
  } else if (secondPointer == null) {
    newTail.next = firstPointer;
  }
  return newhead;
}
