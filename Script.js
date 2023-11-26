var likes = document.getElementsByClassName('like')
for (let i = 0; i < likes.length; i++) {
    let like = likes[i]
    like.addEventListener('click', function() {
        if (like.style.color == "black") {
            like.style.color = "red"
        } else {
            like.style.color = "black"
        }
    })
}
var plus = document.getElementsByClassName('plus-btn')
var quant = document.getElementsByClassName('Quant')
console.log(quant);
console.log(plus);
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function() {
        quant[i].value = parseInt(quant[i].value) + 1
        total()

    })


}
var minus = document.getElementsByClassName('minus-btn')
console.log(minus);
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function() {
        if (quant[i].value > 1) {
            quant[i].value = parseInt(quant[i].value) - 1
            total()
        }

    })

}
var dt = document.getElementsByClassName('delete')
var item = document.getElementsByClassName('Item')
console.log(dt)
console.log('thytjyt', item)
for (let i = 0; i < dt.length; i++) {
    dt[i].addEventListener('click', function() {
        item[i].parentElement.remove()
        total()
    })

}

var finalprice = document.getElementById('final')
console.log(finalprice);
var item = document.getElementsByClassName('Item')

function total() {
    let s = 0
    for (let i = 0; i < item.length; i++) {
        s = s + item[i].querySelector('.price').innerHTML * item[i].querySelector('.Quant').value
    }
    return (finalprice.value = s)
}