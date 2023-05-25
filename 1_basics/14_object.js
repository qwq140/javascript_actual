/**
 * Object 객체
 */

// key : value pair
// this : 현재 객체를 가르킴
let yuJin = {
    name : '안유진',
    group : '아이브',
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2[groupKey] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name : '장원영',
    group : '아이브',
}

console.log(wonYoung);
// wonYoung = {};
wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 key 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 value 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

// 변수의 이름이 key로 값이 value로
const yuJin3 = {
    name,
};

console.log(yuJin3);