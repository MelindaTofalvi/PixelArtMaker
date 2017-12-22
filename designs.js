/*jshint esversion: 6 */
const SUBMIT = $("#submit");
const TABLE = $("#pixel_canvas");

// Select color input
const COLOR = function(){
  return document.getElementById("colorPicker").value;
};

// When size is submitted by the user, call makeGrid()
SUBMIT.on("click",function(){
  TABLE.empty(); //make the previous table disappear
  makeGrid();
  $("#fadeIn02").fadeIn(2000);
  return false;
});

const makeGrid = function () {
  let height = $("#input_height").val();
  let width = $("#input_width").val();
  for (var i = 1; i <= height; i++) {
    let tr = $("<tr></tr>");
    TABLE.append(tr);
    for (var x = 0; x < width; x++) {
      let td = $("<td class='tdtd'></td>");
      tr.append(td);

    }
  }
  pickColor();
};

// pick color
const pickColor = function(){
  var pickedColor = COLOR();
  $(TABLE).on("click", "td", function (event){
    $(this).css("background-color", pickedColor);
  });
  $(TABLE).on("dblclick", "td", function (event){
    $(this).css("background-color", "rgba(255, 255, 255, .0)");
  });
};

$(document).ready(function(){
  $("#fadeIn01").fadeIn(2000);
});
