
function flipImage(el,flipped) {
  let src = $(el).attr("src");
  $(el).attr('onclick','flipImage(this,\''+src+'\')');
  $(el).attr("src",flipped);
}