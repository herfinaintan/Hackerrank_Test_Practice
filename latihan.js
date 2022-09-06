// var array = [-4, 3, -9, 0, 4, 1];
// var array2 = [3, 2, 4, 5, 1];
var array = plusMinus([-4, 3, -9, 0, 4, 1]);
var array2 = sort([-4, 3, -9, 0, 4, 1]);
var array3 = miniMaxSum([-4, 3, -9, 0, 4, 1]);
s = timeConversion("07:05:45PM");
var array4 = median([1, 0, 5, 3, 4, 2]);

document.getElementById("soal").innerHTML = array;
document.getElementById("soal2").innerHTML = array2;
document.getElementById("soal3").innerHTML = array3;
document.getElementById("soal4").innerHTML = s;
document.getElementById("soal5").innerHTML = array4;

function plusMinus(arr) {
  // Write your code here
  var positive = 0;
  var negative = 0;
  var zero = 0;
  var n = arr.length;

  for (let i = 0; i <= n; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else if (arr[i] == 0) {
      zero += 1;
    }
  }

  var ppos = negative / n;
  var pneg = positive / n;
  var pzero = zero / n;

  document.write("Fungsi plusMinus <br>");
  document.write(pneg, "<br>", ppos, "<br>", pzero, "<br><br>");
}

function sort(arr) {
  //Write your code here
  var num = arr.length;
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // arr.sort(function (a, b) {
  //   return a - b;
  // });
  document.write("Fungsi sort <br>");
  document.write(arr, "<br><br>");
}

function miniMaxSum(arr) {
  // Write your code here
  var num = arr.length;
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var sum = 0;

  for (var i = 0; i < num; i++) {
    sum += arr[i];
  }
  var miniSum = sum - max;
  var maxSum = sum - min;

  document.write("Fungsi miniMaxSum <br>");
  document.write(miniSum, " ", maxSum, "<br><br>");
}

// Example
// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.
function timeConversion(s) {
  // Write your code here
  const arr = s.slice(0, 8).split(":");
  arr[0] =
    s.indexOf("PM") > -1
      ? arr[0] == 12
        ? "12"
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? "00"
      : arr[0];

  document.write("Fungsi timeConversion <br>");
  document.write(arr.join(":"));
  document.write("<br><br>");
}

function median(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var n = arr.length;
  let middle = Math.ceil(parseInt(n - 1) / 2);
  document.write("Fungsi median <br>");
  document.write(arr[middle]); //nilai median dari array
}

// plusMinus(array);
// miniMaxSum(array2);
// sort(array2);
