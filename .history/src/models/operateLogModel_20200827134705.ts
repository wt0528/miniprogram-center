import { Document, Model, model, Schema } from "mongoose";

interface operatrLogCollection extends Document{
    demandName: string;
    gitNum: string;
    operateTime: string;
    operateType: string;
    linkUser: string;
}

let OperatrLogSchema = new Schema({
    demandName: {type: String, required: true},
    gitNum: {type: String, required: true},
    operateTime: {type: String, required: true},
    operateType: {type: String, required: true},
    linkUser: {type: String, required: true}
});

let OperatrLogModel:Model<operatrLogCollection> = model("OperatrLogSchema", OperatrLogSchema, "manageLogs");

export default OperatrLogModel;
