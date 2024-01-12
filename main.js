

function compileBits(num){
    let bits = [256, 128, 64, 32, 16, 8, 4, 2, 1];
    let compiledBits = [];
    for(let i = 0; i < bits.length; i++){
        console.log(i);
     if(num >= bits[i] && num > 0){
        num -= bits[i];
        compiledBits.push(1);
     }else{
        compiledBits.push(0);
     }
    }
    console.log(compiledBits);
}

compileBits(301)