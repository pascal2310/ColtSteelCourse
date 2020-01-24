function kebabToSnake(str) {
    return str.replace('-', '_')
}

function printReverse(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        console.log(element)
    }
}

function isUniform(array) {
    let index = 0;
    let isUni = true;
    while (index !== array.length - 1) {
        if (array[index] !== array[index + 1]) {
            isUni = false
        }
        index++;
    }
    return isUni
}

function sumArray(array){
    let sum = 0;
    array.forEach(item => sum += item)
}

var movieDB = [
    {
        title: 'Finding Nemo',
        rating: 5,
        haveSeen: true
    },
    {
        title: 'James bond',
        rating: 4,
        haveSeen: false
    },
    {
        title: 'Frozen',
        rating: 2,
        haveSeen: true
    },
]

function iterateMovieDB (){
    movieDB.forEach(element => {
        if(element.haveSeen){
            console.log(`you have seen ${element.title} - ${element.rating} stars`)
        }else{
            console.log(`you have not seen ${element.title} - ${element.rating} stars`)
        }
    })
}