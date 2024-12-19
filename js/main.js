var myCarousel = document.getElementById('bannerCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000, // Auto-slide every 5 seconds
  ride: 'carousel'
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            keyboard: true, // Konfigurasi Anda
        });
    }
});

const categories = [
    { name: "Phones", image: "./assest/phone.jpg", path: "#" },
    { name: "Fashion", image: "./assest/fashion.jpg", path: "#" },
    { name: "Vehicles", image: "./assest/Vehiclecs.jpg", path: "#" },
    { name: "Office Supplies", image: "./assest/office.jpg", path: "#" },
    { name: "Furnitures", image: "./assest/Furnitures.jpg", path: "#" },
    { name: "Electronics", image: "./assest/Electronics.jpg", path: "#" },
    { name: "Books", image: "./assest/Books.jpg", path: "#" },
    { name: "Beauty Products", image: "./assest/Beauty Products.jpg", path: "#" },
    { name: "Home Appliances", image: "./assest/Home Appliances.jpg", path: "#" },
    { name: "Groceries", image: "./assest/Groceries.jpg", path: "#" },
    { name: "Kids & Toys", image: "./assest/Kids & Toys.jpg", path: "#" },
    { name: "Gaming", image: "./assest/Gaming.jpg", path: "#" },
    { name: "Sports", image: "./assest/Sports.jpg", path: "#" },
    { name: "Health", image: "./assest/Health.jpg", path: "#" },
    { name: "Stationery", image: "./assest/Stationery.jpg", path: "#" },
    { name: "Watches", image: "./assest/Watches.jpg", path: "#" },
    { name: "Bags & Luggage", image: "./assest/Bags & Luggage.jpg", path: "#" },
    { name: "Pet Supplies", image: "./assest/Pet Supplies.jpeg", path: "#" },
    { name: "Digital Products", image: "./assest/Digital Products.png", path: "#" },
    { name: "Automotive Parts", image: "./assest/Automotive Parts.jpg", path: "#" },
    { name: "Travel Accessories", image: "./assest/Travel Accessories.jpg", path: "#" },
];

const categoriesPerPage = 7;
let currentPage = 1;

function renderCategories() {
    const container = document.getElementById("categoriesContainer");
    container.innerHTML = "";

    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    const currentCategories = categories.slice(startIndex, endIndex);

    currentCategories.forEach((category) => {
        const categoryItem = document.createElement("div");
        categoryItem.className = "category-item";
        categoryItem.innerHTML = `
            <img class="category-image" src="${category.image}" alt="${category.name}" />
            <p class="category-text">${category.name}</p>
        `;

        // Event listener for clicking category (acting like a link)
        categoryItem.addEventListener("click", () => {
            // Redirect to the category page
            window.location.href = category.url;
        });

        container.appendChild(categoryItem);
    });
}

function renderPagination() {
    const container = document.getElementById("paginationContainer");
    container.innerHTML = "";

    const totalPages = Math.ceil(categories.length / categoriesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement("span");
        dot.className = "pagination-dot";
        if (i === currentPage) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentPage = i;
            renderCategories();
            renderPagination();
        });

        container.appendChild(dot);
    }
}

// Initial Render
renderCategories();
renderPagination();

