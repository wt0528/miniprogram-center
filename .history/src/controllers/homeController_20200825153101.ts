import HomeModel from '../models/homeModel';
import {postBody} from '../common/utils'

export default class HomeController{
  static getHome(req, res, next){
    console.log("get HomePage")
    res.render('home', {layout: "navLayout"});
  }

  static async postHome(req, res, next){
    let body:any = await postBody(req)
    let newRecomend = new HomeModel({
      demandName: body.demandName,
      gitNum: body.demandGitNum,
      haveBaidu: body.haveBaidu && body.haveBaidu == 'baidu'? true:false,
      baiduGitNum: body.bdGitNum?body.bdGitNum : null,
      hasMerge: false
    })
    newRecomend.save((err) =>{
      console.log("post newRecomend")
      if(err){
        res.redirect('/submitResult?result=创建需求失败');
      } else{
        res.redirect('/submitResult?result=创建需求成功');
      }
    })
  }
}
