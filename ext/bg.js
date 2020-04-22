(() => {
    window.addEventListener('unhandledrejection', (e) => {
        console.error(e.reason);
    }, false);
    setInterval(() => {
        new Promise((resolve, reject) => {
            reject(new Error('unhandledrejection from the background'));
        });
    }, 1000);
})();
