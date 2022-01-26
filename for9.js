var a,b,c
a = Number(prompt('Введите число a'))
b = Number(prompt('Введите число b'))
c = 1
for(let i = a;i <= b;i++){
    c = Math.pow(i,2) * i
    alert(c)
}