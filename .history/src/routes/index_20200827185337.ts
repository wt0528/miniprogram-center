import express from 'express';
import homeController from '../controllers/homeController'; 
import packageBuildController from '../controllers/packageBuildController'; 
import demandManageController from '../controllers/demandManageController'; 
import submitResultController from '../controllers/submitResultController'; 


import DemandController from '../controllers/demandController'; 
import BuildController from '../controllers/buildController'; 

const router = express.Router();

router.get('/home', homeController.getHome);  

router.post('/home', homeController.postHome);  

router.get('/packageBuild', packageBuildController.getPackageBuild);  

router.post('/packageBuild', packageBuildController.postPackageBuild);  

router.get('/demandmanage', demandManageController.getDemandManage);  

router.post('/demandmanage', demandManageController.postDemandManage);  

router.get('/submitResult', submitResultController.getSubmitResult);  




//前后端分离后
router.use('/craete_demand', DemandController.createDemand)
router.get('/build_package', BuildController.buildPackage)


export default router;