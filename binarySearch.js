//100 days of code

let array1 = [7,8,9,45,121,184]

const binary = (arr,r,start,x)=>{
   
   
    let m =  Math.floor((start+r)/2);
    console.log(m)
    if(arr[m] === x){
       return console.log(m)
        
    }
     if (arr[m]<x)
    {
        return binary(arr,5,m+1,x)
    } if(arr[m]>x){

        return binary(arr,m-1,0,x)
    }
    else{
        console.log("cant find a number")
    }
    


}
binary(array1, 5, 0, 121)