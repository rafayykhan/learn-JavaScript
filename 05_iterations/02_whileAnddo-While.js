//   While and do-while loop  //
let index =0;
while(index<=10){
    if (index == 10)
    {
        console.log("exit")
        break
    }
    console.log(`Value of index id ${index}`);
    index+=2;  
}
// do while -> must run one time

let score = 1;
do {
    console.log(`Score ${score}`);

    score++
} while (score<=10);

let myArr = ["a", "b", "c", "d"]
let arr = 0
while (arr <= myArr.length) {
    console.log(myArr)
    arr += 1
}