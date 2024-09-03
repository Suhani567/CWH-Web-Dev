//  async function getData(){
//     //simulate getting data from a server
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(455)
//         },3500);
//      })
//     }

// settle mean resolve or reject

// resolve mean the promise has settle successfully
// reject mean the promise has not settles succesfully
    async function getData(){
        //simulate getting data from a server
        // let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
       
        let x= await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"post",
            body:JSON.stringify({
                title:'foo',
                body:"bar",
                userId:1,
            }),
            headers:{
                'Content-type': 'application/json; charset=URF-8',

            },
        })
       
        let data=await x.json()
        console.log(x)
        return 344
        }


async function main(){

    console.log("Loading modules")

    console.log("DO somthg eklse baba")

    console.log("Load data")

let data= await getData()
    console.log(data)
    
    console.log("Process Data")
    
    console.log("task 2")
    }
    main()
// data.then((v)=>{

    // console.log(data)
    
    // console.log("Process Data")
    
    // console.log("task 2")
// })
