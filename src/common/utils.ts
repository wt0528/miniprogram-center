export async function postBody(req){
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', function(c){
          body += c
        })
        req.on('end', function(){
          let paramArr = body.split("&")
          let paramObj = {}
          paramArr.forEach(item => {
              let keyTmp = item.split('=')
              paramObj[keyTmp[0]] = keyTmp[1]
          })
          resolve(paramObj);
        })
    })
}