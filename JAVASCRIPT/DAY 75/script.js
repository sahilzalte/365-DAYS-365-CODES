console.log("Hello,")
console.log("World !")

setTimeout(() => {
    console.log("I am inside Set-timeout 1");

}, 1000)

setTimeout(() => {
    console.log("I am inside Set-timeout 2");

}, 1000)

console.log("This is the end of the script");


const fn  = (params) => {
  console.log("Nothing");
  
}

const callback = (arg,fn) => {
    console.log(arg)
    fn()    

}



const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = (params) => callback("Sahil",fn)
    document.head.append(sc)
}



loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)