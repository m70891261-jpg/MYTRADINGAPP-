document.getElementById('status').textContent = "App Running ✅";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
