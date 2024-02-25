// function saturdayFun( argument="roller-skate"){
//     console.log("This Saturday, I want to  ! "+ argument);
// }
// saturdayFun("bathe my dog")
// saturdayFun( )



// Define the saturdayFun function with a default activity
function saturdayFun(activity = 'roller-skate') {
   return "This Saturday, I want to "+  activity +"!";
  }
  
//   // Export the saturdayFun function
//   module.exports = { saturdayFun };

function mondayWork( activity="go to the office"){
    return "This Monday, I will "+ activity+"."

}

function wrapAdjective(symbol='*'){
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
      };


}
console.log(wrapAdjective())