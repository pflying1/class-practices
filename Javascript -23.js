class CorePokemon {
  constructor(name, health, attack, defense){
    this.name = name
    this.health = health;
    this.attack = attack
    this.defense = defense
  }
}

const testPokemon = new CorePokemon("공욱재", 1000, 20, 1000)
console.log(testPokemon)
//CorePokemon { name: "공욱재", health: 1000, attack: 20, defense: 1000 }

class WrapPokemon extends CorePokemon {
  // * 코어 역할의 클래스부터 'extends' 확장 하였다. 라는 뜻으로 class선언
  constructor(name, health, attack, defense, type) {
    super(name, health, attack, defense)
    //* super()라는 특별한 상속 메서드를 사용하면, 
    //* 부모 클래스의 생성자를 호출할 수 있다.
    this.type = type
    //* 위 예시 type key는 해당 클래스인 WrapPokemon에서만 사용할 수 있는 key이다.
    //* 즉, CorePokemon 클래스에서는 사용할 수 없다.
  }
}

const pikapika = new WrapPokemon ("피카츄", 100, 50, 30, "전기")
//* CorePokemon에서는 없는 type에 해당하는 "전기"라는 값을 인자로 넣어주었다.
console.log(pikapika)
// WrapPokemon { name:"피카츄", health: 100, attack: 50, defense: 30, type:"전기" }