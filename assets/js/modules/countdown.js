const root = document.querySelector("[data-countdown]");

if (root) {
  const target = new Date(root.dataset.date).getTime();
  const fields = {
    days: root.querySelector("[data-days]"),
    hours: root.querySelector("[data-hours]"),
    minutes: root.querySelector("[data-minutes]"),
    seconds: root.querySelector("[data-seconds]")
  };

  const updateCountdown = () => {
    const remaining = Math.max(0, target - Date.now());
    const values = {
      days: Math.floor(remaining / 86400000),
      hours: Math.floor((remaining % 86400000) / 3600000),
      minutes: Math.floor((remaining % 3600000) / 60000),
      seconds: Math.floor((remaining % 60000) / 1000)
    };

    Object.entries(values).forEach(([key, value]) => {
      if (fields[key]) fields[key].textContent = String(value).padStart(2, "0");
    });

    if (remaining === 0) window.clearInterval(timer);
  };

  updateCountdown();
  const timer = window.setInterval(updateCountdown, 1000);
}
