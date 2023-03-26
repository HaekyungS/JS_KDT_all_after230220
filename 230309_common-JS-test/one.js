function elementMaker(tagName,props, ...children){
  const element = document.createElement(tagName);

  Object.keys(props).forEach(function(key){
    element[key] = props[key];
  });

  if(children.length > 0 ) {

    children.forEach(function(child){

      if(typeof(child) === "string"){
        child = document.createTextNode(child);
      }

      element.appendChild(child);
    }
    );
  }

  return element;
}