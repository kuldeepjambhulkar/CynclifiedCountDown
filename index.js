function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

function updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 7, 23, 17, 0, 0, 0); // August is month 7 (0-based index)
    if (now > targetDate) {
        targetDate.setFullYear(now.getFullYear() + 1);
    }
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(timeDifference % 1000 / 10); // Convert milliseconds to two-digit format

    document.getElementById('days').querySelector('.number').textContent = formatNumber(days);
    document.getElementById('hours').querySelector('.number').textContent = formatNumber(hours);
    document.getElementById('minutes').querySelector('.number').textContent = formatNumber(minutes);
    document.getElementById('seconds').querySelector('.number').textContent = formatNumber(seconds);
    document.getElementById('milliseconds').querySelector('.number').textContent = formatNumber(milliseconds);

    setTimeout(updateCountdown, 1);
}

updateCountdown();

function setDesktopViewport() {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1024');
}
window.onload = setDesktopViewport;
window.onresize = setDesktopViewport;
