import fs from "fs";
import path from "path";

const productsPath = path.join(
  process.cwd(),
  "public",
  "products"
);

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
  ".jfif",
];

const products = [];

/*
  Recursively find folders that contain images.
*/
function scanFolder(folderPath, categoryName, depth = 0) {
  if (!fs.existsSync(folderPath)) return;

  const items = fs.readdirSync(folderPath, {
    withFileTypes: true,
  });

  const imageFiles = items
    .filter((item) => {
      if (!item.isFile()) return false;

      return imageExtensions.includes(
        path.extname(item.name).toLowerCase()
      );
    })
    .map((item) => item.name);

  /*
    If this folder contains images,
    treat the folder as a product.
  */
  if (imageFiles.length > 0 && depth > 0) {
    const productName = path.basename(folderPath);

    const relativeFolder = path.relative(
      productsPath,
      folderPath
    );

    const parts = relativeFolder.split(path.sep);

    const actualCategory =
      parts.length > 1 ? parts[0] : categoryName;

    products.push({
      id: `${actualCategory}-${productName}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),

      name: productName,

      category: actualCategory,

      images: imageFiles.map((image) => {
        const imagePath = path.relative(
          productsPath,
          path.join(folderPath, image)
        );

        return (
          "/products/" +
          imagePath
            .split(path.sep)
            .map((part) => encodeURIComponent(part))
            .join("/")
        );
      }),
    });

    return;
  }

  /*
    Continue scanning subfolders.
  */
  for (const item of items) {
    if (!item.isDirectory()) continue;

    scanFolder(
      path.join(folderPath, item.name),
      categoryName || item.name,
      depth + 1
    );
  }
}


/* Check products folder */
if (!fs.existsSync(productsPath)) {
  console.error(
    "ERROR: public/products folder not found."
  );

  process.exit(1);
}


/* Start scanning */
const categories = fs
  .readdirSync(productsPath, {
    withFileTypes: true,
  })
  .filter((item) => item.isDirectory());

console.log("");
console.log("Scanning Elements products...");
console.log("");


for (const category of categories) {
  console.log(`Category: ${category.name}`);

  scanFolder(
    path.join(productsPath, category.name),
    category.name
  );
}


/* Remove duplicate products */
const uniqueProducts = Array.from(
  new Map(
    products.map((product) => [
      product.id,
      product,
    ])
  ).values()
);


/* Create data folder */
fs.mkdirSync(
  path.dirname(outputPath),
  {
    recursive: true,
  }
);


/* Save JSON */
fs.writeFileSync(
  outputPath,
  JSON.stringify(uniqueProducts, null, 2),
  "utf8"
);


console.log("");
console.log(
  `Generated ${uniqueProducts.length} products successfully.`
);
console.log("");
console.log(
  `Saved to: ${outputPath}`
);
console.log("");