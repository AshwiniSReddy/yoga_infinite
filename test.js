// class Car{
//     constructor(model,type){
//         this.model=model;
//         this.type=type;
//     }


//     #checkengine(){
//         console.log('check engine...')
//     }

//     startengine(){
//         this.#checkengine();
//         console.log('start engine')
//     }


// }

// const myCar=new Car('toyoto','punch')
// console.log(myCar.startengine())




// function createCounter(){
//     let count=0;
//     return {
//         increment:function(){
//             count++;
//             console.log(count)
//         },
//         decrement:function(){
//             count++;
//             console.log(count)
//         }
//     }
// }


// const counter=createCounter();
// counter.increment();
// counter.decrement();



// class Animal{
//     constructor(name){
//         this.name=name;

//     }

//     speak(){
//         console.log(`${this.name} is speaking`)
//     }


// }




// function factorial(n){
//     if(n<0){
//         return 'factorial for negative number is not defined'
//     }

//     if(n==0||n==1){
//         return 1;
//     }

//     let result=1

//     for(let i=2;i<=n;i++){
//         result=result*i

//     }
//     return result;

// }

// const output=factorial(5)

// console.log(output)



// function greetname(name="ashwini"){
//     console.log(name)
// }

// greetname()

// greetname("harsha")





// const number=[1,2,3,4,5]

// const double=number.map((num)=>num*2)
// console.log(double)

// const fil=number.filter((num)=>num%2==0)

// console.log(fil)

// const redu=number.reduce((result,currentvalue)=>result+currentvalue,0)
// console.log(redu)


// let arr=[1,2,3,4,5]


// let result=[]

// for(let i=arr.length-1;i>=0;i--){
//     result.push(arr[i])
// }

// console.log(result)



let count=0
function pushZerosToEnd(array){
    for(let i=0;i<array.length;i++){
        if(array[i]!=0){
            array[count]=array[i]
            count++
        }
    }

    while(count<array.length){
        array[count]=0
        count++
    }
}


const array = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
pushZerosToEnd(array);

console.log(array)