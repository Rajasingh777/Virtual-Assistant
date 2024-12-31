let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
  let speakInput = new SpeechSynthesisUtterance(input);
  //   speakInput.rate =1;
  //   speakInput.pitch =1;
  //  speakInput.volume =1;
  speakInput.lang = "en-IN";
  window.speechSynthesis.speak(speakInput);
};
window.onload = () => {
  // speakFunc("Hello sir");
   greetingFunc();
};
const greetingFunc = () => {
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    speakFunc("Good morning sir, How can i help you !");
  } else if (hour >= 12 && hour < 16) {
    speakFunc("Good afternoon sir,How can i help you !");
  } else {
    speakFunc("Good evening sir,How can i help you !");
  }
};
const startVoiceInput = () => {
  if ("webkitSpeechRecognition" in window) {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (e) => {
      let spokenText = e.results[0][0].transcript;
      handleCommands(spokenText.toLowerCase());
      box.classList.remove("btn-box");
      btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
    };
    recognition.start();
  } else {
    alert("your Browser dose not support  voice input !");
  }
};

  btn.onclick = () => {
  box.classList.add("btn-box");
  btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
  startVoiceInput();
};

const handleCommands = (command) => {
  console.log(command);
  if (
    command.includes("hello") ||
    command.includes("hey") ||
    command.includes("hi")
  ) {
    speakFunc("Hello sir , How can I Help you !");
  } else if (
    command.includes("who are you") ||
    command.includes("developed") ||
    command.includes("hu r u")
  ) {
    speakFunc("I Am Virtual Assistance,Developed By Raja Singh !");
  } else if (
    command.includes("open ajay sir 2008 youtube channel") ||
    command.includes("ajay sir 2008") ||
    command.includes("channel")
  ) {
    speakFunc("Opening... Ajay sir 2008 Youtube Channel");
    window.open("https://www.youtube.com/@Ajaysir-yl2fm");
  } else if (  command.includes("open Rameshwarm website !") ||command.includes("website") ||command.includes("ritm website")|| command.includes("our college website")) {
    speakFunc("Opening... Rameshwarm official website");
    window.open("https://www.ritm.in/");
  } else if (command.includes("open google ") || command.includes("google")) {
    speakFunc("Opening... Google");
    window.open("https://www.google.com");
  } else if (command.includes("calculator") || command.includes("cal")) {
    speakFunc("Opening... calculator");
    window.open("calculator://");
  } 
 else if (command.includes("open facebook") || command.includes("facebook")) {
    speakFunc("Opening... facebook");
    window.open("https://www.facebook.com");
  } 
 else if (command.includes("open instagram") || command.includes("instagram")) {
    speakFunc("Opening... instagram");
    window.open("https://www.instagram.com");
  } 
  else if (command.includes("tell me time") || command.includes("time"))
     {
        let time = new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
         speakFunc(time);
     } 
  else if (command.includes("tell me date") || command.includes("date")) {
    let date = new Date().toLocaleString(undefined, {day:'numeric', month: 'long'})
    speakFunc(date);
  } else if (command.includes("open youtube ") || command.includes("youtube")) {
    speakFunc("Opening... Youtube !");
    window.open("https://www.youtube.com");
  } else {
    speakFunc(`This is What I found on Internet regarding ${command}`);
    window.open(`https://www.google.com/search?q=${command}`);
  }
};
