function searchTrip() {
    const to = document.querySelector('input[placeholder="To:"]').value.trim();
    const from = document.querySelector('input[placeholder="From:"]').value.trim();
    const date = document.querySelector('.calendar_input').value;
    const result = document.getElementById('search_result');

    if (!to || !from || !date) {
        result.textContent = '⚠️ Please fill in all fields before searching.';
        result.style.color = '#EE6C4D';
        return;
    }

    result.textContent = `✅ Searching trips from ${from} to ${to} on ${date}...`;
    result.style.color = '#2a9d8f';
}

function selectType(card) {
    document.querySelectorAll('.type_card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
}