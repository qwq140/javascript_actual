/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);


/**
 * Hoistiong은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/**
 * Cannot access 'yuJin' before initialization -- let yuJin 주석 처리 전 에러코드
 *      let은 초기화되기 전에 접근할 수 없다.
 *      let이 호이스팅 현상이 없다는 것은 아니다. 호이스팅 현상이 일어나지 않았다면 아래와 같이 정의되지 않았다는 에러가 발생했을 것이다.
 * 
 * yuJin is not defined -- let yuJin 주석 처리했을 때 에러코드
 */
console.log(yuJin);
let yuJin = '안유진';