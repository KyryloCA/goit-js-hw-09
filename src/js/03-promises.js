import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ timeout: 3000 });

const form = document.querySelector('.form');
form.addEventListener('submit', runPromices);

function runPromices(submitObj) {
  console.clear();
  submitObj.preventDefault();
  const firstDelayField = Number(submitObj.target.elements[0].value);
  const delayStepField = Number(submitObj.target.elements[1].value);
  const runTimes = Number(submitObj.target.elements[2].value);

  setTimeout(() => {
    let i = 0;
    const step = setInterval(() => {
      if (i < runTimes) {
        createPromise(i, delayStepField)
          .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });
        i++;
      } else {
        clearInterval(step);
      }
    }, delayStepField);
  }, firstDelayField - delayStepField);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({ position, delay });
  } else {
    // Reject
    return Promise.reject({ position, delay });
  }
}
