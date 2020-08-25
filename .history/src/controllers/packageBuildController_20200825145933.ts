import HomeModel from '../models/homeModel';
import {postBody} from '../common/utils'

export default class PackageBuildController{
    static getPackageBuild(req, res, next){
        res.render('packageBuild')
    }

    static async postPackageBuild(req, res, next){
        let body:any = await postBody(req)
        console.log("body",body)
        res.render('submitResult',{result: '打包成功'})
    }
    
}