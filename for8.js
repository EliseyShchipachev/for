var a,b,c
a = Number(prompt('Введите число a'))
b = Number(prompt('Введите число b'))
c = 1
for(let i = a;i <= b;i++){
    c *= i
    alert(c)
}