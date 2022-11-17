import { config } from "dotenv";

const node_env = process.env.NODE_ENV || 'dev';

config({path: `.env.${node_env}`});

const Config = {
    NODE_ENV: node_env,
    SECRET_KEY: process.env.SECRET_KEY,
    PORT: process.env.PORT || 3000,
    MONGODB_CONNECTION: process.env.MONGODB_CONNECTION,
    LOCAL: process.env.LOCAL || 'en',
};

export default Config;