import DemandModel from '../models/demandModel';
import OperateLogModel from '../models/operateLogModel';
import UserModel from '../models/userModel';

export default class BuildController{
    
    static async buildPackage(req, res, next){
        let param = req.query;
        console.log("dddddddddddddd",param)
        //TODO:开始进行打包操作
        if(param.buildType == 'online'){
            console.log("hhhhhhhh",param)
            await DemandModel.findOneAndUpdate.findAndModify(
                {gitNum: '222'}, 
                {hasMerge: true}    
             ).orFail(() => {
                return res.json({"code":'101',"msg":"更新合并分支失败"})
             });
             return res.json({"code":0,"msg":"success"})
        } 
        
    }

}