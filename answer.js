const twoSum=(numbers, target)=> {
  let arr=[]
  numbers.forEach((e,i,a)=>{
    a.forEach((x,y,z)=>{
      if(i!=y){
      e+x == target ? arr.push(i,y): arr
      }
    })})
  return [...new Set(arr)].slice(0,2)
}

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}
