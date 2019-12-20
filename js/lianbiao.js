// 单向链表
class ListNode {
  constructor(key) {
    this.next = null;
    this.key = key;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  static createNode(key) {
    return new ListNode(key);
  }
  insert(node) {
    if (this.head !== null) {
      node.next = this.head;
    } else {
      node.next = null;
    }
    this.head = node;
    this.length++
  }
  find(key) {
    let node = this.head;
    while (node && node.next.key !== key) {
      node = node.next;
    }
    return node;
  }
  delete(node) {
    if (this.length === 0) {
      throw 'node is not defined';
    }
    if (node == this.head) {
      this.head = node.next;
      this.length--;
      return
    }
    let prevNode = this.head;
    while (prevNode.next !== node) {
      prevNode = prevNode.next;
    }
    if (node.next == null) {
      prevNode.next = null;
      this.length--;
      return
    }
    prevNode.next = node.next;
    this.length--;
  }
  update(node, key) {
    let n = this.find(node);;
    n.key = key;
  }
  reverse() {
  }
}
// 双向链表