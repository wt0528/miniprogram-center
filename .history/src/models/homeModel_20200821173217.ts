import { Model, model, Schema } from "mongoose";
import {demandCollection} from '../common/interface';

let HomeSchema = new Schema({
    demandName: {type: String, required: true},
    gitNum: {type: String, required: true},
    haveBaidu: {type: Boolean, required: true},
    baiduGitNum: {type: String, required: false},
    hasMerge: {type: Boolean, required: true},
});

let HomeModel:Model<demandCollection> = model("HomeSchema", HomeSchema, "demands");

export default HomeModel;
