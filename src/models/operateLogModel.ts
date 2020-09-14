import { Document, Model, model, Schema } from "mongoose";

interface operateLogCollection extends Document{
    demandName: string;
    gitNum: string;
    operateTime: string;
    linkUser: string;
}

let OperateLogSchema = new Schema({
    demandName: {type: String, required: true},
    gitNum: {type: String, required: true},
    operateTime: {type: String, required: true},
    linkUser: {type: String, required: true}
});

let OperateLogModel:Model<operateLogCollection> = model("OperateLogSchema", OperateLogSchema, "manageLogs");

export default OperateLogModel;
