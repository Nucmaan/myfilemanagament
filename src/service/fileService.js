const myfile = require('../model/fileModel.js');

const saveFile = async (filename) => {
  return await myfile.create({ filename });
};

const getAllFiles = async () => {
  return await myfile.findAll({ order: [['createdAt', 'DESC']] });
};

module.exports = {
  saveFile,
  getAllFiles,
};
