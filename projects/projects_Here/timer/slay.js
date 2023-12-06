var the_text_button = document.getElementById("Next_button")
var The_back_button = document.getElementById("Back_button")
var The_number_of_the_stye = document.getElementById("The_stlye_Number")
var The_stlye_sheet_link = document.getElementById("The_style_sheet")
var Numbers = 0
the_text_button.addEventListener("click", function next()
{
    if(Numbers <= 10)
    {
        Numbers++
        The_number_of_the_stye.textContent = "No: "+ Numbers
        Update_the_button_and_other_items()
        
    }
    


})
The_back_button.addEventListener("click", function Back_button()
{
    if(Numbers >= 1)
    {
        Numbers--
        The_number_of_the_stye.textContent =  "No: "+ Numbers
        Update_the_button_and_other_items()
    }

})

function Update_the_button_and_other_items()
{

    switch(Numbers)
    {   

        case 0:
            The_style_sheet.href = "Timer.css"
        break;
        
        case 1:
            The_style_sheet.href = "Time_stlye_two.css"
        break;
    }
}