const imgDiv = document.getElementById('img')

function nextBigger(n){
	var x = document.getElementById('InputNumber').value;
	//console.log(n);
	//console.log(x);
  var d = n.toString().split('');
  var p = -1;
  for (var i = d.length-1; i > 0; i--) {
    if (+d[i] > +d[i-1]) {
      p = i-1;
      break;
    }
  }
  
  // if we are unable to find the pivot, skip
  if (p == -1) return displayVal(p);
    
  // splice the digits in the pivot
  var right = d.splice(p);
  
  // extract pivot
  var pv = right.splice(0, 1)[0];
  
  // find the lowest number > pv
  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return displayVal(-1);
  
  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();
  
  // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  
  if (ret < n) return displayVal(-1);
  
   return displayVal(ret);
}

function displayVal(input) {
  // TODO make this display image(s) instead!
  if(input !='-1')
	document.getElementById('OutputNumber').value = input;  
  //console.log(input);
  else
  document.getElementById('OutputNumber').value = 'Output cannot be obtained';		
  //console.log(input);
  //imgDiv.innerHTML = input;
}

//nextBigger(document.getElementById('InputNumber').value);