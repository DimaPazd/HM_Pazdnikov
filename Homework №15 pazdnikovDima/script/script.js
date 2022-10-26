let array = [2,5,69,60,26,84,74,25,2,39,34,51,42,38]

function min(arr){
    let b = 100
    for(let i = 0; i < arr.length; i++){
        if(b > arr[i]){
            b = arr[i]
        }
    }
    console.log(b)
}

min(array)

function max(arr){
    let c = 0
    for(let i = 0; i < arr.length; i++){
        if(c < arr[i]){
            c = arr[i]
        }
    }
    console.log(c)
}

max(array)
