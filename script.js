// =========================
// ✏️ EDIT YOUR APP HERE
// =========================

// Put your relationship start date here: YYYY-MM-DD
const relationshipStart = "2025-08-28";

// Change these messages to your own words.
const messages = [
  "You are my favorite notification. ❤️",
  "If I could choose again, I'd still choose you.",
  "Somehow you make ordinary days feel special.",
  "I hope you always know how deeply you are loved.",
  "You are my favorite person, my favorite place and my favorite story.",
  "No matter how chaotic life gets, I want to keep choosing you.",
  "If this app made you smile, mission accomplished. 😌❤️"
];

// Change these to your real memories.
const story = [
  {date:"28 August 2025", title:"The day our story started", text:"The day i started living again."},
  {date:"First Memory", title:"The first moment I knew", text:"I found myself actually happy in watching our first movie together."},
  {date:"A Favorite Day", title:"A day I would repeat forever", text:"I wont just repeat one moment or one day,I'll repeat my whole life with u again and again."},
  {date:"Today", title:"Still choosing you", text:"And this chapter is still being written... ❤️"}
];

// Add your important dates here.
const calendarEvents = [
  {date:"2025-08-28", title:"Our Story Begins", note:"The beginning of us ❤️"},
  {date:"2025-02-14", title:"Valentine's Day", note:"Another excuse to love you extra."},
  {date:"2025-12-25", title:"Our Christmas", note:"A memory to keep forever."}
];

// Add your photo filenames after putting them in the photos folder.
const photos = [
  {file:"photo1.jpg", caption:"Meow Meow❤️"},
  {file:"photo2.jpg", caption:"My mini"},
  {file:"photo3.jpg", caption:"Diva being cold"},
  {file:"photo4.jpg", caption:"holy moly"},
  {file:"photo5.jpg", caption:"cant take mt eyes off."},
  {file:"photo6.jpg", caption:"melting my soul with every look."},
  {file:"photo7.jpg", caption:"My favorite human."}
];

const surpriseTexts = [
  "Surprise! You are loved more than you probably realize. ❤️",
  "Today's mission: smile. Because your smile is ridiculously cute.",
  "Emergency reminder: I choose you. Always.",
  "Plot twist: you're stuck with me. 😌❤️",
  "Open your gallery. There is probably a memory waiting to make you smile."
];

function openSection(id){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function showModal(html){
  document.getElementById("modalContent").innerHTML=html;
  document.getElementById("modal").classList.add("show");
}
function closeModal(e){
  if(!e || e.target.id==="modal") document.getElementById("modal").classList.remove("show");
}
function showSurprise(){
  const text=surpriseTexts[Math.floor(Math.random()*surpriseTexts.length)];
  showModal(`<div style="font-size:3rem">💖</div><h2>Surprise!</h2><p style="font-size:1.2rem;line-height:1.6">${text}</p>`);
}
function showLetter(){
  showModal(`<div style="font-size:3rem">💌</div><h2>A letter for you</h2><p style="line-height:1.8">My love, this little app can never contain everything I feel for you. But I hope every page reminds you that you matter to me, that your smile matters, and that I want to keep making memories with you. Replace this paragraph with your own letter. ❤️</p>`);
}
function newMessage(){
  document.getElementById("messageText").textContent=messages[Math.floor(Math.random()*messages.length)];
}

function startQuiz(){
  const questions=[
    {q:"Who is more likely to say 'I love you' first after an argument?",a:["Me","Sneha","Both at the same time"],correct:0},
    {q:"What should our perfect date include?",a:["Food + talking","Sleeping all day","eating eachother"],correct:0},
    {q:"What is the most important rule of our relationship?",a:["Keep choosing each other","Never eat snacks","Always win arguments"],correct:0}
  ];
  let index=0,score=0;
  const render=()=>{
    const x=questions[index];
    document.getElementById("quizQuestion").textContent=x.q;
    document.getElementById("quizOptions").innerHTML=x.a.map((v,i)=>`<button class="option" onclick="answerQuiz(${i})">${v}</button>`).join("");
    window._quiz={questions,index,score,render};
  };
  window._quiz={questions,index,score,render}; render();
}
function answerQuiz(i){
  const q=window._quiz.questions[window._quiz.index];
  if(i===q.correct) window._quiz.score++;
  window._quiz.index++;
  if(window._quiz.index>=window._quiz.questions.length){
    document.getElementById("quizQuestion").textContent="Quiz complete! ❤️";
    document.getElementById("quizOptions").innerHTML="";
    document.getElementById("quizScore").textContent=`Score: ${window._quiz.score}/${window._quiz.questions.length}.`;
  }else window._quiz.render();
}

function makeHearts(){
  const box=document.querySelector(".hearts");
  for(let i=0;i<18;i++){
    const h=document.createElement("div");
    h.className="heart-float";
    h.textContent="♥";
    h.style.left=Math.random()*100+"%";
    h.style.fontSize=(12+Math.random()*18)+"px";
    h.style.animationDelay=(Math.random()*8)+"s";
    box.appendChild(h);
  }
}

function renderHearts(){
  document.getElementById("heartGrid").innerHTML=Array.from({length:8},(_,i)=>`<button class="heart-btn" onclick="pickHeart(${i})">❤️</button>`).join("");
}
function pickHeart(i){
  const prizes=["A giant virtual hug 🤗","You owe me one kiss 😘","You're officially my favorite person today.","One free cuddle coupon 🫂","I love you. That's the prize. ❤️","Go look at your favorite photo of us.","Your smile = instant happiness.","You + me = forever-ish. 💕"];
  document.getElementById("heartResult").textContent=prizes[i];
}

function renderStory(){
  document.getElementById("timeline").innerHTML=story.map(x=>`<article class="timeline-item"><small>${x.date}</small><h3>${x.title}</h3><p>${x.text}</p></article>`).join("");
}
function renderGallery(){
  document.getElementById("galleryGrid").innerHTML=photos.map(x=>`<div class="photo-card"><img src="photos/${x.file}" alt="${x.caption}" onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="#ffe8ef"/><text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="#d94f78">Put ${x.file} here ❤️</text></svg>`)}'"><p>${x.caption}</p></div>`).join("");
}
function renderCalendar(){
  document.getElementById("calendarList").innerHTML=calendarEvents.sort((a,b)=>a.date.localeCompare(b.date)).map(x=>`<div class="calendar-item"><div><div class="date">${new Date(x.date+"T00:00:00").toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"})}</div><b>${x.title}</b><div>${x.note}</div></div><span>❤️</span></div>`).join("");
}
function updateCounter(){
  const el=document.getElementById("loveCounter");
  const start=new Date(relationshipStart+"T00:00:00");
  if(isNaN(start)) return;
  const now=new Date();
  let days=Math.floor((now-start)/86400000);
  if(days<0){el.textContent="Your special date is in the future ❤️";return;}
  el.innerHTML=`<b>${days}</b> days of us ❤️`;
}

document.addEventListener("DOMContentLoaded",()=>{
  makeHearts(); renderHearts(); renderStory(); renderGallery(); renderCalendar(); updateCounter(); newMessage();
});
