/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let count = 1;
    let arr = [];


    while (true){
        if (count == 1){
            arr.push(0);
            count++;
            yield arr[0];
        } else if (count == 2){
            arr.push(1);
            count++;
            yield arr[1];
        } else {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            yield arr[arr.length - 1];
        }
    }
    
};




const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
console.log(gen.next().value); // 13
console.log(gen.next().value); // 21
console.log(gen.next().value); // 34
 