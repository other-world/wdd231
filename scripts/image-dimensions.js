const img = new Image();
img.onload = function() {
  console.log(this.width + 'x' + this.height);
}
img.src = './images/hogwarts2.webp';