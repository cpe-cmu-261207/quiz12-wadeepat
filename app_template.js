//your code here!
const addButton = document.getElementById('button-compute')
const result = document.getElementById('compute-result')
const inputfirst = document.getElementById('input-number')

addButton.addEventListener('click',cal)
function cal(e){
    result.innerText = 620610806 + Number(inputfirst.value)
}

const tableButton = document.getElementById('button-create-table')
const inputrow = document.getElementById('input-row')
const inputcol = document.getElementById('input-col')
const table = document.getElementById('table')

tableButton.addEventListener('click',createtable)

function createtable(){
    document.getElementById('name').innerText = "Create By Wadeepas Lertwanawancih"
    for(var i;i<Number(inputrow.value);i++){
        var line = document.createElement('tr')
        for(var j;j<Number(inputrow.value);j++){
            var data = document.createElement('td')
            data.innerText = 1
            line.append(data)
        }
        table.append(line)
    }
}