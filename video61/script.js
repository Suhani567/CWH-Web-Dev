console.log("harry is a hacker")
console.log("rohan is a hecker")


setTimeout(()=>{
    console.log("i am a inside settimeout")
},0);
setTimeout(()=>{
    console.log("i am a inside settimeout 2")
},0);

console.log("the end came before timeout")

const fn=()=>{
    console.log("nothing")
}
const callback=(arg,fn)=>{
    console.log(arg)
}
const loadscript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("harry",fn);
    document.head.append(sc)
      
    }
    
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)