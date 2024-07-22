const { News } = require('../model/News');


exports.fetchAllNews = async (req, res) => {
  
  let condition = {};

  
  if (req.query.category) {
    const categories = req.query.category.split(',');
    condition.category = { $in: categories };
  }
  condition.language = req.query.language;
  try {
    const news = await News.find(condition).exec();

    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.fetchNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findById(id);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
};