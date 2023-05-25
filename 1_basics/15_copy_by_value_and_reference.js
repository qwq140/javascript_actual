/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다';
console.log('------------------------');
console.log(original);
console.log(clone);

let originalObj ={
    name : '안유진',
    group : '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('------------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name : '최지호',
    group : '코드팩토리',
};

cloneObj = {
    name : '최지호',
    group : '코드팩토리',
};

console.log(originalObj === cloneObj);

/**
 * copy by value
 * 
 * original 변수에 안녕하세요를 저장
 * clone 변수에 복사를 하면 안녕하세요를 새로운 주소에 복사한다.
 * 
 * copy by reference
 * 
 * 객체가 메모리에 할당이 된다.
 * originalObj는 다른 메모리 주소를 가지고있고 그 메모리 주소에는 객체의 메모리 주소를 가지고 있다.
 * cloneObj는 새로운 주소에서 객체의 메모리 주소를 복사한다.
 */

const yuJin1 = {
    name : '안유진',
    group : '아이브',
}

const yuJin2 = yuJin1;
const yuJin3 = {
    name : '안유진',
    group : '아이브',
}

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator (copy by value)
 */
const yuJin4 = {
    ...yuJin3,
};

console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year : 2003,
    ...yuJin3,
};

console.log(yuJin5);

// 순서가 중요하다
const yuJin6 = {
    name : '코드팩토리',
    ...yuJin3,
};

console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name : '코드팩토리',
};

console.log(yuJin7);

const numbersArray = [1,3,5];
const numbersArray2 = [10,...numbersArray];

console.log(numbersArray2);