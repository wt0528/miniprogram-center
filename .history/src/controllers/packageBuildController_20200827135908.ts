import DemandModel from '../models/domeModel';
import {postBody} from '../common/utils'

export default class PackageBuildController{
    static getPackageBuild(req, res, next){
        DemandModel.find({}).exec((err, demands) =>{
            //TODO:需要增加数据库查询失败处理
            res.render('packageBuild',{demandList: demands})
        })
    }

    static async postPackageBuild(req, res, next){
        let body:any = await postBody(req)
        console.log("buildBody",body)
        //TODO: 执行打包操作
        


        res.redirect('/submitResult?result=打包成功');
    }
    
}