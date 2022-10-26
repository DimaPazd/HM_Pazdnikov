let obj1 = {
    name: 'Dima',
    age: 24,
    hair: 'white',
}

let obj2 = {
    name: 'Dima',
    age: 24,
    hair: 'white',
}

function bestEverCompare(obj1,obj2){
    let a = String(Object.keys(obj1))

    let b = String(Object.values(obj1))

    let c = String(Object.keys(obj2))

    let d = String(Object.values(obj2))

    if(a !== c){

        console.log('Not compare. Something Key not compare!')

    }else{

        if(b !== d){

            console.log('Not compare. Something Value not compare!')

        }else{

            console.log('compare')
        }
    }
}

bestEverCompare(obj1,obj2)

//  сравнение через длину содержания


function compare(obj1,obj2){
    if(Object.keys(obj1).length == Object.keys(obj1).length){
        console.log('compare')
    }else{
        console.log('not compare')
    }
}

compare(obj1,obj2)


// через одну неизвестную нам функцию

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));