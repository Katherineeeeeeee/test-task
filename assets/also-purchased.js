window.addEventListener("DOMContentLoaded", () => {
  const alsoPurchasedSection = document.querySelector(".also-purchased");

  if (!alsoPurchasedSection) {
    return;
  }

  alsoPurchasedSection.addEventListener("click", (e) => {
    const colorSwatch = e.target.closest(".custom-product__swatch");
    const currentProduct = e.target.closest(".custom-product");

    if (colorSwatch) {
      e.preventDefault();

      const siblingSwatches = currentProduct.querySelectorAll(
        ".custom-product__swatch",
      );
      const imageSrc = colorSwatch.dataset.imageSrc;
      const variantURL = colorSwatch.getAttribute("href");

      removeSiblings(siblingSwatches, "selected");
      updateProduct(currentProduct, variantURL, imageSrc);

      colorSwatch.classList.add("selected");
    }
  });

  /**
   * Update product properties: image, url etc.
   * @param {HTMLElement} product - product card element.
   * @param {String} newURL - new product URL within variant.
   * @param {String} newImageSrc - new product image src within variant.
   */
  function updateProduct(product, newURL = "", newImageSrc = "") {
    if (!product) {
      return;
    }

    const linkElement = product.querySelector(".custom-product__link");
    const imageElement = product.querySelector(".custom-product__image");

    linkElement?.setAttribute("href", newURL);
    imageElement?.setAttribute("src", newImageSrc);
  }

  /**
   * Remove active classes from siblings element.
   * @param {Array} array - pseudo array of HTML elements which active classes should be removed.
   * @param {String} className - class name to remove from element.
   */
  function removeSiblings(array = [], className = "active") {
    array.forEach((element) => element.classList.remove(className));
  }
});
