//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function eventOrOdd(number){
   if(number % 2 == 0){
      return "event";
   }else{
      return "odd";
   }
}


//Another Solution

function eventOdd(value){
   return value % 2 == 0 ? "event" : "odd";
}

