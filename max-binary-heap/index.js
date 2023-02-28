





class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp(value);
    }

    bubbleUp(value) {
        let idx = this.values.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (value <= parent) break;
            this.values[parentIdx] = value;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}