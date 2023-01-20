import config from "../config";
import { MongoConnect } from "../interfaces/app.interface";

export default <MongoConnect> {
    url: config.MONGODB_CONNECTION,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}