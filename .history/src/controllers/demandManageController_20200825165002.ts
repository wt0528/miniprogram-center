import HomeModel from '../models/homeModel';

export default class DemandManageController{
    
    static getDemandManage(req, res, next){
        res.render('demandmanage')
    }

    static postDemandManage(req, res, next){
        HomeModel.find({}).exec((err, demands) =>{
            res.render('demandmanage',{demandList: demands})
        })
    }
    
}