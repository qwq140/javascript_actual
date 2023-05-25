/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){
        return new IdolModel(name, year);
    }
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    };
}

const yuJin = new IdolModel('안유진', 2003); // new 키워드를 사용하면 해당 function을 반환한다.
console.log(yuJin);
// console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// console.log(global.name); // this 키워드가 global로 붙는다.

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
}

// Arrow function은 new 키워드를 사용할 수 없다. (일반 function만 new 키워드 사용가능)
const yuJin3 = new IdolModelArrow('안유진', 2003);