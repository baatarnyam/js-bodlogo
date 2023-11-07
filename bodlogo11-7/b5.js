const sec = 1297
let hour = 0
let minute = 0 
let second = 0

hour = parseInt(sec/3600)
minute = parseInt((sec - hour) / 60)
second =  sec - minute*60
console.log(hour,"hour")
console.log(minute, "minute")
console.log(second, "second")