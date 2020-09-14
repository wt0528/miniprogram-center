import DemandModel from '../models/demandModel';
import OperateLogModel from '../models/operateLogModel';
import UserModel from '../models/userModel';

export default class DemandController{
    
    static createDemand(req, res, next){
        let param = req.query;
        let newRecomend = new DemandModel({
          demandName: param.demandName,
          gitNum: param.gitNum ,
          haveBaidu: param.haveBaidu,
          baiduGitNum: param.baiduGitNum,
          hasMerge: false,
          linkUser: param.linkUser  
        })
        newRecomend.save((err) =>{
          console.log("createDemand newRecomend")
          if(err){
            res.json(err);
          } else{
            res.json({"code":0,"msg":"success",data:{}});
          }
        })
    }

}