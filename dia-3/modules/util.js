const content = document.getElementById('content')

export function addContent(text){
    content.textContent = ''
    content.innerHTML = text
}