let age = 0
let hello = 17

document.getElementById('button').addEventListener('click', comparison)

function comparison () {
  age = document.getElementById('hello').value
  if (age >= hello) {
    alert('You can Watch R rated movies alone')
    }

  else if (age <= hello) {
    alert('You can Watch PG-13, PG, or G rated movie alone')
  }
}
