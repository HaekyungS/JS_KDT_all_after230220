//태그를 만들어내는 캡슐을 하나 만들고
const ElementMaker={
  TagName:"",
  AttributeName:"",
  AttributeValue:"",
  Parent:"",
  Maker:function(){
    const element=document.createElement(this.TagName);
    element.setAttribute(this.AttributeName,this.AttributeValue);
    this.Parent.appendChild(element);
  }
}

//내가 좋아하는 것들에 대한 캡슐을 만들고~
