const startButton = document.querySelector('#start-button');

startButton.addEventListener('click', () => {
  window.location.href = './html/shelter.html';
});

const helpButton = document.querySelector('#help-button');

helpButton.addEventListener('click', () => {
  window.location.href = './html/help.html';
});

const creditsButton = document.querySelector('#credits-button');

creditsButton.addEventListener('click', () => {
  window.location.href = './html/credits.html';
});

const updatesButton = document.querySelector('#updates-button');

updatesButton.addEventListener('click', () => {
  window.location.href = './html/updates.html';
});

const discordButton = document.querySelector('#discord-button');

discordButton.addEventListener('click', () => {
  window.open('https://discord.gg/Zdqr7UZ7Ka', '_blank');
});