import HomeModel from '../models/homeModel';

export default class DemandManageController{
    
    static getDemandManage(req, res, next){
        HomeModel.find({}).exec((err, demands) =>{
            res.render('demandmanage',{demandList: demands})
        })
    }

    static postDemandManage(req, res, next){
        
    }
    
}