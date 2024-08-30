function showImage(
  a = "./img/img1.jpg",
  b = "./img/img2.jpg",
  c = "./img/img3.jpg",
  d = "./img/img4.jpg"
) {
  const randomIndex = 1 + Math.floor(Math.random() * 4);
  console.log(randomIndex);
  let randomImage;
  switch (randomIndex) {
    case 1:
      ImagePath = a;
      break;
    case 2:
      ImagePath = b;
      break;
    case 3:
      ImagePath = c;
      break;
    case 4:
      ImagePath = d;
      break;
  }
  console.log(ImagePath);
  return ImagePath;
}
let image = showImage();
document.write(`<img src = ${image}>`);
