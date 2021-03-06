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




//前后端分离后test1
router.use('/craete_demand', DemandController.createDemand)
router.use('/build_package', BuildController.buildPackage)
router.use('/delete_package', DemandController.deleteDemand)
router.use('/get_active_demands', DemandController.getActiveDemand)
router.use('/get_log_demands', DemandController.getLogDemand)


export default router;