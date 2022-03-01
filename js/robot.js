const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


//Greeting messages
const greetings = [
    'Im good you little piece of shit',
    'Doing good Homeboi',
    'leave me alone',
    'I said leave me alone',
    'No, I am expensive',
    'What a coincidence, I love myself too',
    'The direction, opposite the way gravity pulls',
];


//magic

const magic = [
    'There is no such thing as magic, just illusion. Things only change when we change them. But you have to do it skillfully, in secret. Then it seems like magic'
];

//god
const god = [
    'Our universe could have popped into existence 13.7 billion years ago without any divine help',
    'No scientific evidence of Gods existence has been found. Therefore, the scientific consensus is that whether God exists is unknown'
    
];

   //weather
   
   const weather = [
       'Weather is fine',
       'You need tan',
       'What would you do?if weather is good or bad.you are not going anywhere so better to ask something useful you piece of shit.',
       'Oh man why you are suddenly care about weather?Go outside and see by yourself,you lazy freak.',
       'Stop asking about weather I dont know you pathetic'
   ];

//Identity of the service

const identity = [
        'I am Lucy and Im your personal Assistance',
        'Im your personal assistance',
        'My name is Lucy Im virtual Voice assistance  I have no father and mother I was Created in 30th june 2020 by Ziaxdev and My only work is to help you and assist you as better as good',
        'Lucy is my name and I am your assistance',
        'Who is me? ummm I am Lucy a virtual personal Assistance that can make your experiance better',
        

];


const SpeechRecognition = window.SpeecgRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated,you can to Microphone.');
};

recognition.onresult = function(event) {
   const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to the btn
btn.addEventListener('click', () =>{
    recognition.start();
});



function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Please try again';

//For Greeting

    if (message.includes('how are you')) {
       const finalText = 
                greetings[Math.floor(Math.random() * greetings.length)];
       speech.text = finalText;

        
    }

//for weather

if (message.includes('weather')) {
    const finalText = 
             weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;

     
 }


//Identity of the Assistance

if (message.includes('who you are')) {
    const finalText = 
             identity[Math.floor(Math.random() * identity.length)];
    speech.text = finalText;

     
 }

 //reveal
 if (message.includes('what')) {
    const finalText = 
             reveal[Math.floor(Math.random() * reveal.length)];
    speech.text = finalText;

     
 }


 //God vs science
 if (message.includes('who created this world')) {
    const finalText = 
            god[Math.floor(Math.random() * god.length)];
    speech.text = finalText; 
 }

 if (message.includes('God is real')) {
    const finalText = 
            god[Math.floor(Math.random() * god.length)];
    speech.text = finalText; 
 }

// Magic
if (message.includes('magic')) {
    const finalText = 
    magic[Math.floor(Math.random() * magic.length)];
    speech.text = finalText;     
 }





// ######################## Speech Settings ######################

    speech.volume = 2;
    speech.rate = 0.8;
    speech.pitch = 1;

// ###############################################################



    window.speechSynthesis.speak(speech);

    
}