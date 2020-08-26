function showSecondPlatform(that, platform){
    let ajk58Dom = document.getElementById("ajk58"),
        zfBussinessDom = document.getElementById("zfBussiness");
    switch(platform){
        case 'wxPlugin':  document.getElementById("ajk58").style.display = '';
                          document.getElementById("zfBussiness").style.display = 'none';
                          console.log(document.getElementById("zfBussiness").children);
                          break;
        case 'baidu':     document.getElementById("ajk58").style.display = 'none';
                          document.getElementById("zfBussiness").style.display = 'none';
                          break;
        case 'fangchan':  document.getElementById("ajk58").style.display = 'none';
                          document.getElementById("zfBussiness").style.display = '';
                          break;
        case 'alipay':  document.getElementById("ajk58").style.display = 'none';
                          document.getElementById("zfBussiness").style.display = '';
                          break;
    }
}