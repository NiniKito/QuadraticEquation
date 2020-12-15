function getElement(e) {
  return document.getElementById(e);
}
function getElementValue(e) {
  return getElement(e).value;
}

function Calculate() {
  var a = parseInt(getElementValue("a")),
    b = parseInt(getElementValue("b")),
    c = parseInt(getElementValue("c"));
  if (isNaN(a)) {
    a = 1;
  }
  if (isNaN(b)) {
    b = 0;
  }
  if (isNaN(c)) {
    c = 0;
  }
  var D = b * b - 4 * a * c;
  var R1 = getElement("root1"),
    R2 = getElement("root2"),
    noroots= getElement("noroots");

  R1.innerHTML = "";
  R2.innerHTML = "";

  var discriminant = getElement("D");

  if (D < 0) {
    noroots.style.display = "flex";
    roots.style.display = "none";
  } else if (D == 0) {
    var S = -b / (2 * a);
    R1.innerHTML = S.toString();
    R2.innerHTML = S.toString();
  } else {
    var root1 = (-b + Math.sqrt(D)) / (2 * a),
      root2 = (-b - Math.sqrt(D)) / (2 * a);
    R1.innerHTML = root1.toString();
    R2.innerHTML = root2.toString();
  }
}
