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
    newElement.setAttribute('href', element.props.href);
    newElement.setAttribute('target', element.props.target);
    domElement.appendChild(newElement);
}
renderElement(domElement, element);