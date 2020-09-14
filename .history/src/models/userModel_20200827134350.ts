import { Document, Model, model, Schema } from "mongoose";

interface userCollection extends Document{
    name: string;
    password: string;
    gitname: string;
    gitPassword: string;
}

let UserSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    gitname: {type: String, required: true},
    gitPassword: {type: String, required: true}
});

let UserModel:Model<userCollection> = model("UserSchema", UserSchema, "users");

export default UserModel;
