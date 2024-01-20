const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


function openMenu(){
    let x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  
  }
  function closeBtn(){
      document.getElementById("menu").style.display = "none";
  }

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





// ########################### game of throne   #################################

const gameofthrones = [
     ' "A mind needs books as a sword needs a whetstone, if it is to keep its edge." — Tyrion Lannister, A Game of Thrones ',

' "A ruler who hides behind paid executioners soon forgets what death is." — Ned Stark, A Game of Thrones ' ,

' "Bran thought about it. Can a man still be brave if hes afraid? That is the only time a man can be brave, his father told him." — Bran & Ned Stark, A Game of Thrones ',

' "Death is so terribly final, while life is full of possibilities.” — Tyrion Lannister, A Game of Thrones ',

' "Dont call me Lord Snow. The dwarf lifted an eyebrow. Would you rather be called the Imp? Let them see that their words can cut you and you will never be free of the mockery. If they want to give you a name take it make it your own. Then they cant hurt you with it anymore." — Jon Snow and Tyrion Lannister, A Game of Thrones ',

' "Fear cuts deeper than swords." — Arya Stark, A Game of Thrones ' ,

' "Laughter is poison to fear." — Catelyn Stark, A Game of Thrones ',

' "Some old wounds never truly heal, and bleed again at the slightest word." — A Game of Thrones ',

' "The common people pray for rain, healthy children, and a summer that never ends Ser Jorah told her. It is no matter to them if the high lords play their game of thrones, so long as they are left in peace. He gave a shrug. They never are." — Jorah Mormont and Daenerys Tagaryen, A Game of Thrones ',


' "The man who passes the sentence should swing the sword. If you would take a mans life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die." — Ned Stark, A Game of Thrones',

' "The things we love destroy us every time, lad. Remember that." — Commander Mormont, A Game of Thrones ',

' "They say night’s beauties fade at dawn, and the children of wine are oft disowned in the morning light." — Barristan Selmy, A Game of Thrones ' ,

' "We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy." — Aemon Targaryen, A Game of Thrones ' ,

' "What do we say to the Lord of Death? Not today." — Syrio Forel, A Game of Thrones',

' "What is honor compared to a womans love? What is duty against the feel of a newborn son in your arms . . . or the memory of a brothers smile? Wind and words. Wind and words. We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy." — Master Aemon, A Game of Thrones',

' "When the snows fall and the white winds blow, the lone wolf dies but the pack survives." — Ned Stark, A Game of Thrones',

' "When you play the game of thrones, you win or you die. There is no middle ground.” — Cersei Lannister, A Game of Thrones',

' "Why is it that when one man builds a wall, the next man immediately needs to know whats on the other side?" — Tyrion Lannister, A Game of Thrones ',

' "Wind and words. We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy." — Jon Snow, A Game of Thrones',

' "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness." — Tyrion Lannister, A Game of Thrones ',

' "Winter is coming." — A Game of Thrones',

' "I will hurt you for this. I dont know how yet, but give me time. A day will come when you think yourself safe and happy, and suddenly your joy will turn to ashes in your mouth, and youll know the debt is paid." — Tyrion Lannister, A Clash of Kings',

' "People often claim to hunger for truth, but seldom like the taste when its served up." — Tyrion Lannister, A Clash of Kings',

' "When you tear out a mans tongue, you are not proving him a liar, youre only telling the world that you fear what he might say." — Tyrion Lannister, A Clash of Kings',

' "Every man must die, Jon Snow. But first he must live." — Ygritte, A Storm of Swords',

' "Drifting snowflakes brushed her face as light as lover’s kisses, and melted on her cheeks. At the center of the garden, beside the statue of the weeping woman that lay broken and half-buried on the ground, she turned her face up to the sky and closed her eyes. She could feel the snow on her lashes, taste it on her lips. It was the taste of Winterfell. The taste of innocence. The taste of dreams." — A Storm of Swords',

' "The way the world is made. The truth is all around you, plain to behold. The night is dark and full of terrors, the day bright and beautiful and full of hope. One is black, the other white. There is ice and there is fire. Hate and love. Bitter and sweet. Male and female. Pain and pleasure. Winter and summer. Evil and good.” She took a step toward him. “Death and life. Everywhere, opposites. Everywhere, the war.” — Melisandre, A Storm of Swords',

' "We look up at the same stars and see such different things." — Jon Snow, A Storm of Swords',

' "Needle was Robb and Bran and Rickon, her mother and her father, even Sansa. Needle was Winterfells grey walls, and the laughter of its people. Needle was the summer snows, Old Nans stories, the heart tree with its red leaves and scary face, the warm earthy smell of the glass gardens, the sound of the north wind rattling the shutters of her room. Needle was Jon Snows smile. He used to mess my hair and call me "little sister," she remembered, and suddenly there were tears in her eyes." — Arya Stark, A Feast for Crows',

' "Who knows more of gods than I? Horse gods and fire gods, gods made of gold with gemstone eyes, gods carved of cedar wood, gods chiseled into mountains, gods of empty air . . . I know them all. I have seen their peoples garland them with flowers, and shed the blood of goats and bulls and children in their names. And I have heard the prayers, in half a hundred tongues. Cure my withered leg, make the maiden love me, grant me a healthy son. Save me, succor me, make me wealthy . . . protect me! Protect me from mine enemies, protect me from the darkness, protect me from the crabs inside my belly, from the horselords, from the slavers, from the sellswords at my door. Protect me from the Silence." He laughed. "Godless? Why, Aeron, I am the godliest man ever to raise sail! You serve one god, Damphair, but I have served ten thousand. From Ib to Asshai, when men see my sails, they pray." — Euron Greyjoy, A Feast For Crows',

' "Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm or the gods or love. Illusions. Only the ladder is real. The climb is all there is." — Petyr Baelish, Season 3',

' "Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come." — Vow of the Nights Watch, A Song of Ice and Fire',
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


 //Dark quote
 if (message.includes('dark')) {
    const finalText = 
             dark[Math.floor(Math.random() * dark.length)];
    speech.text = finalText;

     
 }


if (message.includes('got')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText;     
 }

 if (message.includes('game of thrones')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText;   
 }
 if (message.includes('Ice and fire')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText; 
 }

 if (message.includes('winter is coming')) {
    const finalText = 
    gameofthrones[Math.floor(Math.random() * gameofthrones.length)];
    speech.text = finalText;     
 }




    speech.volume = 2;
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  
}
