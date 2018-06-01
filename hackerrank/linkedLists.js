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

function reverse(head) {
    let current = head;
    let next = null;
    let prev = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

function compareLists(headA, headB) {
    let nodeA = headA, nodeB = headB;
    while (nodeA || nodeB) {
        if (!nodeA || !nodeB) return false;
        if (nodeA.data !== nodeB.data) return false;
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    return true;
}
