const lunch=[
  "국밥",
  "콩나물무침",
  "샐러드랑 닭가슴살",
  "맥주",
  "파스타",
  "짬뽕",
  "컵밥",
  "한솥도시락",
  "생라면",
  "불고기",
  "시리얼"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

console.log(lunch[getRandomInt(0,lunch.length)])