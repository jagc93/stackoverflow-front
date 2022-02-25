function option1(lengthMatrix) {
    console.log('opcion1... lengthMatrix: ', lengthMatrix);

    const matrix = [];
    let numArray;

    for(let i = 0; i < lengthMatrix; i++) {
        numArray = (lengthMatrix * i) + 1;
        if (i % 2 === 0) {
            matrix[i] = fillArrayIncreasing(lengthMatrix, numArray);
        } else {
            matrix[i] = fillArrayDecreasing(lengthMatrix, numArray);
        }
    }

    console.log('Matrix Result Option 1', matrix);
}

function fillArrayIncreasing(lengthArray, numArray) {
    const array = [];
    for(let i = 0; i < lengthArray; i++) {
        array.push(numArray++);
    }

    return array;
}

function fillArrayDecreasing(lengthArray, numArray) {
    const array = [];
    for(let i = lengthArray - 1; i >= 0; i--) {
        array[i] = numArray++;
    }

    return array;
}