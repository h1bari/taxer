const createElement = (tag, classes, text, append = null) => {
    const node = document.createElement(tag)
    node.classList.add(classes)
    node.textContent = text
    if (!append) {
        return node
    }else{
        append.append(node)
    }

}

export {createElement}
