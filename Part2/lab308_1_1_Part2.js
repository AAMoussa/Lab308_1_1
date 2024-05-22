/* Ahmed Moussa                                       *****************************************************  
    LAB308_1_1_PART_2                       **** * Set up a program to calculate and measure the efficiency * ****
    Practical Math                          **** *          when planning a cross-country road trip!           * ****
*///                                                  ******************************************************


// Declare the Global Variables.
const totalDist = 1500;
const budget = 175;
const costPerGallon =3;
const speed55 = 55;
const speed60 = 60;
const speed75 = 75;
const miles30 = 30;
const miles28 = 28;
const miles23 = 23;

{
//  FIRST WHAT HAPPENS IF THE SPEED IS 55 MILES PER HOUR
//How Many Gallons of feul for the entire trip.
 let totalGallons = (totalDist/miles30);
 //How Long the entire trip takes in hours.
 let totalHours = (totalDist /speed55) ;  
 //Total feul cost for the entire trip.
 let feulCost   = (totalGallons * costPerGallon);
// Is it above or below the Budget
 if (feulCost < budget) {
    willCover = "Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " is going to cover the fuel expense!";
} else if (feulCost > budget) {
 willCover ="Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " is LESS to cover the fuel expense!";
} else {
 willCover ="Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " will cover the fuel expense EXACTLY!";
}

 let atSpeed55 = (`\n\n\t\tHere is the Information Before Planning The TRIP!\n       --------------------------------------------------\n
        FIRST OPTIOPN:\n        --------------
                \n\t\tWhen Traveling at speed of ` + speed55 +
               ` miles per hour,\n\t\tand a total distance of `+ totalDist +
                ` miles you will:\n
                1- Need ` + totalGallons + ` Gallons for the entire trip.\n
                2- Take ` + totalHours + ` hours to reach your destination.\n
                3- And ` + willCover
            );

            console.log(atSpeed55);
}

//*********************************************************************************************** */

{ 
//  SECONDLY WHAT HAPPENS IF THE SPEED IS 60 MILES PER HOUR
//How Many Gallons of feul for the entire trip.
let totalGallons = (totalDist/miles28);
//How Long the entire trip takes in hours.
let totalHours = (totalDist /speed60) ;  
//Total feul cost for the entire trip.
let feulCost   = (totalGallons * costPerGallon);
// Is it above or below the Budget
if (feulCost < budget) {
   willCover =  "Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " is going to cover the fuel expense!";
} else if (feulCost > budget) {
willCover ="Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " is LESS to cover the fuel expense!";
} else {
willCover ="Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " will cover the fuel expense EXACTLY!";
}

let atSpeed60 = (`\n\n\t\tSECOND OPTION:\t\t\tNote: \tThis option makes the most sense as you still below budget and\n\t\t\t\t\t\t\t\t\t\t\t shorter in time than the first, while the third option is above budget!\n       ---------------
               \n\t\tWhen Traveling at speed of ` + speed60 +
              ` miles per hour,\n\t\tand a total distance of `+ totalDist +
               ` miles you will:\n
               1- Need ` + totalGallons + ` Gallons for the entire trip.\n
               2- Take ` + totalHours + ` hours to reach your destination.\n
               3- And ` + willCover
           );
        
           console.log(atSpeed60);
}

//*********************************************************************************************** */

{
//  Third WHAT HAPPENS IF THE SPEED IS 75 MILES PER HOUR
//How Many Gallons of feul for the entire trip.
let totalGallons = (totalDist/miles23);
//How Long the entire trip takes in hours.
let totalHours = (totalDist /speed75) ;  
//Total feul cost for the entire trip.
let feulCost   = (totalGallons * costPerGallon);
// Is it above or below the Budget
if (feulCost < budget) {
   willCover =  "Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " is going to cover the fuel expense!";
} else if (feulCost > budget) {
willCover ="Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " is LESS to cover the fuel expense!";
} else {
willCover ="Your Fuel cost for the entire trip will be $" + feulCost+ "\n\t\t\t\t\tWhich means that your $"+ budget + " will cover the fuel expense EXACTLY!";
}

let atSpeed75 = (`\n\n\t\tTHIRD OPTION:\n       ---------------
               \n\t\tWhen Traveling at speed of ` + speed75 +
              ` miles per hour,\n\t\tand a total distance of `+ totalDist +
               ` miles you will:\n
               1- Need ` + totalGallons + ` Gallons for the entire trip.\n
               2- Take ` + totalHours + ` hours to reach your destination.\n
               3- And ` + willCover
           );
        
           console.log(atSpeed75);
}

/************************************************************************************************************************************************* */

          