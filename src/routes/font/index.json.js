import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
  return {
    title: post.title,
    css: post.css,
    slug: post.slug,
    excerpt: post.excerpt,
    printDate: post.printDate,
    releases: post.releases,
    headline: post.headline,
    sentence: post.sentence,
    paragraph: post.paragraph,
    variants: post.variants,
    socials: post.socials,
    foundries: post.foundries,
    designers: post.designers,
    tags: post.tags
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
