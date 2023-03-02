var a=[1,2,4,2,5,3,5,7,6,2,3,8,8,4]
for(var i = 0;i < a.length;i++){
    for(var j = i+1;j < a.length;j++){
        if(a[i]==a[j]){
            for(var k = j;k < a.length;k++){
                a[k]=a[k+1]
            }
            a.length--
        }
    }
}
console.log(a)