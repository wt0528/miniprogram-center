import DemandModel from '../models/demandModel';
import {postBody} from '../common/utils';
import shelljs from 'shelljs';
import process from 'child_process';

export default class HomeController{
  static getHome(req, res, next){
    console.log("get HomePage")
    res.render('home', {layout: "navLayout"});
  }

  static async postHome(req, res, next){
    // let body:any = await postBody(req)
    // let newRecomend = new DemandModel({
    //   demandName: body.demandName,
    //   gitNum: body.demandGitNum,
    //   haveBaidu: body.haveBaidu && body.haveBaidu == 'baidu'? true:false,
    //   baiduGitNum: body.bdGitNum?body.bdGitNum : null,
    //   hasMerge: false,
    //   linkUser: 'wt'
    // })
    // newRecomend.save((err) =>{
    //   console.log("post newRecomend")
    //   if(err){
    //     res.redirect('/submitResult?result=创建需求失败');
    //   } else{
    //     res.redirect('/submitResult?result=创建需求成功');
    //   }
    // })

    process.execFile('new_create.sh',function (err, stdout, stderr) {
      if(err){
        console.log("err",err)
      }
      console.log("stdout",stdout)
      console.log("stderr",stderr)
    });
  }
}
