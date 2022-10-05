// const btn = document.createElement('button');
// btn.textContent = 'click away';
// document.body.appendChild(btn);

let scoreKeeper = 0;

function createButton() {
    const btn = document.createElement('button');
    btn.style.backgroundColor = 'green';
    btn.style.fontSize = '60px'
    btn.style.marginLeft = '37%'
    btn.style.marginTop = '12%'
    btn.textContent = 'click away';
    document.body.appendChild(btn);
    btn.addEventListener("click", updateScore)
};

function keepScore() {
    const score = document.createElement('p');
    score.style.fontSize = '65px'
    score.style.marginLeft = '39%'
    score.textContent = `Score: ${scoreKeeper}`
    document.body.appendChild(score);
};

function updateScore() {
scoreKeeper +=6;
document.querySelector('p').textContent = `Score: ${scoreKeeper}`
};

createButton();
keepScore();
mash[Math.floor(Math.random() * mash.length)];