var Start_Button = document.getElementById("Start")
var Restart_Button = document.getElementById("Restart")
var Stop_Button = document.getElementById("Stop")
var The_Time_Out_Holder = ""
var Hour_Save = 0
var Minets = 0
var Secsons = 0 
function Getting_The_Input_info_and_save_them()
{//getting the info from the input and saving them to an var
    Hour_Save = document.getElementById("Hour").value 
    Minets = document.getElementById("Minets").value
    Secsons = document.getElementById("Sencons").value
}
function Updating_The_Inputs()
{
    //updeting the input so the user can see what happen if it's work 
    document.getElementById("Hour").value = Hour_Save 
    document.getElementById("Minets").value = Minets
    document.getElementById("Sencons").value = Secsons
}
Start_Button.addEventListener("click", function Start()
{
    //console.log("The Hour: "+ Hour_Save + " The Mintes: " + Minets + " The Secones: " + Secsons);
    Getting_The_Input_info_and_save_them()
    setTimeout(The_timer_main, 1000)
})
Restart_Button.addEventListener("click", function Restarting()
{
    //this well stop the timer and make all input to 00
    clearTimeout(The_Time_Out_Holder)
    document.getElementById("Hour").value =  0
    document.getElementById("Minets").value =  0
    document.getElementById("Sencons").value = 0
})
Stop_Button.addEventListener("click", function Stop()
{
    //stoping the timer
    clearTimeout(The_Time_Out_Holder)
})

function The_timer_main()
{
    
    The_Time_Out_Holder = setTimeout(The_timer_main, 1000)
    // console.log("The Hour: "+ Hour_Save + " The Mintes: " + Minets + " The Secones: " + Secsons);
    if(Secsons <= 0)
    {
        //chencking if there no more secsone 
        if(Minets <= 0)
        {
            //chencking if there no more mintes 
            if(Hour_Save <= 0 )
            {
                //chencking if there no more secsone to the hour
               clearTimeout(The_Time_Out_Holder)
            }
            else
            { 
                //takeing one away from hour and given the secons =  59 and mints = 59
                Hour_Save--
                Minets = 59
                Secsons = 59 
            } 
        }
        else
        {
            //takeing one away from minets and given the secons 59
            Minets--
            Secsons = 59
        }
    }
    else
    {
        Secsons--
    }
    Updating_The_Inputs()
}