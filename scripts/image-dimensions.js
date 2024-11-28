const img = new Image();
img.onload = function() {
  alert(this.width + 'x' + this.height);
}
img.src = './images/hogwarts2.webp';