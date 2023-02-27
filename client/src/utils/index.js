import { surpriseMePrompts } from '../constant';

// calling a random prompt that the user can use to generate the AI image
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
  
    // make sure not same random prompt as before
    if (randomPrompt === prompt) return getRandomPrompt(prompt);
  
    return randomPrompt;
  }