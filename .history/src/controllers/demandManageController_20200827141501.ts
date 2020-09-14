import DemandModel from '../models/demandModel';
import OperateLogModel from '../models/operateLogModel';
import {postBody} from '../common/utils'

export default class DemandManageController{
    
    static getDemandManage(req, res, next){
        DemandModel.find({}).exec((err, demands) =>{
            //TODO:需要增加数据库查询失败处理
            res.render('demandmanage',{demandList: demands})
        })
    }

    static async postDemandManage(req, res, next){
        let body:any = await postBody(req)
        console.log("removebody",body)
        DemandModel.remove({"gitNum":body.selectedDemand}).exec((err) => {
            if(err){
                res.redirect('/submitResult?result=删除失败');
            } else{
                //TODO 增加操作记录
                let onlineUser = 'wt' //暂时写死
                let newLog = new OperateLogModel({
                  demandName: 'zzzz',
                  gitNum: body.selectedDemand,
                  operateTime: '20200827',
                  linkUser: onlineUser
                })
                newLog.save((err) =>{
                  console.log("post newRecomend")
                  if(err){
                    res.redirect('/submitResult?result=删除成功');
                  } else{
                    res.redirect('/submitResult?result=删除成功,插入日志失败');
                  }
                })
            }
        })
        
    }
    
}