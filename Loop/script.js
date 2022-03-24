let a = parseInt(prompt("Birinci Ededi Daxil Et:"));
let b = parseInt(prompt("Ikinci Ededi Daxil Et:"));

let min = 0;
let max = 0;

let result = 0;
// let neisdesenyaz = 0;

if(a != b)
{
    if (a > b) 
    {
        min = b;
        max = a;
    }
    else
    {
        min = a;
        max = b;
    }

    while(min <= max)
    {
        result+=min;
        min++;
    }
    
    
    // while(min <= max)
    // {
    //     if(min % 2 == 0)
    //     {
    //         neisdesenyaz+=min;
    //     }

    //     min++
    // }

    console.log(result);
}
else{
    console.log("Beraberlik Var");
}
