const filterSelect = document.getElementById('teamFilter');
const teamCards = document.querySelectorAll('.team-card');
const moreBtn = document.getElementById('moreBtn');
const visibleCount = 4;
let isExpanded = false;
let currentFilter = 'all';

function updateCards() {
    let count = 0;
    teamCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');

        if(currentFilter === 'all' || categories.includes(currentFilter)) {
            count++;
            if(!isExpanded && count > visibleCount) {
                card.style.display = 'none';
            } else {
                card.style.display = 'block';
            }
        } else {
            card.style.display = 'none';
        }
    });

    moreBtn.style.display = (count > visibleCount) ? 'inline-block' : 'none';
    moreBtn.textContent = isExpanded ? 'Hide' : 'More';
}

filterSelect.addEventListener('change', () => {
    currentFilter = filterSelect.value;
    isExpanded = false;
    updateCards();
});

moreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    updateCards();

    const hint = document.getElementById('moreHint');
    if (isExpanded) {
        hint.style.display = 'none';
    } else {
        hint.style.display = 'block';
    }
});

updateCards();