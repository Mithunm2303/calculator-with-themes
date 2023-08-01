function del(){
  const result = document.getElementById('screen');
  return result.value = result.value.toString().slice(0,-1);
}

var two = document.getElementById('two');
two.addEventListener('click', function() {
  var body = document.querySelector('body');
  var toggle = document.getElementById('circle');
  body.classList.add('active1');
  body.classList.remove('active2');
  toggle.style.left = '23px';
})

var three = document.getElementById('three');
three.addEventListener('click', function() {
  var body = document.querySelector('body');
  var toggle = document.getElementById('circle');
  body.classList.add('active2');
  body.classList.remove('active1');
  toggle.style.left = '41px';
})

var one = document.getElementById('one');
one.addEventListener('click', function() {
  var body = document.querySelector('body');
  var toggle = document.getElementById('circle');
  body.classList.remove('active1');
  body.classList.remove('active2');
  toggle.style.left = '5px';
})