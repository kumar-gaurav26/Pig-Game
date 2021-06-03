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
Question.prototype.checkAnswer=function(x){
	if(x===this.correct)
{
	console.log('Correct answer!!');
}
else
{
	console.log('Wrong answer!,Try again');
}
}
Question.prototype.infinite=function()
{
	
	for(; ;)
	{
		var questions=[q1,q2,q3];
var n=Math.floor(Math.random()*questions.length);
		questions[n].displayQuestion();//this gives the random question and will display it.

var answer=parseInt(prompt('Choose the correct answer'));
questions[n].checkAnswer(answer);
}
	}

var y;
var q1=new Question('Which city is the capital of India?',['New Delhi','Kolkata','Mumbai'],0);
var q2=new Question('What is the S.I unit of mass?',['cm','kg','feet'],1);
var q3=new Question('Which team won the first edition of Indian Premier League?',['Mumbai Indians','Chennai Super Kings','Rajasthan Royals'],2);
var questions=[q1,q2,q3];
var n=Math.floor(Math.random()*questions.length);
questions[n].displayQuestion();//this gives the random question and will display it.

var answer=parseInt(prompt('Choose the correct answer'));
questions[n].checkAnswer(answer);
questions[n].infinite();
