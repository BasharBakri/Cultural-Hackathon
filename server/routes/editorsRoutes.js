import express from "express";

const editorsRouter = express.Router();

editorsRouter
  .route("/")
  // .get(getEditors)
  // .post(createEditor)
  // .delete(deleteEditor);

editorsRouter
  .route("/:id")
  // .get(getEditor)
  // .put(updateEditor)
  // .delete(deleteEditor);

export default editorsRouter;
