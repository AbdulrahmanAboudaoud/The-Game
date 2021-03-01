function myFunction()  {
	alert("Remember ! only by answering correctly you will be able to keep playing so think twice before answering ! ")
 
    
    var choice = prompt("which path are you going to choose ? html or math ")

if (choice == "html"){

        alert("Good choice! I asked the last visitor to build me a web page but he made some mistakes in different places ( he was a good meal for my monsters i guess! )  If you want to get out of this castle you should correct his mistakes .. otherwise i think my monsters will not refuse a dessert . dont be nervous we will warm up with general information question.")

        var question1 = prompt(" What does html stand for ?")
        question1 = question1.trim();
        if (question1 == "hyper text markup language"){

            alert("That's right well done ! you got a reward (key to the 2nd level)")
            alert ("Now to the real deal !")

        var question2 = prompt("I asked him to type ( castle game) in the largest heading . he used the <head> element . type only the name of the element he should have used  ")    
        question2 = question2.trim();     
        if (question2 == "h1"){
            
            alert("Correct! you got a reward (key to the 3rd  level) keep going .")

        var question3 = prompt("I asked for a line break using the correct element for html  and he used <break> type only the name of the element he should have used")
        question3 = question3.trim();
        if (question3 == "br"){
        
            alert("well played ! you have answered all 3 questions right ")
            alert("Be careful ! you are 1 question away from your home.")

        var question4 = prompt("I asked him to define an important text for me and he used the <i> element type only the name of the element he should have used")
        question4 = question4.trim();
        if (question4 == "strong"){
        
            alert("unfortunately you are not in our food list tonight. Congrats you are allowed to leave the castle . safe trip home !")


        }

        else {
        
        alert("oh ! you were only 1 question a way from going home . well sad for u but not for my monsters i guess :)")
        
        }

        }



        else {
       
        alert("oh! that was close but never gave up, good luck next try")
       
        }

        }


        else {
        
        alert("i'm afraid its not correct , beter luck next time ! ")
        
        }

        }


        else {
        
        alert("That is not a good start ! try again mebay ? ")


        }


        }

else if (choice = "math"){
       
        alert ("Good choice ! this one is actually easier than (html path) don't be happy its not for free this time you win if i get the answers right.")
        alert("i will show you a mathic trick ! if you want you can try it on paper too, Good luck. ")

        var month = prompt("step 1- type in the month you were born in (in numbers !)")
        var x = Number(month);

        if (month <= 0) {
        
            alert("Pls add a valid number")
        
        }



        else if (month > 12){
        
            alert("pls add a valid number")
        
        }


        else{

            alert("step 2-Now multiply this number with 2 then add 5 to the answer")
            var z = 2;
            var c = 5;
            var v = (x * 2) + 5;
            alert("your answer should be: " + "" + v);

            var age = prompt("step 3-type in your age")
            var s = Number(age);  
            alert("step 4-Now multiply the number you got after step 2 with 50 then add your age to it")
            var a = 50;
            var d = (v * 50) + s;
            alert("your answer should be: " + "" + d);
            alert("step 5-Now the number you got - 365")
            var h = d - 365;
            alert("your answer should be: " + "" + h);
            alert("step 6-Now the number you got + 115 ")
            var l = h + 115;
            alert("and now for the magical moment ! ")
            alert("you will get a number from 3 or 4 digits")
            alert("the first and second digits from the right side it's your age")
            alert("the third ore (3rd & 4th) digits will be the month you were born in")
            alert("let us check: " + "" +l);
            alert("and ofcourse iam right as i have always been. lucky for you! you did the steps right and i was right ")
            alert("so as promessed you can get out of my castle. safe trip home!")


        }


        }



        }




    




















