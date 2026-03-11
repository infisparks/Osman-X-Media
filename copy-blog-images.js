const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'public');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

const imagesToCopy = [
  {
    src: 'C:\\Users\\daaniyal shaikh\\.gemini\\antigravity\\brain\\4227bf5a-0b49-4fa2-9946-a8a33205ae76\\blog_instagram_marketing_1773238795228.png',
    dest: 'blog-insta.png'
  },
  {
    src: 'C:\\Users\\daaniyal shaikh\\.gemini\\antigravity\\brain\\4227bf5a-0b49-4fa2-9946-a8a33205ae76\\blog_meta_ads_scaling_1773238814455.png',
    dest: 'blog-meta.png'
  }
];

imagesToCopy.forEach(img => {
  const destPath = path.join(destDir, img.dest);
  try {
    fs.copyFileSync(img.src, destPath);
    console.log(`Copied ${img.dest}`);
  } catch (err) {
    console.error(`Error copying ${img.dest}:`, err);
  }
});
