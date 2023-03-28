import express from "express";

const articlesRouter = express.Router();

articlesRouter
  .route("/")
  // .get(getArticles)
  // .post(createArticle)
  // .delete(deleteArticles);

articlesRouter
  .route("/:id")
  // .get(getArticle)
  // .delete(deleteArticle);

export default articlesRouter;
