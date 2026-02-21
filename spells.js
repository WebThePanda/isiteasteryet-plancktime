
function formatWithSpaces(numberString) {
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

function updateCountdown() {
    const targetDate = new Date('2026-03-30T18:00:00+01:00');

    const now = new Date();

    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("plancktime").textContent = "0";
        return;
    }

    const planckTime = new Decimal('5.391e-44')

    const seconds = new Decimal(Math.floor(difference / 1000));

    const planck = seconds.div(planckTime).floor();

    const fullNumber = planck.toFixed(0);

    const formattedPlanck = formatWithSpaces(fullNumber);
    document.getElementById("plancktime").textContent = formattedPlanck;
}


document.addEventListener("DOMContentLoaded", function() {
    
    updateCountdown();
    
    setInterval(updateCountdown, 1000);
});


Decimal.set({ precision: 60 });

function formatWithSpaces(numberString) {
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function convert(secondsInput) {
  const PLANCK_TIME = new Decimal("5.391e-44");
  const seconds = new Decimal(secondsInput);

  const planckTimes = seconds.div(PLANCK_TIME);
  const fullNumber = planckTimes.toFixed();

  return formatWithSpaces(fullNumber);
}

document.addEventListener("DOMContentLoaded", function() {
    console.log(convert(1));
})