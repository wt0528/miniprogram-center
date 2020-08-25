import HomeModel from '../models/homeModel';
import {postBody} from '../common/utils'

export default class PackageBuildController{
    static getPackageBuild(req, res, next){
        HomeModel.find({}).exec((err, demands) =>{
            res.render('packageBuild',{demandList: demands})
        })
    }

    static async postPackageBuild(req, res, next){
        let body:any = await postBody(req)
        console.log("body",body)
        res.redirect('/submitResult?result=打包成功');
    }
    
}