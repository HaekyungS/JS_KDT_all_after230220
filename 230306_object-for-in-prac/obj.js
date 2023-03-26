//본격 오직 객체와 배열과 for - in을 연습하기 위한 것임

const Name=["셔누","민혁","기현","형원","주헌","아이엠"]
const Age = ["92년생","93년생","93년생","94년생","94년생","96년생"]
const hometwon=["서울","의정부","청주","광주","서울","수원"]
const Position=["메인댄서","서브보컬","메인보컬","리드댄서","메인래퍼","리드래퍼"]

const MonstaX={}

for(let i=0; i<Name.length;i++){
  MonstaX[Name[i]]=[Age[i],hometwon[i],Position[i]]
}
console.log(MonstaX.length); //결과값 서울


// 객체는 구조가 변수이름={key:value}
// 객체안의 key 안의 value값을 구할 때 구조가 변수이름[key][number] 요렇게.

function CreateDoc(Tag,Parents){
  const element=document.createElement(Tag);
  Parents.appendChild(element)
}

document.body.style.cssText="width:100vw; height:100vh";

for(j=0; j<Name.length;j++){
CreateDoc("div",document.body);
document.body.children[j+1].innerHTML="우리 사랑스런 "+Name[j]+"는 "+MonstaX[Name[j]]+"입니다."
}
