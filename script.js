const questions = [
"Seberapa kamu kenal aku?",
"Seberapa aku lucu?",
"Seberapa aku perhatian?",
"Seberapa kamu nyaman sama aku?",
"Seberapa kamu sayang aku?"
];

let index = 0;
let answers = [];
let total = 0;

const qtext = document.getElementById("qtext");
const slider = document.getElementById("slider");
const percent = document.getElementById("percent");
const quiz = document.getElementById("quiz");
const namaInput = document.getElementById("nama");
const form = document.getElementById("form");

slider.oninput = () => percent.innerText = slider.value + "%";

function mulai(){
if(namaInput.value.trim()=="") return alert("Isi nama dulu 😄");

document.getElementById("f_nama").value = namaInput.value;
document.getElementById("question").style.display="none";
namaInput.style.display="none";
event.target.style.display="none";

quiz.style.display="block";
qtext.innerText = questions[index];
}

function nextQuestion(){
answers.push(questions[index]+" : "+slider.value+"%");
total += Number(slider.value);
index++;

if(index < questions.length){
qtext.innerText = questions[index];
slider.value=50;
percent.innerText="50%";
}
else{
let skor = Math.round(total/questions.length);

document.querySelector(".card").innerHTML =
"<h2>Makasih "+document.getElementById('f_nama').value+" ❤️</h2>"+
"<p>Skor kamu: "+skor+"%</p>";

document.getElementById("f_jawaban").value = answers.join(" | ");
document.getElementById("f_skor").value = skor;

setTimeout(()=>form.submit(),1500);
}
}