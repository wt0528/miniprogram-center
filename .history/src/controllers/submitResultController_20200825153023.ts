export default class SubmitResultController{
    
    static getSubmitResult(req, res, next){
        console.log("submitResult",req.query)
        res.render('submitResult',{result: req.query.result})
    }
    
}