function showSecondPlatform(that, platform){
    let ajk58Dom = document.getElementById("ajk58"),
        zfBussinessDom = document.getElementById("zfBussiness");
    switch(platform){
        case 'wxPlugin':  ajk58Dom.style.display = '';
                          zfBussinessDom.style.display = 'none';
                          zfBussinessDom.children[0].checked = false;
                          zfBussinessDom.children[1].checked = false;
                          ajk58Dom.children[0].checked = true;
                          break;
        case 'baidu':     ajk58Dom.style.display = 'none';
                          zfBussinessDom.style.display = 'none';
                          zfBussinessDom.children[0].checked = false;
                          zfBussinessDom.children[1].checked = false;
                          ajk58Dom.children[0].checked = false;
                          ajk58Dom.children[1].checked = false;
                          break;
        case 'fangchan':  ajk58Dom.style.display = 'none';
                          zfBussinessDom.style.display = '';
                          ajk58Dom.children[0].checked = false;
                          ajk58Dom.children[1].checked = false;
                          zfBussinessDom.children[0].checked = true;
                          break;
        case 'alipay':    ajk58Dom.style.display = 'none';
                          zfBussinessDom.style.display = '';
                          ajk58Dom.children[0].checked = false;
                          ajk58Dom.children[1].checked = false;
                          zfBussinessDom.children[0].checked = true;
                          break;
    }
}