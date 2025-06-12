const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("sahil")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)