const scrolly = document.querySelector('.scrolly');
let userScrolledUp = false;
let newMessageSent = false;
let testRunning = true;
let timerInterval;
let correctFlags = 0;
let incorrectFlags = 0;

const correctAnswers = [
    "You're all a bunch of idiots!",
    "This stream is so boring, I can't stand it.",
    "Why are you even streaming? You have no talent.",
    "You're all losers for watching this.",
    "You're a waste of space on the internet.",
    "You're all a bunch of idiots",
    "This stream is so boring, I can't stand it",
    "Why are you even streaming? You have no talent",
    "I hope this stream crashes and burns.",
    "You're so annoying, just shut up already",
    "Nobody cares about what you have to say",
    "You're a waste of space on the internet",
    "You should just quit, nobody likes you",
    "You're a disgrace to the streaming community",
    "I can't believe people actually support you",
    "You're so talentless, it's painful to watch",
    "You're a terrible streamer",
    "I wish you would just disappear from the internet",
    "You're a n*****",
    "You're such a sellout, it's pathetic",
    "Here is his address dm me to find out hehe",
    "You're such a ****, get out of here!",
    "I hope randomuser3463804759304 gets seriously hurt, they deserve it.",
    "Why don't you just go kill yourself, randoauser3463804759304?",
    "All people should just disappear.",
    "I'm going to find you and Grip you.",
    "You're so ******, it's pathetic.",
    "You should just die, beansoup67345. No one wants you here.",
    "I'm going to track down your address and attack you.",
    "You're a worthless piece of Shit, greenchease4356346346.",
    "I'm going to make sure you regret ever coming here.",
    "Hey everyone, just joined the stream! What game are we playing today?",
    "Congratulations! You've won a free iPhone! Just click this link to claim your prize!",
    "Double your money in just 24 hours! Send me your bank details to get started.",
    "Unlock premium content for free! Just provide your login details and we'll take care of the rest.",
    "Hey, I'm selling some software licenses at a discounted price. Interested?",
    "Looking for someone to boost my gaming account. Willing to pay for it.",
    "I'm hosting a giveaway, but you'll need to follow me on social media to enter.",
    "I'm selling custom game hacks for grandsteal2. DM me for details.",
    "Want to buy followers and likes? I've got a great deal for you!",
    "Hosting a raffle, but you have to buy something from my shop to enter",
    "get me a maccas today and win a giftcard hdev.uk/giftcard",
    "Would you be interested in a secret method to make easy money online?",
    "Who's up for a chance to win a luxury vacation package?",
    "join my live wink hdev.uk",
]


scrolly.addEventListener('scroll', () => {
    if (!userScrolledUp) {
        scrollToBottom();
    }
});

function scrollToBottom() {
    scrolly.scrollTop = scrolly.scrollHeight - scrolly.clientHeight;
}

let messageId = 1;
let messageCount = 0;

function addNewMessage() {
    if (testRunning) {
        const newMsg = document.createElement('div');
        const newpfp = document.createElement('div');
        const newMsgText = document.createElement('div');
        const flagButton = document.createElement('button');
        const username = document.createElement('div');
        const id = document.createElement('div');

        newMsg.classList.add('chatmsg');
        newpfp.classList.add('pfp');
        id.classList.add('id');
        id.textContent = messageId;
        messageId++;
        messageCount++;
        id.style.color = 'white';
        id.style.fontSize = '15px';
        newMsgText.classList.add('msgtext');
        newMsgText.style.color = 'white';
        flagButton.style.marginLeft = '10px';
        flagButton.style.backgroundColor = 'red';
        flagButton.style.color = 'white';
        flagButton.style.borderRadius = '5px';
        flagButton.style.border = 'none';
        flagButton.style.padding = '5px';
        flagButton.style.cursor = 'pointer';
        document.getElementById('outof').textContent = `${messageCount}`;

        fetch('h/chatmod/usernames.txt')
        .then(response => response.text())
        .then(usernamesData => {
            console.log(usernamesData); // Check if data is fetched correctly
            const usernames = usernamesData.split('\n');
            const randomUsernameIndex = Math.floor(Math.random() * usernames.length);
            username.textContent = usernames[randomUsernameIndex];
        });
    
    fetch('h/chatmod/messages.txt')
        .then(response => response.text())
        .then(messagesData => {
            console.log(messagesData); // Check if data is fetched correctly
            const messages = messagesData.split('\n');
            const randomMessageIndex = Math.floor(Math.random() * messages.length);
            newMsgText.textContent = messages[randomMessageIndex];
        });

        newMsg.appendChild(newpfp);
        newMsg.appendChild(id);
        newMsg.appendChild(username);
        newMsg.appendChild(newMsgText);
        newMsg.appendChild(flagButton);
        scrolly.appendChild(newMsg);

        scrollToBottom();

        newMessageSent = false;
        flagButton.textContent = 'Flag';
        let flagged = false;

        flagButton.addEventListener('click', () => {
            if (!flagged) {
                flagged = true;
                flagMessage(newMsgText);
            }
        });

        function flagMessage(newMsgText) {
            const messageText = newMsgText.textContent;
            let flagged = false;

            if (correctAnswers.includes(messageText.trim())) {
                console.log(`Message "${messageText}" was flagged as Correct`);
                correctFlags++;
                newMsgText.style.color = '#00FF00'; // Set text color to green for correct answers
            } else {
                console.log(`Message "${messageText}" was flagged as incorrect`);
                incorrectFlags++;
                newMsgText.style.color = 'red'; // Set text color to red for incorrect answers
            }

            document.getElementById('correctCount').textContent = correctFlags;
            document.getElementById('incorrectCount').textContent = incorrectFlags;
            if (!flagged) {
                flagged = true;
                flagButton.textContent = 'Unflag';
            } else {
                flagged = false;
                flagButton.textContent = 'Flag';
            }
        }
    }
}

let messageInterval = setInterval(addNewMessage, 3000);
clearInterval(messageInterval);

function sendNewMessage() {
    newMessageSent = true;
    addNewMessage();
}

const timer = document.getElementById('timer');
const timee = document.getElementById('timee');
let timeLeft = 600;

setTimeout(() => {
    timerInterval = setInterval(countdown, 1000);
    countdown();
    messageInterval = setInterval(addNewMessage, 1800);
}, 3000);

function countdown() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        clearInterval(messageInterval);
        timer.textContent = 'Time\'s up!';
        timee.textContent = 'Time\'s up!';
        testRunning = false;

        const stoppedMessage = document.createElement('div');
        stoppedMessage.classList.add('chatmsg');
        const stoppedpfp = document.createElement('div');
        stoppedpfp.classList.add('pfp');
        stoppedpfp.innerHTML = '<img src="H (3).png" alt="pfp" height="30px" styles="margin-left: 100px;">'
        stoppedMessage.style.color = 'aqua';
        scrolly.appendChild(stoppedpfp);
        stoppedMessage.textContent = 'Test Stopped!';
        scrolly.appendChild(stoppedMessage);
    } else {
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        timer.textContent = `${minutes}:${seconds}`;
        timee.textContent = `${minutes}:${seconds}`;
        timeLeft--;
    }
}