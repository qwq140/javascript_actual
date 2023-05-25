/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                     설정할때 호출되는 함수로 구성된 프로퍼티
 *                     예를들면 getter와 setter
 */
const yuJin = {
    name : '안유진',
    year : 2003,
}

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 등을 사용 할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

console.log(Object.getOwnPropertyDescriptors(yuJin));

// const yuJin2 = {
//     name : '안유진',
//     year : 2003,

//     get age(){
//         return new Date().getFullYear() - this.year + 1;
//     },

//     set age(age){
//         this.year = new Date().getFullYear() - age + 1;
//     },
// }

// console.log(yuJin2);
// console.log(yuJin2.age);

// yuJin2.age = 32;
// console.log(yuJin2.age);
// console.log(yuJin2.year);

// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// // writable, enumerable, configurable 입력하지 않으면 false
// //
// Object.defineProperty(yuJin2, 'height', {
//     value : 172,
//     writable : true, 
//     enumerable : true,
//     configurable : true,
// });
// console.log(yuJin2);
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// yuJin2.height = 180;
// console.log(yuJin2);

// // 기존 값의 프로퍼티를 변경할 때는 변경사항만 적용
// Object.defineProperty(yuJin2, 'height', {
//     writable:false,
// });
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// console.log('--------------------------');
// yuJin2.height = 172;
// console.log(yuJin2);

// /**
//  * Enumerable
//  */
// console.log(Object.keys(yuJin2));
// for(let key in yuJin2){
//     console.log(key);
// }

// Object.defineProperty(yuJin2, 'name', {
//     enumerable : false,
// });
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

// console.log('-------------------------');
// console.log(Object.keys(yuJin2));
// for(let key in yuJin2){
//     console.log(key);
// }
// console.log(yuJin2);
// console.log(yuJin2.name);

// /**
//  * Configurable
//  * 
//  * Configurable이 false일 때 예외로 변경가능한 사항
//  * writable이 true일 때 value 변경가능
//  * wirtable true에서 false로 변경하는 것은 가능
//  */
// Object.defineProperty(yuJin2, 'height', {
//     writable : true,
//     configurable : false,
// });
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// // Object.defineProperty(yuJin2, 'height', {
// //     enumerable : false,
// // });

// Object.defineProperty(yuJin2, 'height', {
//     value : 172,
// });

// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     writable : false,
// });

// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     writable : true,
// });
