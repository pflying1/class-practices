// ? 정적 멤버(static member) 방식으로 class, 활용
class CorePokemon{
  constructor() {
    this.name = "공욱재"
    this.health = 1000;
    this.attack = 20
    this.defense = 500
  }
}
const testPokemon = new CorePokemon();
// ? 결과적으로 객체가 '인스턴스(intance)'로 생성된다.
console.log(testPokemon);
// ? typeof와 같은 데이터 타입 검사기가 있는 것처럼 "해당 인스턴스인지" 검사하는 메서드도 마련되어있다.
console.log(testPokemon instanceof CorePokemon); //true
//* instanceof로 '어떤 생성자 함수'로 부터 '생성된 인스턴스'인지 boolean 타입 리턴을 통해 확인 할 수 있다.

//? 자바스크립트(javascript)에서는 아래의 리터럴 방식을 허용하지만,
//? 객체지향 프로그래밍에서는 허용하지 않는다.
let literalCorePokemon = {
  name: "공욱재",
  health: 1000,
  attack:20,
  defense : 500
}
// ? 객체는 '변수'에 참조되었기 때문에, 별도의 인스턴스가 생성되지 않는다.
console.log(literalCorePokemon)
console.log(literalCorePokemon instanceof CorePokemon); //false

//* 결과적으로 생성자 함수로부터 생성한 객체인 testPokemon 은 "어디로부터 생성되었다는 정보"를 가지고 있다.
//* 반대로 literalCorePokemon 은 "어디로부터 생성되었다는 정보"를 가지고 있지 않다.
//* 객체의 구성과 구성데 할당된 값은 같지만, 컴퓨터 입장에서는 판이하게 다른 판정을 내린다. 
