import fs from "fs";
import path from "path";

const productsPath = path.join(process.cwd(), "public", "products");
const outputPath = path.join(
  process.cwd(),
  "src",
  "data",
  "products.json"
);

const imageExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
];

const categories = fs
  .readdirSync(productsPath, { withFileTypes: true })
  .filter((item) => item.isDirectory());

const products = [];

for (const category of categories) {
  const categoryPath = path.join(productsPath, category.name);

  const productFolders = fs
    .readdirSync(categoryPath, { withFileTypes: true })
    .filter((item) => item.isDirectory());

  for (const product of productFolders) {
    const productPath = path.join(categoryPath, product.name);

    const images = fs
      .readdirSync(productPath)
      .filter((file) =>
        imageExtensions.includes(
          path.extname(file).toLowerCase()
        )
      );

    if (images.length === 0) continue;

    products.push({
      id: `${category.name}-${product.name}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),

      name: product.name,

      category: category.name,

      images: images.map(
        (image) =>
          `/products/${encodeURIComponent(
            category.name
          )}/${encodeURIComponent(
            product.name
          )}/${encodeURIComponent(image)}`
      ),
    });
  }
}

fs.mkdirSync(path.dirname(outputPath), {
  recursive: true,
});

fs.writeFileSync(
  outputPath,
  JSON.stringify(products, null, 2),
  "utf8"
);

console.log(
  `Generated ${products.length} products successfully.`
);