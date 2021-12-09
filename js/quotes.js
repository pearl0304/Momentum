const quotes = [
    {
        quote : 'Happiness lies in the joy of achievement and the thrill of creative effort. ',
        author : 'Theodore Roosevelt', 
    },
    {
        quote : 'The results you achieve will be in direct proportion to the effort you apply.',
        author : 'Denis Waitley', 
    },
    {
        quote : 'Your dreams will take time. It will take efforts and require dedication and sacrifice, But in the end it WILL be worth it.',
        author : 'Anurag Prakash Ray ', 
    },
    {
        quote : 'Nothing worth having was ever achieved without effort.',
        author : 'Theodore Roosevelt', 
    },
    {
        quote : 'Continuous effort, not strength or intelligence, is the key to unlocking our porential.',
        author : 'Winston Churchill', 
    },
    {
        quote : 'Thinking well is wise; planning well wiser; doing well wisest and best of all.',
        author : 'Persian Proverb', 
    },
    {
        quote : 'There is only one thing in life you can control; Your own effort.',
        author : 'Mark Cuban', 
    },
    {
        quote : 'Satisfaction lies in the Effort, not in the attainment, full effort is full victory.',
        author : 'Mahatma Gandhi', 
    },
    {
        quote : 'Strength and growth come only through continuous effort and struggle.',
        author : 'Napoleon Hill', 
    },
    {
        quote : 'Success is the sum of small efforts - repeated day in and day out',
        author : 'Rovert Collier', 
    }
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)] 
quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author