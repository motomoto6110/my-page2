const title = document.querySelector('#introduction');
title.textContent = "自己紹介!";
const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
    if (title.textContent === "自己紹介!") {
        title.textContent = "ボタンが押されました！";
        btn.textContent = "元に戻そう";
    }else{
        title.textContent = "自己紹介!";
        btn.textContent = "押そう";
    }
});
const blackbtn = document.querySelector('#blackbtn');
const profile = document.querySelector('.profile');
blackbtn.addEventListener("click", () => {
    profile.classList.toggle("dark");
    if (blackbtn.textContent === "ダークモード") {
        blackbtn.textContent = "ライトモード";
    }else{
        blackbtn.textContent = "ダークモード";
    }
});
const nameInput = document.querySelector('#nameInput');
const greetBtn = document.querySelector('#greetBtn');
const greeting = document.querySelector('#greeting');
const line = document.querySelectorAll('.line');
greetBtn.addEventListener("click", () => {
    const name = nameInput.value;
    if (name) {
        greeting.textContent = `こんにちは、${name}さん！`;
        line.forEach(l => l.classList.add("rainbow"));
    } else {
        greeting.textContent = "名前を入力してください。";
        line.forEach(l => l.classList.remove("rainbow"));
    }
});