import HomeModel from '../models/homeModel';
import {postBody} from '../common/utils'

export default class DemandManageController{
    
    static getDemandManage(req, res, next){
        HomeModel.find({}).exec((err, demands) =>{
            res.render('demandmanage',{demandList: demands})
        })
    }

    static async postDemandManage(req, res, next){
        let body:any = await postBody(req)
        console.log("removebody",body)
        HomeModel.remove({"gitNum":body.selectedDemand}).exec((err) => {
            if(err){
                res.redirect('/submitResult?result=删除失败');
            } else{
                res.redirect('/submitResult?result=删除成功');
            }
        })
        
    }
    
}