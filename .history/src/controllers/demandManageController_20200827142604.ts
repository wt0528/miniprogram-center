import DemandModel from '../models/demandModel';
import OperateLogModel from '../models/operateLogModel';
import {postBody} from '../common/utils'

export default class DemandManageController{
    
    static getDemandManage(req, res, next){
        DemandModel.find({}).exec((err, demands) =>{
            //TODO:需要增加数据库查询失败处理
            res.render('demandmanage',{demandList: demands})
        })
        OperateLogModel.find({}).exec((err, res) =>{
            console.log("OperateLogModel",res)
        })
    }

    static async postDemandManage(req, res, next){
        let body:any = await postBody(req)
        console.log("removebody",body)
        DemandModel.remove({"gitNum":body.selectedDemand}).exec((err) => {
            if(err){
                res.redirect('/submitResult?result=删除失败');
            } else{
                let newLog = new OperateLogModel({
                  demandName: 'zzzz',
                  gitNum: body.selectedDemand,
                  operateTime: new Date(),
                  linkUser: 'wt'
                })
                newLog.save((err) =>{
                  console.log("post newRecomend")
                  if(err){
                    res.redirect('/submitResult?result=删除成功,插入日志失败');
                  } else{
                    res.redirect('/submitResult?result=删除成功');
                  }
                })
            }
        })
        
    }
    
}