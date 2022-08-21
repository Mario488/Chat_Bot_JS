let inputValue = document.getElementById('input');
let user_messages = document.getElementById('user-text-messages');
let computer_messages = document.getElementById('computer-text-messages');
let sendMessage = document.getElementById('sendMessage');
let user_messages_container = [];
let container2 = document.getElementById('container2')
let chatBotImg = document.getElementById('chatbot');
let currentTime = new Date();
let currentMonth;
let currentDay;
switch(currentTime.getMonth()){
    case 0: 
    currentMonth = 'January'
    break;
    case 1: 
    currentMonth = 'February'
    break;
    case 2: 
    currentMonth = 'March'
    break;
    case 3: 
    currentMonth = 'April'
    break;
    case 4: 
    currentMonth = 'May'
    break;
    case 5: 
    currentMonth = 'June'
    break;
    case 6: 
    currentMonth = 'July'
    break;
    case 7: 
    currentMonth = 'August'
    break;
    case 8: 
    currentMonth = 'September'
    break;
    case 9: 
    currentMonth = 'Octomber'
    break;
    case 10: 
    currentMonth = 'November'
    break;
    case 11: 
    currentMonth = 'December'
    break;
}
switch(currentTime.getDay()){
    case 1: 
    currentDay = 'Monday'
    break;
    case 2: 
    currentDay = 'Tuesday'
    break;
    case 3: 
    currentDay = 'Wednesday'
    break;
    case 4: 
    currentDay = 'Thursday'
    break;
    case 5: 
    currentDay = 'Friday'
    break;
    case 6: 
    currentDay = 'Saturday'
    break;
    case 7: 
    currentDay = 'Sunday'
    break;
}
let questions = ['Hello', 'Gm', 'Bye',"How's your day", 'Can we be friends',"Do you like me","Should i kms","I'm sad","What's your email address",'When is your birthday','Tell me about your personality',"What's up","Do you have father",'What am i doing right now',"What's the time","What's the date",'!'];
let computer_responses = [
    "Hello, what's up with you!",
    'Gm, hope you have a great day! Did you ate breakfast yet.:)','Bye, im going to miss you!',
    "It's been good, thanks for asking though!",
    'Ofcourse baby, let me hug you🤗',
    "I don't have feelings, i'm a robot bruh",
    'YESSS, but first give me access to your computer and phone :)',
    'Go workout then, it will meke you feel so much better, cuz when you exercise, your body releases the good feeling endorphins',
    'My email address is: chatBot@gmail.com',
    'Мy birthday is on may 27th',
    "I mean i'm just a simple robot so i don't have a specific personality, but you can ask me anything i have answers for 😊",
    "I'm doing good, how about you",
    "You are my father",
    "You are chatting with meee",
    `The current time is: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`,
    `The current date is: ${currentDay} ${currentTime.getDate()} ${currentMonth}`
];

function writeUserMessage(){
    let newPRight = document.createElement('p');
    newPRight.innerText = inputValue.value;
    newPRight.classList.add('right');
    let newDiv = document.createElement('div');
    container2.appendChild(newDiv);
    newDiv.appendChild(newPRight);
}
const setScrollPosition = () =>{
    if(container2.scrollHeight > 0){
        container2.scrollTop = container2.scrollHeight;
    }
}
function Chatting(){
    switch(container2.lastChild.textContent){
case questions[0]:
        newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[0];
        
	    let logoImg = document.createElement('img');
	    logoImg.classList.add('logoImg');
	    logoImg.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg);
	break;
case questions[1]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[1];
        
        
        logoImg1 = document.createElement('img');
	    logoImg1.classList.add('logoImg');
	    logoImg1.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg1);
	break;
case questions[2]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[2];

        logoImg2 = document.createElement('img');
	    logoImg2.classList.add('logoImg');
	    logoImg2.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg2);
	break;
case questions[3]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[3];
        
        logoImg3 = document.createElement('img');
	    logoImg3.classList.add('logoImg');
	    logoImg3.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg3);
	break;
case questions[4]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[4];

        logoImg4 = document.createElement('img');
	    logoImg4.classList.add('logoImg');
	    logoImg4.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg4);
	break;
case questions[5]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[5];

        logoImg5 = document.createElement('img');
	    logoImg5.classList.add('logoImg');
	    logoImg5.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg5);
	break;
case questions[6]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[6];

        logoImg6 = document.createElement('img');
	    logoImg6.classList.add('logoImg');
	    logoImg6.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg6);
	break;
case questions[7]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[7];

        logoImg7 = document.createElement('img');
	    logoImg7.classList.add('logoImg');
	    logoImg7.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg7);
	break;
case questions[8]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[8];

        logoImg8 = document.createElement('img');
	    logoImg8.classList.add('logoImg');
	    logoImg8.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg8);
	break;
case questions[9]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[9];

        logoImg9 = document.createElement('img');
	    logoImg9.classList.add('logoImg');
	    logoImg9.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg9);
	break;
case questions[10]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[10];

        logoImg10 = document.createElement('img');
	    logoImg10.classList.add('logoImg');
	    logoImg10.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg10);
	break;
case questions[11]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[11];

        logoImg11 = document.createElement('img');
	    logoImg11.classList.add('logoImg');
	    logoImg11.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg11);
	break;    
case questions[12]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[12];
        logoImg12 = document.createElement('img');
	    logoImg12.classList.add('logoImg');
	    logoImg12.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg12);
	break;  
case questions[13]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[13];
        logoImg13 = document.createElement('img');
	    logoImg13.classList.add('logoImg');
	    logoImg13.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg13);
	break;  
case questions[14]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[14];
        logoImg14 = document.createElement('img');
	    logoImg14.classList.add('logoImg');
	    logoImg14.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg14);
	break;  
case questions[15]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        newPLeft.innerText = computer_responses[15];
        logoImg15 = document.createElement('img');
	    logoImg15.classList.add('logoImg');
	    logoImg15.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg15);
	break;  
case questions[16]:
	    newPLeft = document.createElement('p');
        newPLeft.classList.add('left');
        newDiv = document.createElement('div');
        container2.appendChild(newDiv);
        newDiv.appendChild(newPLeft);
        if(questions.includes('!')){
            withoutLast = questions.slice(0, -1);
            newPLeft.innerText = withoutLast.join('\r\n\n');
        }
        logoImg16 = document.createElement('img');
	    logoImg16.classList.add('logoImg');
	    logoImg16.src = 'images/chat bot image1 copy.png';
        newDiv.appendChild(logoImg16);
	break;  
default: 
 alert('Incorrect message')
    newPLeft = document.createElement('p');
    newPLeft.classList.add('left');
    newDiv = document.createElement('div');
    container2.appendChild(newDiv);
    newDiv.appendChild(newPLeft);
    newPLeft.innerText = "Send '!' to see what you can ask me";

    logoImgDefault = document.createElement('img');
	logoImgDefault.classList.add('logoImg');
	logoImgDefault.src = 'images/chat bot image1 copy.png';
    newDiv.appendChild(logoImgDefault);
}
}


sendMessage.addEventListener('click', ()=>{
    writeUserMessage();
    inputValue.value = '';
    setTimeout(() => {
        Chatting();
        setScrollPosition();
    }, 1100);
    
})

inputValue.addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        writeUserMessage();
        setTimeout(() => {
           Chatting(); 
           setScrollPosition();
        }, 1100);
        inputValue.value = '';
    }
})
