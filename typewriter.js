const sentence = "hello there from lighthouse labs";
let delayTime = 500
for (const char of sentence) {
  setTimeout(()=>{
    process.stdout.write(char)
  }, delayTime)
delayTime += 100
}

setTimeout(()=>{
  process.stdout.write('\n')
},delayTime)
