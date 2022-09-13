var readlineSync=require('readline-sync');
console.log("This is Naruto fan quiz, have fun!😸 ")
var userName=readlineSync.question("What's your name ? ");
console.log("\nWelcome "+userName+" \nLets see, How much you love Naruto anime 😁 ")
//count score 
var countScore=0 

//check if user answer is valid or not
function checkAnswer(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()) 
  {
    console.log("That's correct 😄 ");
    countScore++;
    console.log("Current score: "+countScore);
  }
  else
    console.log("Try next questions 😉");
console.log("---------------------");
}

var questionList=[
  {
    question : "\nWhat jutsu is Naruto most proficient in? ",
    answer :"Shadow Clone Technique"
  },
  {
    question : "\nWho is naruto father full name? ",
    answer :"Minato Namikaze"
  },
  {question : "\nWhere do Naruto live? hint:🍀 ",
    answer :"Hidden Leaf Village"},
    {question : "\nWho is the most famous shinobi in naruto? ",
    answer :"Kakashi"},
    {question : "\nWhat team is Kakashi the leader of? ",
    answer :"Team 7"}

]

var highScore=[{
  Name:"Samarth",
  score:5
},{
  Name:"Rahul",
  score:2
}]


for(var i=0;i<questionList.length;i++)
{
  checkAnswer(questionList[i].question,questionList[i].answer);
}


console.log("\nAll right,You're SCORED  "+countScore);
console.log("------");
console.log("\nName of High scorer:\n ")
for(var i=0;i<highScore.length;i++)
{
  console.log("Name: "+highScore[i].Name+"\nscore: "+highScore[i].score);
}