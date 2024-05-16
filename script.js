const input = document.getElementById('field');
const button = document.getElementById('button');
const result = document.getElementById('result');
const mark = document.getElementById('mark');
const cross = document.getElementById('cross');

const arrey = []

function ArrEll() {
    result.innerHTML = ''
    if (arrey.length === 0) {
        result.innerHTML = '<div style="background-color: rgb(28, 44, 49); font-size: 20px; color: white; text-align: center;">Напишите что-нибудь</div>'
    }
    for (let i = 0; i < arrey.length; i++) {
        result.insertAdjacentHTML('beforeend', general(arrey[i], i))
    }
}

ArrEll()

button.addEventListener('click', function() {
    if (input.value.length === 0) {
        return
    }

    const arr = {
        title: input.value,
        completed: false
    }

    arrey.push(arr)
    ArrEll()
    input.value = ''
})

result.addEventListener('click', function(event) {
    if (true) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            arrey[index].completed = !arrey[index].completed
        } else if (type === 'remove') {
            arrey.splice(index, 1)
        }
        ArrEll()
    }
})

function general(arrey, index) {
    return `
    <li class="wrapper__list">
        <div class="wrapper__buttons">
            <p class="wrapper__${arrey.completed ? 'crossed-out-text' : 'result'}">${arrey.title}</p>
            <div class="wrapper__mark-cross">
                <input type="button" value="✓" data-type='toggle' data-index="${index}" class="wrapper__${arrey.completed ? 'checkmark-2' : 'checkmark'}" id="mark">
                <input type="button" value="✕" data-type='remove' data-index="${index}" class="wrapper__cross"  id="cross">
            </div>
        </div>
    </li>
    `
}