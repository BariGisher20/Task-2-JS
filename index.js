

function simple(n){
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (i % j == 0)
            return i;
        }
        
    }
}

console.log(simple(process.argv[2]));
