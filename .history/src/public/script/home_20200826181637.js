function showBaiDuCreate(that){
    if(that.checked){
        document.getElementById("bdNum").style.display = ''
        document.getElementById("bdNumInput").required = true
    } else{
        document.getElementById("bdNum").style.display = 'none'
        document.getElementById("bdNumInput").required = false
    }
}