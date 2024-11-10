const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
    container.innerHTML = `
        <table border="1">
            <tr>
                <td>Key</td>
                <td>Key Code</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `;
})