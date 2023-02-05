// array
// const arr: number[] = [1, 2, 3, 4, 5];
const arr: number[] = [10, 2, 11, 99, 50];

// find min in array
const findMin = (arr: number[]): number => {
    let min: number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = min > arr[i] ? arr[i] : min;
    }
    return min;
};
// find max in array
const findMax = (arr: number[]): number => {
    let max: number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max = max < arr[i] ? arr[i] : max;
    }
    return max;
};
// find even elements in array
const findEven = (arr: number[]): number[] => {
    let evenArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) evenArr.push(arr[i]);
    }
    return evenArr;
};
// find odd elements in array
const findOdd = (arr: number[]): number[] => {
    let oddArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) oddArr.push(arr[i]);
    }
    return oddArr;
};
// count total of array
const findSum = (arr: number[]): number => {
    const total: number = arr.reduce((total, currentValue) => {
        return total + currentValue;
    }, 0);
    return total;
};

const miniMaxSum = (arr: number[]): void => {
    if (arr.length !== 5) {
        console.log("Arrray is not suitable!");
        return;
    } else {
        let miniSum: number = 0;
        let maxSum: number = 0;

        const min = findMin(arr);
        const max = findMax(arr);
        for (let i = 0; i < arr.length; i++) {
            miniSum += arr[i] !== max ? arr[i] : 0;
            maxSum += arr[i] !== min ? arr[i] : 0;
        }

        // Results
        console.log("Output\n" + miniSum + " " + maxSum + "\n");
        console.log("Total of array\n", findSum(arr));
        console.log("Min in array\n", findMin(arr));
        console.log("Max in array\n", findMax(arr));
        console.log("Even elements in array\n", findEven(arr));
        console.log("Odd elements in array\n", findOdd(arr));
    }
};

miniMaxSum(arr);
