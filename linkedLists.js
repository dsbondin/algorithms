function Node = (data) => {
  this.data = data;
  this.next = null;
}

function insertNodeAtPosition(head, data, position) {
    let targetNode = head;
    for (let i = 0; i < position - 1; i++) {
        targetNode = targetNode.next;
    }
    let nextNode = targetNode.next;
    targetNode.next = new Node(data);
    targetNode.next.next = nextNode;
    return head;
}

function deleteNode(head, position) {
    if (position === 0) return head.next;
    let previousNode = head;
    for (let i = 0; i < position - 1; i++) {
        previousNode = previousNode.next;
    }
    previousNode.next = previousNode.next.next;
    return head;
}
