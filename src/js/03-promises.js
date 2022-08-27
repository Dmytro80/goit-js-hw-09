const form = document.querySelector('.form');
const amountRef = document.querySelector('[name="amount"]');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const step = Number(formElements.step.value);

  let counter = Number(formElements.amount.value);
  let delay = Number(formElements.delay.value);
  let position = 1;

  const intervalId = setInterval(() => {
    if (counter <= 0) {
      return clearInterval(intervalId);
    }

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    position += 1;
    counter -= 1;
    delay += step;
  }, 0);

  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
