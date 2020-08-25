export default class SubmitResultController{
    
    static getSubmitResult(req, res, next){
        res.render('submitResult',{result: ''})
    }
    
}