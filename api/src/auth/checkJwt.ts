import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import * as dotenv from "dotenv";

dotenv.config();

const issuer = process.env.AUTH0_ISSUER;
const audience = process.env.AUTH0_ISSUER;

if(!(issuer && audience)){
    throw new Error("Invalid Auth configuration");
}

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${issuer}/.well-known/jwks.json`
    }),

    audience: audience,
    issuer: [`https://${issuer}/`],
    algorithms: ['RS256']
});

export default checkJwt;