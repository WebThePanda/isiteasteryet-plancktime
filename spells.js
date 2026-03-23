function formatWithSpaces(numberString) {
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

function updateCountdown() {
    const targetDate = new Date('2026-04-01T09:00:00+01:00');

    const now = new Date();

    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("plancktime").textContent = "0";
        return;
    }

    const planckTime = new Decimal('5.391e-44')

    const seconds = new Decimal(difference).div(1000);

    const planck = seconds.div(planckTime).floor();

    const fullNumber = planck.toFixed(0);

    const formattedPlanck = formatWithSpaces(fullNumber);
    document.getElementById("plancktime").textContent = formattedPlanck;

    requestAnimationFrame(updateCountdown)
}


document.addEventListener("DOMContentLoaded", function() {    
    requestAnimationFrame(updateCountdown);
});