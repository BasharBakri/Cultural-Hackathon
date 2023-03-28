import express from "express";
import {getAllArticles, getOneArticle, postOneArticle, updateOneArticle, deleteOneArticle} from '../controllers/articleControllers.js'

const articlesRouter = express.Router();

articlesRouter
  .route("/")
  .get(getAllArticles)
  .post(postOneArticle)
  // .delete(deleteArticles);

articlesRouter
  .route("/:id")
  .get(getOneArticle)
  .put(updateOneArticle)
  .delete(deleteOneArticle);

export default articlesRouter;
