let arr=[]

arr = ['Állyson','27','1.80','true']

console.log(arr)

console.log(arr[0])

console.log(arr.length)

console.clear()

for(i=0;i<4;i++){
    console.log(arr[i])  
}

console.clear()

for(elementos of arr){
    console.log(elementos)
}
console.clear()
for(index in arr){
    console.log(index,arr[index])
}