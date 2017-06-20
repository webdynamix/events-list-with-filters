/*
  todo: create aliases dynamically and configure in webpack
*/
const cwd = process.cwd();
const path = require('path');
const fs = require('fs');

module.exports = (root = './app') => {
  const projectRoot = path.join(root, 'app');
  const projectScriptDirs = {};

  const getDirectories = (srcpath) => {
    return fs.readdirSync(srcpath).filter((file) => {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
  };

  ['/'].map((type) => {
    getDirectories(path.join(projectRoot, type)).map((directory) => {
      const key = directory;
      projectScriptDirs[key] = path.join(projectRoot, type, directory);
      return null;
    });
  });

  return {
    resolveAlias: {
      helpers: path.resolve(root, 'helpers'),
    }
  };
};
