document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-item").forEach(el => {
      if (el !== item) el.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

function filterFAQ() {
  const input = document.getElementById("faq-search").value.toLowerCase();
  const faqs = document.querySelectorAll("#faq-list .faq-item");
  const noResult = document.getElementById("no-result");
  let visibleCount = 0;

  faqs.forEach(faq => {
    const question = faq.querySelector("h4").innerText.toLowerCase();
    const answer = faq.querySelector(".faq-answer").innerText.toLowerCase();

    if (question.includes(input) || answer.includes(input)) {
      faq.style.display = "block";
      visibleCount++;
    } else {
      faq.style.display = "none";
    }
  });

  noResult.style.display = (visibleCount === 0) ? "block" : "none";
}

document.getElementById("faq-search").addEventListener("keyup", filterFAQ);
