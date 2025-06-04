const slugify = require('slugify');

const originalTitle = "The Lord of the Rings";
const slug = slugify(originalTitle);

console.log(slug);