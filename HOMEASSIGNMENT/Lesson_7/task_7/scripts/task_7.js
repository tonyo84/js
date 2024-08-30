function showBanner(
  image = "./img/img1.jpg",
  title = "Hello everybody",
  link = "https://www.google.com/"
) {
	document.write(`<a href = ${link}><img src = ${image}><h3>${title}</h3></a>`)
}
showBanner()