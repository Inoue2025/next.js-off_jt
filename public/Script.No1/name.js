"use strict";
let input = "";
document.getElementById("nameText").addEventListener("input", function(){
  input = document.getElementById("nameText").value;
})

const btn = document.getElementById("clickBtn").addEventListener("click", function() {
  if(input.trim() === ""){
    alert("名前を入力してください。");
  }else{
    alert(input + "さんこんにちは！");
  }
});