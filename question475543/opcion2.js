function option2(lengthMatrix) {
    console.log('opcion2... lengthMatrix: ', lengthMatrix);

    let matrix = [];
    let numArray = 1;
    let upToDown = false;
    let leftToRight = true;
    let rightToLeft = false;

    initializeMatrix(matrix, lengthMatrix);

    for (let i = 0; i < (lengthMatrix * 2) - 1; i++) {
        if (leftToRight) {
            upToDown = true;
            leftToRight = false;
            numArray = fillArrayFromLeftToRight(matrix, numArray);
        } else if (rightToLeft) {
            rightToLeft = false;
            numArray = fillArrayFromRightToLefth(matrix, numArray);
        } else if (upToDown) {
            rightToLeft = true;
            upToDown = false;
            numArray = fillArrayFromUpToDown(matrix, numArray);
        } else {
            leftToRight = true;
            numArray = fillArrayFromDownToUp(matrix, numArray);
        }
    }

    console.log('Matrix Result Option 2', matrix);
}

function initializeMatrix(matrix, lengthMatrix) {

    let strArray;
    let array = [];

    for (let i = 0; i < lengthMatrix; i++) {
        if (array.length === 0) {
            for(let j = 0; j < lengthMatrix; j++) {
                array.push(-1);
            }

            strArray = JSON.stringify(array);
        }

        matrix.push(JSON.parse(strArray));
    }
}

function fillArrayFromLeftToRight(matrix, numArray) {

    let idx;
    let isNewArray = false;

    const arrayFound = matrix.find((arr, position) => {
        idx = position;
        return arr.includes(-1);
    });

    for(let j = 0; j < arrayFound.length; j++) {
        if (arrayFound[j] === -1) {
            arrayFound[j] = numArray++;
            isNewArray = true;
        }

        if (j === arrayFound.length - 1 && isNewArray) {
            matrix[idx] = arrayFound;
        }
    }

    return numArray;
}

function fillArrayFromRightToLefth(matrix, numArray) {

    let idx;
    let isNewArray = false;
    let lengthArray = matrix.lengh;
    matrix.reverse();

    const arrayFound = matrix.find((arr, position) => {
        idx = (lengthArray - 1) - position;
        return arr.includes(-1);
    });

    for(let j = arrayFound.length - 1; j >= 0; j--) {
        if (arrayFound[j] === -1) {
            arrayFound[j] = numArray++;
            isNewArray = true;
        }

        if (j === arrayFound.length - 1 && isNewArray) {
            matrix[idx] = arrayFound;
        }
    }

    matrix.reverse();

    return numArray;
}

function fillArrayFromUpToDown(matrix, numArray) {

    let idx;
    for(let i = 0; i < matrix.length; i++) {

        if (idx === undefined) {
            for(let j = matrix[i].length - 1; j >= 0; j--) {
                if (matrix[i][j] === -1) {
                    idx = j;
                    break;
                }
            }
        }

        if (matrix[i][idx] === -1) {
            matrix[i][idx] = numArray++;
        }
    }

    return numArray;
}

function fillArrayFromDownToUp(matrix, numArray) {

    let idx;
    for(let i = matrix.length - 1; i >= 0; i--) {

        if (idx === undefined) {
            for(let j = 0; j < matrix[i].length - 1; j++) {
                if (matrix[i][j] === -1) {
                    idx = j;
                    break;
                }
            }
        }

        if (matrix[i][idx] === -1) {
            matrix[i][idx] = numArray++;
        }
    }

    return numArray;
}