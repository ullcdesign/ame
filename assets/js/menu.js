const btn = document.getElementById('navBtn');

btn.addEventListener('click',function() {
  document.getElementById('nav').classList.toggle('show');
  document.getElementById('navBtn').classList.toggle('bgAlpha');
  document.getElementById('btnLine1').classList.toggle('rotate1');
  document.getElementById('btnLine2').classList.toggle('rotate2');
});

const linkText = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
for (var n of linkText) {
  n.addEventListener('click',function() {
    document.getElementById('nav').classList.remove('show');
    document.getElementById('navBtn').classList.remove('bgAlpha');
    document.getElementById('btnLine1').classList.remove('rotate1');
    document.getElementById('btnLine2').classList.remove('rotate2');
    console.log('ok');
  });
}