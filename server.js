//импортируем Stuff служебные паки
const express = require("express");
const routes = require('./routes')
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
//импортируем Приложеие из некст чтоб оно работало с сервером,  серевер обрабатывал запосы.- и выдавало страницы и тд.
const app = next({ dev });
// const handle = app.getRequestHandler();
const handle = routes.getRequestHandler(app);
app
  .prepare()
  .then(() => {
    const server = express();
    server.get("/w/:slug", (req, res) => {
      const actualPage = "/work";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});