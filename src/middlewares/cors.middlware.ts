import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import corsConfig from 'src/config/cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        const origin = req.headers.origin;

        if (origin && corsConfig.origins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        res.header('Access-Control-Allow-Credentials', 'true');

        if (req.method === 'OPTIONS') {
            return res.status(204).send(); // Menghindari error preflight
        }

        next();
    }
}
