const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const noResults = document.getElementById("noResults");
const searchTerm = document.getElementById("searchTerm");
const serviceItems = document.getElementsByClassName("service-item");

// Search functionality
function performSearch() {
  const filter = searchInput.value.toLowerCase();
  let hasVisibleItems = false;

  for (let i = 0; i < serviceItems.length; i++) {
    const title = serviceItems[i].getElementsByTagName("h3")[0];
    if (title) {
      const textValue = title.textContent || title.innerText;
      if (textValue.toLowerCase().includes(filter)) {
        serviceItems[i].style.display = "flex";
        hasVisibleItems = true;
      } else {
        serviceItems[i].style.display = "none";
      }
    }
  }

  if (filter && !hasVisibleItems) {
    searchTerm.textContent = filter;
    noResults.classList.add('show');
  } else {
    noResults.classList.remove('show');
  }
}

searchInput.addEventListener("keyup", performSearch);
searchBtn.addEventListener("click", performSearch);

// Scroll animation
const items = document.querySelectorAll('.service-item');
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
};
window.addEventListener('scroll', showOnScroll);
showOnScroll();

// Modal functionality
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

const details = {
  detail1: {
    title: "Fresh & Hot Pizza",
    desc: "Our pizzas are made with high-quality ingredients, authentic mozzarella cheese, homemade tomato sauce, and baked in a special oven to keep them crispy and delicious."
  },
  detail2: {
    title: "Fast Delivery",
    desc: "We offer fast delivery service with high hygiene standards. Your pizza will arrive at your home hot and fresh."
  },
  detail3: {
    title: "Expert Chefs",
    desc: "Our experienced chefs have been crafting authentic Italian pizzas for years, combining them with a unique local taste."
  },
  detail4: {
    title: "Pizza Catering",
    desc: "We provide catering packages with a variety of pizzas and side menus, perfect for family parties or office events."
  },
  detail5: {
    title: "Online Reservation",
    desc: "Easily reserve your table online. Choose your arrival time and enjoy a dining experience without waiting."
  }
};

// Open modal
document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", e => {
    const service = e.target.closest(".service-item").dataset.detail;
    modalTitle.textContent = details[service].title;
    modalDesc.textContent = details[service].desc;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target == modal) modal.style.display = "none";
};