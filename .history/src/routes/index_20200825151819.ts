import express from 'express';
import homeController from '../controllers/homeController'; 
import packageBuildController from '../controllers/packageBuildController'; 
import demandManageController from '../controllers/demandManageController'; 
import submitResultController from '../controllers/submitResultController'; 

const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/home');
});

router.get('/home', homeController.getHome);  

router.post('/home', homeController.postHome);  

router.get('/packageBuild', packageBuildController.getPackageBuild);  

router.post('/packageBuild', packageBuildController.postPackageBuild);  

router.get('/demandmanage', demandManageController.getDemandManage);  

router.post('/demandmanage', demandManageController.postDemandManage);  

router.get('/submitResult', submitResultController.getSubmitResult);  


export default router;