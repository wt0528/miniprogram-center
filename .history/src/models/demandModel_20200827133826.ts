import { Document, Model, model, Schema } from "mongoose";

interface demandCollection extends Document{
    demandName: string;
    gitNum: string;
    haveBaidu: boolean;
    baiduGitNum?: string;
    hasMerge: boolean;
}

let DemandSchema = new Schema({
    demandName: {type: String, required: true},
    gitNum: {type: String, required: true},
    haveBaidu: {type: Boolean, required: true},
    baiduGitNum: {type: String, required: false},
    hasMerge: {type: Boolean, required: true},
});

let DemandModel:Model<demandCollection> = model("HomeSchema", DemandSchema, "demands");

export default DemandModel;
