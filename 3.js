var x = 2;
var y = 5;
var string="";
whrite(x,y);
function whrite(x,y){
    for(var j = 1; j <= y; j++){
        for(var i = 1; i <= x; i++){
            string += "#";
            
        }string += "\n";
        
    }
    console.log(string);
}