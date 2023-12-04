import  express  from 'express';
import routeJuegos from './indexJuegos.js';
import routeJueces from './indexJueces.js';

function routerIndex(app) {
    const route = express.Router();
    app.use('/api', route)
    route.use('/juegos', routeJuegos)
    route.use('/jueces', routeJueces)
  }

export {
    routerIndex
}

export default {
    routerIndex
}