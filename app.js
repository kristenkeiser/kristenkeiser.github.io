function main () {
  var main = getId('main'),
      footer = getId('footer'),
      mainAbsPos;

  var mg = footer.clientHeight - (document.body.clientHeight - main.clientHeight);

  document.body.style.marginBottom = mg + 'px';
}

function getId (id) {
  return document.getElementById(id);
}

// function fireOnScroll (cb) {
//   var last_position = 0;
//   var ticking = false;

//   window.addEventListener('scroll', function (e) {
//     last_position = window.scrollY;
//     if (!ticking) {
//       window.requestAnimationFrame(function () {
//         cb(last_position);
//         ticking = false;
//       });
//     }

//     ticking = true;
//   });
// }

window.onload = main;