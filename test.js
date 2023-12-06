var Main_text_items = document.getElementById("Main_items")
var Numbers = [20,24,4,3,10,7,13,6,19]


for(var x = 0; x <= Numbers.length + 1; x++)
{ 
    //console.log(Numbers);
    console.log(x);
   if(Numbers[x] > Numbers[x + 1] )
   {    
    var saving_the_number = Numbers[x ]
    //saving the number one the arry
    var saving_the_seconde_number = Numbers[x + 1 ]
    //saving the  sec number of the arry
    Numbers[x] = saving_the_seconde_number
    //updating
    Numbers[x + 1]  = saving_the_number
    Main_text_items.textContent = Numbers  
    //updating the text
    x = 0 
   }
   else 
   {
    
    Main_text_items.textContent = Numbers
    
   }
}

