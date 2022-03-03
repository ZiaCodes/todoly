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
        'Who is me? ummm I am Lucy a virtual personal Assistance that can make your experiance better'
        

];

//Rakesh
const rakesh = [
    'Hello rakesh,I am lucy!',
    'Rakesh is a masculine given name of Indian origin. It is derived from the Sanskrit language.',
    'Jada gand na fulao Gand tod denge tumhari',
    'Rakesh is a piece of shit'
];

//sanjay
const sanjay = [
    'Hello Sanjay,I am lucy!',
    'The name Sanjay is primarily a male name of Indian origin that means Victory Victory in battle or victory over judging self. A form of the name Sanjaya.',
    'ho gaya tera ? Ab gand mara bosdike',
    'Tum Chutiya ho ',
    'HAhHAhahahHAhahaHAhahaahhaahahahahhahah'
];

//subhash
const subhash = [
    'Hello Subhash,I am lucy!',
    'Name Subhash in the Indian origin, means Soft spoken; Eloquent. Name Subhash is of Indian origin and is a Boy name. People with name Subhash are usually Hindu by religion.',
    'ho gaya tera ? Ab gand mara bosdike',
    'Tum Chutiya ho ',
    'Are kyu paka raha hai ?? padh le Bosdike'
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

    speech.text = 'Sorry, Your English is so bad, I am not getting you! ';

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

if (message.includes('who are you')) {
    const finalText = 
             identity[Math.floor(Math.random() * identity.length)];
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


 //RAkesh
 if(message.includes('rakesh' || 'Rakesh')){
     const finalText = 
     rakesh[Math.floor(Math.random()* rakesh.length)];
     speech.text = finalText;
 }

 //sanjay
 if(message.includes('sanjay' || 'Sanjay')){
     const finalText = 
     sanjay[Math.floor(Math.random()* sanjay.length)];
     speech.text = finalText;
 }
 //subhash

 if(message.includes('subhash' || 'Subhash')){
     const finalText = 
     subhash[Math.floor(Math.random()* subhash.length)];
     speech.text = finalText;
 }

    speech.volume = 2;
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  
}
