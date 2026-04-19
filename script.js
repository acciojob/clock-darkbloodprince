function updateTime() {
  const now = new Date();

  // Convert to readable string
  const dateTime = now.toLocaleString();

  document.getElementById("timer").textContent = dateTime;
}

// Run immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);