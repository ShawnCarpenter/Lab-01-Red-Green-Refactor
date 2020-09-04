const capitalizeAndFilter = (arr) => arr.filter(item => item.charAt(0) !== 'f').map(word => word.toUpperCase());

module.exports = { capitalizeAndFilter };
