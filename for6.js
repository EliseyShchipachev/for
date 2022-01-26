var a
a = prompt("Введите цену  1 кг конфет")
for (let i = 1;i<=5;i++){
    alert("Цена "+ 1/5*(Math.round(5+i)) + " килограм конфет " + (1/5*(Math.round(5+i)))*a +  " гривен ")
}