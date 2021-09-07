// find the greatest num in a mountain array
// eg: arr= [4,5,9,12,45,31,11,0]  res = 45;
// eg : arr = [4,6,7,8,9,12,3,2,1]  res = 12;

let arr =  [4,5,8,9,212,45,5,113,12]

const ceilInMountain = (arr,start, end)=>{
 let mid = Math.floor((start+end)/2);

 if(start<end){
     
    
    if(arr[mid] > arr[mid+1] && arr[mid]> arr[mid-1]){
        return console.log(arr[mid])
    }
    else if(arr[mid]> arr[mid+1]){
         return ceilInMountain(arr,0,mid-1)
     }
     else if (arr[mid]< arr[mid+1])
{

return ceilInMountain(arr,mid +1, arr.length-1)

} 



}
else 
{
    return console.log("not a valid mountain array")
}

}
 ceilInMountain(arr,0,arr.length-1)