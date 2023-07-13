/* A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying 
it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd 
function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station 
to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd.*/

//  °F = (°C × 9/5) + 32

function CelToFer(c){
    return (c * 9/5) + 32
}

let fer=CelToFer(26)

console.log(fer,"F")