class LinkedNode<T> {
  private _elem: T;
  public next: LinkedNode<T> | null;

  constructor(elem: T) {
    this._elem = elem;
    this.next = null;
  }

  get elem(): T {
    return this._elem;
  }
}

class LinkedList<T> {
  private head: LinkedNode<T> | null = null;
  private len: number = 0;

  constructor(headElement?: LinkedNode<T>) {
    this.head = headElement || null;
  }

  public append(elem: T) {
    let node = new LinkedNode(elem);
    let current: LinkedNode<T>;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.len++;
  }

  public removeAt(pos: number): LinkedNode<T> | null {
    if (pos > -1 && pos < this.len && this.head) {
      let current = this.head;
      let prev: LinkedNode<T> = current;
      let idx = 0;

      if (pos === 0) this.head = current.next;
      else {
        while (idx++ < pos && current.next) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.len--;
      return current;
    } else {
      return null;
    }
  }

  public insert(elem: T, pos: number): boolean {
    if (pos > -1 && pos < this.len && this.head) {
      let current = this.head;
      let prev: LinkedNode<T> = current;
      let idx = 0;
      let node = new LinkedNode(elem);

      if (pos === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (idx++ < pos && current.next) {
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
      this.len++;
      return true;
    } else {
      return false;
    }
  }

  public toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.elem;
      current = current.next;
    }
    return str;
  }
}
