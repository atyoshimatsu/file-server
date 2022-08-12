const paramValidator = (type, file) => {
  if (type !== 'u' && type !== 'd') return false;
  if (!file) return false;
  return true;
};

module.exports = { paramValidator };
