import { Document } from "mongoose";
export interface demandCollection extends Document{
    demandName: string;
    gitNum: string;
    haveBaidu: boolean;
    baiduGitNum?: string;
    hasMerge: boolean;
}