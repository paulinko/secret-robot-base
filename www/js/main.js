let intervalId;

function removeFromArray(arr, elem) {
  const index = arr.indexOf(elem);
  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}

function generateTask() {
  let primes = [3, 5, 7, 13, 19, 23, 29]
  const prime1 = primes[Math.floor(Math.random() * primes.length)]
  primes = removeFromArray(primes, prime1)
  const divide1 = primes[Math.floor(Math.random() * primes.length)]
  primes = removeFromArray(primes, divide1)
  const prime2 = primes[Math.floor(Math.random() * primes.length)]
  primes = removeFromArray(primes, prime2)
  const divide2 = primes[Math.floor(Math.random() * primes.length)]

  const ops = ['+', '-'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let task = `${prime1}/${divide1} ${op} ${prime2}/${divide2}`;
  document.getElementById('task').innerText = task;
  console.log(task);
}

function checkAnswer(event) {
  event.preventDefault();
  let answer = parseFloat(document.getElementById('answer').value);
  if (eval(document.getElementById('task').innerText) === answer) {
    window.clearInterval(intervalId)
    document.getElementById('main').innerHTML = atob("CiAgICA8ZGl2IGNsYXNzPSJuZXMtY29udGFpbmVyIj4KICAgICAgPHA+IFdlbGNvbWUgRmVsbG93IFJvYm90ISA8YnI+IFBsZWFzZSBoYXZlIHNvbWUgZGVsaWNpb3VzIFJBTSE8L3A+CiAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyI+CiAgICAgICAgPGltZyBzcmM9ImltZy9kZWxpY2lvdXNfcmFtLnBuZyIgYWx0PSIiPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIA==")
  } else {
    const answerInp = document.getElementById('answer');
    answerInp.value = ''

    answerInp.classList.add('wrong');
    setTimeout( function () {
      answerInp.classList.remove('wrong');
    }, 500)
  }
}

generateTask()
intervalId = window.setInterval(generateTask, 1000)

document.getElementById('test').addEventListener('submit', checkAnswer
)

