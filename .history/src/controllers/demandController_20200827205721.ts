import DemandModel from '../models/demandModel';
import OperateLogModel from '../models/operateLogModel';
import UserModel from '../models/userModel';

export default class DemandController{
    
    static createDemand(req, res, next){
        DemandModel.find({}).exec((err, result) => {
            if(err){
                res.json({"code":"102","msg":"创建失败"});
            } else if(result.length > 0){
                res.json({"code":"102","msg":"分支已存在",data:result});
            } else{
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
                    res.json({"code":"102","msg":"创建失败"});
                  } else{
                    res.json({"code":0,"msg":"success",data:{}});
                  }
                })
            }
        })
    }

    static deleteDemand(req, res, next){
        let param = req.query;
        DemandModel.remove({"gitNum":param.selectedDemand}).exec((err) => {
            if(err){
                res.json({"code":"102","msg":"删除失败"});
            } else{
                let newLog = new OperateLogModel({
                  demandName: param.deleteDemandName,
                  gitNum: param.deleteGitNum,
                  operateTime: new Date(),
                  linkUser: param.linkUser
                })
                newLog.save((err) =>{
                  console.log("post newRecomend")
                  if(err){
                    res.json({"code":"101","msg":"删除成功,插入日志失败"});
                  } else{
                    res.json({"code":"0","msg":"删除成功,插入日志成功"});
                  }
                })
            }
        })
    }

    static getActiveDemand(req, res, next){
        let param = req.query;
        let findOption = param.userName?{"linkUser" : param.userName} : {} 
        DemandModel.find(findOption).exec((err, demands) =>{
            if(err){
                res.json({"code":"101","msg":"查询失败",data:err});
            } else{
                res.json({"code":"0","msg":"success",data:demands});
            }
            
        })
    }


    static getLogDemand(req, res, next){
        let param = req.query;
        let findOption = param.userName?{"linkUser" : param.userName} : {} 
        OperateLogModel.find(findOption).exec((err, logs) =>{
            if(err){
                res.json({"code":"101","msg":"查询失败",data:err});
            } else{
                res.json({"code":"0","msg":"success",data:logs});
            }
        })
    }

}