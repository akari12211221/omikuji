function omikujishow() {
    const results = [ '大吉', '中吉', '小吉' , '凶'];
    const result = results[Math.floor(Math.random() * results.length)];

    let message = '';
    let details = [];
    let image = '';

    if (result === '大吉'){
        message = '最高の一日になりそう！';
        details = ['恋愛：運命の出会い', '仕事：大成功', 'ラッキーカラー：赤'];
        image = 'daikichi.png';
    }   else if (result === '中吉') {
        message = 'いいことがありそう！';
        details = ['恋愛：順調', '仕事：評価アップ', 'ラッキーカラー：オレンジ'];
        image = 'chukichi.png';
    }   else if (result ==='小吉') {
        message = 'ちょっとした幸せがあるかも';
        details = ['恋愛：焦らずに', '仕事：コツコツが吉', 'ラッキーカラー：緑'];
        image = 'shokichi.png';
    }   else {
        message = '今日は慎重に行こう';
        details = ['恋愛：様子見', '仕事：確認を丁寧に', 'ラッキーカラー：青'];
        image = 'kyo.png';
    }

document.getElementById('omikuji').textContent = result + '：' + message;

const detail = document.getElementById('detail');
detail.innerHTML = '';
details.forEach((text) => {
    const li = document.createElement('li');
    li.textContent = text;
    detail.appendChild(li);
});
    
document.getElementById('omikujiImage').src = image;
}