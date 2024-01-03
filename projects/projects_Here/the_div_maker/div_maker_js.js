//this is where all the div all goto 
var Div_maker = document.getElementById("Div_maker")

var Start = document.getElementById("Start")
Start.addEventListener("click" , function Update_all_div_settinge_from_user_input()
//this will hold all the settings/inputs from the user 
{
    //div one user input settinges 
        //this has the updated hight and with data from the user
        var Div_one_hight_and_width_update_setting = ".Div_one{width:" + document.getElementById("Main_width_1").value + "%;height: " + document.getElementById("Main_hight_1" ).value + "px;}";
        //this has all the colour 
        var Div_one_background_colour = ".Div_one{backgeound-color:" + document.getElementById("Main_colour_1").value + ";}";
    
    //div two user input settinges 
        //this has the updated hight and with data from the user
        var Div_two_hight_and_width_update_setting = ".Div_two{width:" + document.getElementById("Main_width_2").value + "%;height: " + document.getElementById("Main_hight_2").value+ "px;}";
        //this has all the colour 
        var Div_two_background_colour = ".Div_two{backgeound-color:" + document.getElementById("Main_colour_2").value + ";}" ;

    //div three user input settinges 
        //this has the updated hight and with data from the user
        var Div_three_hight_and_width_update_setting = ".Div_three{width:" + document.getElementById("Main_width_3").value + "%;height: " + document.getElementById("Main_hight_3").value + "px;}";
        //this has all the colour 
        var Div_three_background_colour = ".Div_three{backgeound-color:" + document.getElementById("Main_colour_3").value + ";}";

    //divs animanto for the loading colour 
      //div one colours 
        var Div_one_anim_colourss = "@keyframes The_first_div {0%{backgournd-color:"+document.getElementById("Main_ani_1").value+";}50%{backgournd-color:"+document.getElementById("Main_ani_1_2").value+";}70%{backgournd-color:"+document.getElementById("Main_ani_1_3").value+";}100%{backgournd-color:"+document.getElementById("Main_colour_1").value+";}}"

      //div two colours 
        var Div_two_anim_colourss = "@keyframes The_first_div {0%{backgournd-color:"+document.getElementById("Main_ani_2_1").value+";}50%{backgournd-color:"+document.getElementById("Main_ani_2_2").value+";}70%{backgournd-color:"+document.getElementById("Main_ani_2_3").value+";}100%{backgournd-color:"+document.getElementById("Main_colour_2").value+";}}"
        
      //div three colours 
        var Div_three_anim_colourss = "@keyframes The_first_div {0%{backgournd-color:"+document.getElementById("Main_ani_3_1").value+";}50%{backgournd-color:"+document.getElementById("Main_ani_3_2").value+";}70%{backgournd-color:"+document.getElementById("Main_ani_3_3").value+";}100%{backgournd-color:"+document.getElementById("Main_colour_3").value+";}}"
    

    //making_the_stlye_sheet_here
    var style_div_one = document.createElement("style")
    //savinf the info by innerhtim
    style_div_one.innerHTML = Div_one_hight_and_width_update_setting + Div_one_background_colour + Div_one_anim_colourss + Div_two_hight_and_width_update_setting+Div_two_background_colour +Div_three_hight_and_width_update_setting+Div_three_background_colour+Div_two_anim_colourss+Div_three_anim_colourss
    document.getElementById("User_dont_need_this").appendChild(style_div_one)
    //website_got_the infore now going to make the div 
    Starting_Making_the_divs()
    
})

function Starting_Making_the_divs()
{
    making_the_divs()
    var Max_div_can_be_made = document.getElementById("Max_divs")
    document.getElementById("Max_div_number").textContent = Max_div_can_be_made.value
    var x = 0 
    function making_the_divs()
    {

            if(x == document.getElementById("Max_divs").value)
            {
                clearTimeout(the_timer)
            }
            else
            {
                the_timer = setTimeout(making_the_divs, document.getElementById("The_Timer").value)
                var div_one = document.createElement("div")
                var random_number = Math.round(Math.random() * 2)
                //giving there class name 
                switch(random_number)
                {
                    case 0:
                        div_one.className = "Div_one"
                    break;
                    case 1:
                        div_one.className = "Div_two"
                    break;
                    case 2:
                        div_one.className = "Div_three"
                    break;
                }
                //if()
                //{
//
                //}
                var div_Background = document.getElementById("Div_maker")
                div_Background.appendChild(div_one)
                x++
            }
        

    }
}