const domElement = document.getElementById("root");
const element = {
    type:"a",
    content:"Click here to go to Google Homepage",
    props:{
        href: "https://www.google.com",
        target:"_blank"
    }
}
function renderElement(domElement, element){
    const newElement = document.createElement(element.type);
    newElement.innerHTML=element.content;
    for(const prop in element.props){
        newElement.setAttribute(prop, element.props[prop]);
    }
    domElement.appendChild(newElement);
}
renderElement(domElement, element);