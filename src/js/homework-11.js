import { Cafe } from "./homework-11/Cafe.js";
import { Lemonade } from "./homework-11/Lemonade.js";
import { Coffee } from "./homework-11/Coffee.js";
import { Tea } from "./homework-11/Tea.js";

const espresso = new Coffee(
  'Эспрессо',
  '60 мл',
  150,
  'горячий',
  'арабика',
  'без молока'
);

const americano = new Coffee(
  'Американо',
  '200 мл',
  180,
  'горячий',
  'арабика',
  'без молока'
);

const latte = new Coffee(
  'Латте',
  '300 мл',
  230,
  'горячий',
  'арабика',
  'коровье молоко'
);

const cappuccino = new Coffee(
  'Капучино',
  '250 мл',
  220,
  'горячий',
  'арабика',
  'коровье молоко'
);

const blackTea = new Tea(
  'Чёрный чай',
  '300 мл',
  120,
  'горячий',
  'чёрный'
);

const greenTea = new Tea(
  'Зелёный чай',
  '300 мл',
  130,
  'горячий',
  'зелёный'
);

const herbalTea = new Tea(
  'Травяной чай',
  '300 мл',
  140,
  'горячий',
  'травяной'
);

const icedTea = new Tea(
  'Холодный чай',
  '400 мл',
  150,
  'холодный',
  'чёрный'
);

const classicLemonade = new Lemonade(
  'Классический лимонад',
  '400 мл',
  150,
  'холодный',
  'лимон'
);

const orangeLemonade = new Lemonade(
  'Апельсиновый лимонад',
  '400 мл',
  170,
  'холодный',
  'апельсин'
);

const mintLemonade = new Lemonade(
  'Мятный лимонад',
  '400 мл',
  180,
  'холодный',
  'мята'
);

const cofeeArr = [espresso, americano, latte, cappuccino];
const teaArr = [blackTea, greenTea, herbalTea, icedTea];
const lemonadeArr = [classicLemonade, orangeLemonade, mintLemonade];

const coffeeHouse = new Cafe("Кофейня", "Grove Street", cofeeArr);
const teaHouse = new Cafe("Чайхана", "China Town", teaArr);
const familyCafe = new Cafe("Torreto's", "Dominicano", lemonadeArr)

console.log(coffeeHouse.getInfo())
console.log(coffeeHouse.getMenu())
console.log(coffeeHouse.makeOrder(espresso))

console.log(teaHouse.getInfo())
console.log(teaHouse.getMenu())
console.log(teaHouse.makeOrder(herbalTea))

console.log(familyCafe.getInfo())
console.log(familyCafe.getMenu())
console.log(familyCafe.makeOrder(orangeLemonade))

S
O
L - 
I
D
