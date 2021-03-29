import Category from "../models/category";

export const create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "không thêm được danh mục",
      });
    }
    res.json({ data });
  });
};

export const list = (req, res) => {
  Category.find((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Danh mục không tôn tại",
      });
    }
    res.json({ categories });
  });
};

export const categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "không tìm thấy danh mục",
      });
    }
    req.category = category;
    next();
  });
};

export const read = (req, res) => {
  return res.json(req.category);
};

export const update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err || !category) {
      res.status(400).json({
        error: "Danh mục không tồn tại",
      });
    }
    res.json({ data });
  });
};

export const remove = (req, res) => {
  let category = req.category;
  category.remove((err, deleteCategory) => {
    if (err || !category) {
      res.status(400).json({
        error: "Danh mục không tồn tại",
      });
    }
    res.json({
      deleteCategory,
      message: "Xóa thành công",
    });
  });
};
