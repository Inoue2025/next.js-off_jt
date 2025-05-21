"use strict";
let count = 0;
//HTMLの-ボタンをJSに持ってくる、イベント追加させる＋関数
document.getElementById("minusButton").addEventListener("click", function(){
    count--;
    document.getElementById("count").textContent = count;
})

//HTMLの+ボタンをJSに持ってくる、イベント追加させる＋関数
document.getElementById("plusButton").addEventListener("click", function(){
    count++;
    document.getElementById("count").textContent = count;
})