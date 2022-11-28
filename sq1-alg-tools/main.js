$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function validateAlg (alg) {
    return /^[0-9,\/]+$/.test(alg);
}

function isNumber(char) {
    return /[0-9]/.test(char);
}

function algArray (alg) {
    var algArray = [];
    var i = 0;

    while (i < alg.length) {
        if (isNumber(alg[i]) && isNumber(alg[i+1])) {
            algArray.push(alg[i]+alg[i+1]);
            i++;
        } else if (alg[i] == "-") {
            algArray.push(alg[i]+alg[i+1]);
            i++;
        } else if (isNumber(alg[i])) {
            algArray.push(alg[i]);
        }
        i++;
    }

    return algArray;
}

function changeEndCoordinates (alg) {
    var newAlg = ""
    var firstSlashIndex = 0;
    var firstCoordinates = [];
    var lastSlashIndex = alg.length-1;
    var lastCoordinates = [];

    for (var i = 0; i < alg.length; i++) {
        if (alg[i] == "/") {
            firstCoordinates = algArray(alg.substring(0,i));
            firstSlashIndex = i;
            break;
        }
    }

    for (i = alg.length-1; i >= 0; i--) {
        if (alg[i] == "/") {
            lastCoordinates = algArray(alg.substring(i+1));
            lastSlashIndex = i;
            break;
        }
    }

    for (var i = 0; i < firstCoordinates.length; i++) {
        if (parseInt(firstCoordinates[i]) % 3 == 0) {
            newAlg += "0";
        } else if (i == 0) {
            newAlg += "1";
        } else {
            newAlg += "-1";
        }
        if (i == 0) {
            newAlg += ",";
        }
    }

    newAlg += alg.substring(firstSlashIndex, lastSlashIndex+1);

    for (var i = 0; i < lastCoordinates.length; i++) {
        if (parseInt(firstCoordinates[i]) % 3 == 0) {
            newAlg += "0";
        } else if (i == 0) {
            newAlg += "-1";
        } else {
            newAlg += "1";
        }
        if (i == 0) {
            newAlg += ",";
        }
    }

    return newAlg;
}

function switchCoordinates (algArray, index) {
  var temp = algArray[index];
  algArray[index] = algArray[index+1];
  algArray[index+1] = temp;
  return algArray;
}

function switchDirection (alg, algArray) {
  switchedAlg = "";
  if (alg[alg.length-1] == "/") {
    switchedAlg += "/";
  }
  for (var i = 0; i < algArray.length; i++) {
    if (algArray[i] == "0" || algArray[i] == "6") {
      switchedAlg += algArray[i];
    } else if (algArray[i] != null && algArray[i].length == 1) {
      switchedAlg += "-" + algArray[i];
    } else {
      switchedAlg += algArray[i][1];
    }

    if (i % 2 == 0) {
      switchedAlg += ",";
    } else {
      switchedAlg += "/";
    }
  }
  if (alg[0] != "/") {
    switchedAlg = switchedAlg.substring(0, switchedAlg.length-1);
  }
  return switchedAlg;
}

function reformat (alg) {
    var reformattedAlg = "";
    var count = 0;

    if (alg[0] == "/") {
        reformattedAlg += "/";
    }

    for (var i = 0; i < algArray(alg).length; i ++) {
      if ((parseInt(algArray(alg)[i]) > 6) ||
      (algArray(alg)[i].length > 1 && isNumber(algArray(alg)[i][0]) && isNumber(algArray(alg)[i][1]))) {
        reformattedAlg += "-" + (12-parseInt(algArray(alg)[i])).toString();
      } else {
        reformattedAlg += algArray(alg)[i];
      }
      if (count % 2 == 0) {
          reformattedAlg += ",";
      } else {
          reformattedAlg += "/";
      }
      count++;
    }

    if (alg[alg.length-1] != "/") {
      reformattedAlg = reformattedAlg.substring(0,reformattedAlg.length-1);
    }

    return changeEndCoordinates(reformattedAlg);
}

function inverse (alg) {
  var inverseAlgArray = [];

  for (var i = algArray(reformat(alg)).length-2; i >= 0; i-=2) {
    inverseAlgArray.push(algArray(reformat(alg))[i]);
    inverseAlgArray.push(algArray(reformat(alg))[i+1]);
  }

  return switchDirection(alg, inverseAlgArray);
}

function mirror (alg) {
  var mirrorAlgArray = [];

  for (var i = 0; i <= algArray(reformat(alg)).length-2; i+=2) {
    mirrorAlgArray.push(algArray(reformat(alg))[i+1]);
    mirrorAlgArray.push(algArray(reformat(alg))[i]);
  }

  return switchDirection(alg, mirrorAlgArray);
}

function lefty (alg) {
  if (alg.length == 0) {
    return "";
  } else if (alg[0] == "/" || alg[alg.length-1] == "/" || alg.length<=8) {
    return "N/A";
  }

  var leftyAlgArray = algArray(reformat(alg));
  leftyAlgArray = switchCoordinates(leftyAlgArray, 0);
  leftyAlgArray = switchCoordinates(leftyAlgArray, leftyAlgArray.length-2);
  return switchDirection(alg, leftyAlgArray);
}

document.getElementById('alg-input').addEventListener('input', function(e) {
    let alg = e.target.value;
    //if (!validateAlg(alg)) {
    //    alert("Please enter a valid algorithm.");
    //    document.getElementById("alg-input").value = alg.substring(0,alg.length-1);
    //} else {
    //    document.getElementById("reformatted-alg").innerHTML = reformat(alg);
    //}
    document.getElementById("reformatted-alg").innerHTML = reformat(alg);
    document.getElementById("inverse-alg").innerHTML = inverse(alg);
    document.getElementById("mirror-alg").innerHTML = mirror(alg);
    document.getElementById("inverse-mirror-alg").innerHTML = inverse(mirror(alg));
    document.getElementById("lefty-alg").innerHTML = lefty(alg);
    document.getElementById("inverse-lefty-alg").innerHTML = lefty(inverse(alg));
    document.getElementById("mirror-lefty-alg").innerHTML = lefty(mirror(alg));
    document.getElementById("inverse-mirror-lefty-alg").innerHTML = lefty(mirror(inverse(alg)));
});
