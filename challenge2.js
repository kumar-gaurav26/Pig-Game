function Question(question,answers,correct) {
	// body...
	this.question=question;
	this.answers=answers;
	this.correct=correct;
}
Question.prototype.displayQuestion=function(){
	console.log(this.question);
	for(var i=0;i<this.answers.length;i++)//as there are different number of answers for different questions.
	{
		console.log(i+':'+this.answers[i]);
	}
}
Question.prototype.checkAnswer=function(x,callback){
	var sc;
	if(x===this.correct)
{
	console.log('Correct answer!!');
	sc=callback(true);

}
else
{
	console.log('Wrong answer!,Try again');
	sc=callback(false);
}
this.displayScore(sc);
}
Question.prototype.displayScore=function(score){
	console.log('Your current Score is:'+score);
	console.log('---------------');
}
var q1=new Question('Which city is the capital of India?',['New Delhi','Kolkata','Mumbai'],0);
var q2=new Question('What is the S.I unit of mass?',['cm','kg','feet'],1);
var q3=new Question('Which team won the first edition of Indian Premier League?',['Mumbai Indians','Chennai Super Kings','Rajasthan Royals'],2);
var questions=[q1,q2,q3];
function score(correct){
	var sc=0;
	return function(correct){
	if(correct){
		return sc++;
	}
	return sc;
}
}
var keepScore=score();
function nextQuestion(){

	var n=Math.floor(Math.random()*questions.length);
questions[n].displayQuestion();//this gives the random question and will display it.

var answer=prompt('Choose the correct answer');
if(answer!=='exit'){
	questions[n].checkAnswer(parseInt(answer),keepScore);
	
nextQuestion();
}
}
nextQuestion();