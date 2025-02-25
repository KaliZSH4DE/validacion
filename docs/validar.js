
function sanitizarHtml() {
    let input = document.getElementById("inputHtml").value;
    let parser = new DOMParser();
    let doc = parser.parseFromString(input, "text/html");

    
    doc.querySelectorAll("script, style").forEach(el => el.remove());

    doc.querySelectorAll("iframe").forEach(el => el.remove());

    doc.querySelectorAll("object, embed").forEach(el => el.remove());

    doc.querySelectorAll("*").forEach(el => {
        Array.from(el.attributes).forEach(attr => {
            if (attr.name.startsWith("on")) el.removeAttribute(attr.name);
        });
    });
    
    document.getElementById("outputHtml").innerHTML = doc.body.innerHTML;
}