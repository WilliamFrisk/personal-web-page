class P5Mock {
  private sketch: any;
  private container: any;
  constructor(sketch: any, container: HTMLElement) {
    // Mock the necessary behavior, you can extend this as needed
    this.sketch = sketch;
    this.container = container;
  }

  remove() {}

  // Mock other methods and properties of the p5 instance
}

export default P5Mock;
