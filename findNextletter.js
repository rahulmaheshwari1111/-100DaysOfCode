// return the next largest char remember char wrap around

const array1 = ["a","b","c","d","j","l"];

const binarySearch = (arr,start,end,x)=>{

    let m = Math.floor((start+end)/2);

    if(arr[m]==x && arr[m+1]==undefined){
        return console.log(arr[0], arr[m])
    }
    else if(arr[m]==x){
        return console.log(m, arr[m+1], m+1)
    }

    else if (arr[m]<x){
        return binarySearch(arr,m+1,arr.length-1,x)
    }
    else if (arr[m]>x){
        return binarySearch(arr,0,m-1,x)
    }
}
binarySearch(array1,0,array1.length-1,"l")