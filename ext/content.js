(() => {
    const handleRejection = (e) => {
        alert(`Caught unhandledrejection in extension: ${e.reason}`);
        e.preventDefault();
    }

    window.addEventListener('unhandledrejection', handleRejection, false);

    const rejectFromExtension = () => {
        new Promise((resolve, reject) => {
            reject(new Error('unhandledrejection from extension'));
        });
    };

    // doesn't work
    const button = document.createElement('button');
    button.textContent = 'Trigger unhandledrejection from extension';
    button.addEventListener('click', rejectFromExtension, false);
    document.body.appendChild(button);
})();
