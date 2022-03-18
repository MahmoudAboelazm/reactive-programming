export class Observable {
  private observers: Function[] = [];
  private closed: boolean = false;

  next(value: any) {
    if (this.closed) return;
    this.observers.map((observer) => observer(value));
  }
  subscribe(fn: (value: any) => any) {
    this.observers.push(fn);
    this.closed = false;
  }
  unsubscribe() {
    this.observers = [];
    this.closed = true;
  }
}
