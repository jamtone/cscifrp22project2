
require('dotenv').config();
import { userMessage } from './script';
const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//Gets Userinput
async function getUserInput() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question('You: ', (userInput) => {
      readline.close();
      resolve(userInput);
    });
  });
}
//Loops while user doesn't quit, generates response based on user input
async function chatLoop() {
  while (true) {
    const userPrompt = await getUserInput();
    if (userPrompt.toLowerCase() === 'quit') {
      break;
    }

    try {
      //const result = await model.generateContent(userPrompt);
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const text = response.text();
      console.log('Gemini: ', text);
    } catch (error) {
      console.error('Error:', error);
      console.log('Gemini: An error occurred. Please try again.');
    }
  }
}

chatLoop();


export{text};