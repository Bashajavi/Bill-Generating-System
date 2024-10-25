document.addEventListener('DOMContentLoaded', function () {
    const counts = document.querySelectorAll('.count');
    const totalCells = document.querySelectorAll('.total');
    const grandTotalDisplay = document.getElementById('grandTotal');
    const resetBtn = document.getElementById('resetBtn');

    function updateTotal() {
        let grandTotal = 0;

        counts.forEach((count, index) => {
            const quantity = parseInt(count.value) || 0;
            const price = parseInt(totalCells[index].previousElementSibling.textContent);
            const total = quantity * price;
            totalCells[index].textContent = total;
            grandTotal += total;
        });

        grandTotalDisplay.textContent = grandTotal;
    }

    counts.forEach(count => {
        count.addEventListener('input', updateTotal);
    });

    resetBtn.addEventListener('click', () => {
        counts.forEach(count => {
            count.value = 0;
        });
        updateTotal();
    });

    updateTotal();
});
