class Router {
  constructor (server) {
    this._server = server;
    this._routes = {};

    this._server.use(this._onRequest.bind(this));
  }

  /**
   * Registers the method and route to the given handler.
   * @param {string} method The HTTP method for this route.
   * @param {string} route The path to handle.
   * @param {function} handler The function to handle an incoming request.
   */
  _register (method, route, handler) {
    this._routes[`${method.toUpperCase()}:${route}`] = handler;
  }

  _onRequest (ctx) {
    const compiled = `${ctx.method}:${ctx.path}`;
    if (compiled in this._routes) {
      this._routes[compiled](ctx);
    }
  }

  get (route, handler) {
    this._register('GET', route, handler);
  }

  post (route, handler) {
    this._register('POST', route, handler);
  }
}

module.exports = Router;
