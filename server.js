// load express 
const express = require ("express")
// start app 
const app = express ();

app.get ("/" , (req,res) => {
    res.send ("<h1> 99 bottles of beer on the wall  <h1> <br>  <a href = 'http://localhost:3000/98 ' > take one down, pass it around </a>  ")
})


app.get ("/:number_of_bottles" , (req,res) => {
    if (req.params.number_of_bottles === "0" ) {
        console.log ("test")
        res.send (`<h1> ${req.params.number_of_bottles} bottles left <h1> <br> <a href = 'http://localhost:3000' > play again </a>  ` )
    
      
    } else 
    res.send (`<h1> ${req.params.number_of_bottles} bottles left <h1> <br> <a href = 'http://localhost:3000/${req.params.number_of_bottles-1}' > take one down, pass it around </a>  ` )
})

const multipy = (num1 , num2) => {
    return num1*num2; 
}




console.log (multipy (2,4));

app.listen (3000 , ()  => {
    console.log ("listening in port 3000 ")
})

// export function 

module.exports = multipy  ;


// problem : 
// warning: unable to access '/Users/bilalyounes/.config/git/attributes': Permission denied

// solution : 

// sudo chown -R $USER ~/.config  
// password : 