





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


    extractMax() {
        if (!this.values.length) return;

        this.swap(0, this.values.length - 1);
        const oldNode = this.values.pop();

        //trikle down
        let parent = 0, childLeft = 1, childRight = 2;
        //Math.max returns NaN is one of the arguments is undefined
        let max = Math.max(this.values[childLeft], this.values[childRight] || -Infinity);

        while (this.values[parent] < max) {

            let child = this.values[childLeft] === max ? childLeft : childRight;
            this.swap(parent, child);
            parent = child;

            childLeft = parent * 2 + 1;
            childRight = parent * 2 + 2;
            max = Math.max(this.values[childLeft], this.values[childRight] || -Infinity);
        }
        return oldNode;
    }
    
    swap(inx1, inx2) {
        [this.values[inx1], this.values[inx2]] = [this.values[inx2], this.values[inx1]];
    }



}