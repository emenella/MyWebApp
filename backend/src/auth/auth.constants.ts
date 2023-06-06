import * as dotenv from "dotenv";

dotenv.config();

export const JwtSecret = {
    access_token: process.env.JWT_ACCESS_TOKEN_SECRET,
    refresh_token: process.env.JWT_REFRESH_TOKEN_SECRET
};

export const API = {
    UID: process.env.API_UID,
    KEY: process.env.API_SECRET,
    URL: process.env.API_URL,
};

export const passPhrase = {
    secret: process.env.PASSPHRASE,
};

export const serverOptions = {
    protocole: process.env.PROTOCOL,
    hostname: process.env.HOSTNAME,
    port: process.env.PORT_SSL
}