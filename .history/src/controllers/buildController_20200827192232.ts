import DemandModel from '../models/demandModel';
import OperateLogModel from '../models/operateLogModel';
import UserModel from '../models/userModel';

export default class BuildController{
    
    static buildPackage(req, res, next){
        let param = req.query;
        console.log("dddddddddddddd",param)
        //TODO:开始进行打包操作
        if(param.buildType == 'online'){
            console.log("hhhhhhhh",param)
            DemandModel.findAndModify({ 
                query:{gitNum:param.buildGitNum}, 
                update:{ 
                    hasMerge: true
                }    
             }).exec((err, result) =>{
                if(err){
                    console.log("更新合并分支失败")
                    return res.json({"code":'101',"msg":"更新合并分支失败"})
                } else{
                    return res.json({"code":0,"msg":"success"})
                }
            })
        } 
        
    }

}