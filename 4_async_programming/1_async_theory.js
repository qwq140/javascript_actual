/**
 * Async theory
 */
// function longWork(){
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 
//      * 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 변환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSenconds = milliseconds + 2*1000;

//     while(new Date().getTime() < afterTwoSenconds){

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');

function longWork(){
    setTimeout(()=>{
        console.log('완료');
    },2000);
}

console.log('Hello');
longWork();
console.log('World');