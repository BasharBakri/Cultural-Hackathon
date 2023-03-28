import Article from "../models/Article.js";

// POST FROM SCRAPER
// ???

// Admin create one Article
//  @route POST news/api/articles
//  @access Public
// Info: header, pictureURL, Description, href, author, websiteName, id, isShown, category

const postOneArticle = async (req, res, next) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json({
      success: true,
      data: article
    });
  } catch (error) {
    next(error);
  }
};



// Get all articles
//  @route GET news/api/articles
//  @access Public
// Info: header, pictureURL, Description, href, author, websiteName, id, isShown, category


const getAllArticles = async (req, res, next) => {
  //!get all articles that are isInHomePage: false

  try {
    const articles = await Article.find();

    res.status(200).json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(error);
  }
};



// view single article
//  @route GET news/api/articles/:id
//  @access Public
// Info: header, pictureURL, Description, href, author, websiteName, id, isShown, category

const getOneArticle = async (req, res, next) => {

  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, data: article });

  } catch (error) {
    // res.status(400).send(error);
    next(error);
  }
};



// update one article
//  @route PUT news/api/articles/:id/update
//  @access Private
// Info: header, pictureURL, Description, href, author, websiteName, id, isShown, category


const updateOneArticle = async (req, res, next) => {
  //! Only update the fields that are in the request body
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!article) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: article });
  } catch (error) {
    next(error);
  }
};


// delete one article
//  @route PUT news/api/articles/:id/delete
//  @access Private



const deleteOneArticle = async (req, res, next) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

export { postOneArticle, getAllArticles, getOneArticle, updateOneArticle, deleteOneArticle };