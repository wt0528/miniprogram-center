function jump (page) {
    event.preventDefault();
    var nodes = event.target.parentNode.parentNode.children;
    for (var i = 0; i<nodes.length; i++) {
        nodes[i].classList.value = ""
    }
    event.target.parentNode.classList.value = 'on'
}