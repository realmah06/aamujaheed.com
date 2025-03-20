document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("select.custom-dropdown").forEach(select => {
        let wrapper = document.createElement("div");
        wrapper.classList.add("custom-dropdown-wrapper");

        let display = document.createElement("div");
        display.classList.add("custom-dropdown-display");
        display.textContent = select.options[select.selectedIndex]?.text || "Select an option";

        let optionsDiv = document.createElement("div");
        optionsDiv.classList.add("custom-dropdown-options");

        // Search input inside dropdown
        let searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        
        searchInput.classList.add("custom-dropdown-search");

        optionsDiv.appendChild(searchInput);

        // Add options
        Array.from(select.options).forEach(option => {
            let optionDiv = document.createElement("div");
            optionDiv.classList.add("custom-dropdown-option");
            optionDiv.textContent = option.text;
            optionDiv.dataset.value = option.value;

            optionDiv.addEventListener("click", function () {
                display.textContent = this.textContent;
                select.value = this.dataset.value;
                optionsDiv.style.display = "none";
            });

            optionsDiv.appendChild(optionDiv);
        });

        searchInput.addEventListener("input", function () {
            let filter = this.value.toLowerCase();
            optionsDiv.querySelectorAll(".custom-dropdown-option").forEach(option => {
                option.style.display = option.textContent.toLowerCase().includes(filter) ? "block" : "none";
            });
        });

        display.addEventListener("click", function () {
            optionsDiv.style.display = optionsDiv.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!wrapper.contains(event.target)) {
                optionsDiv.style.display = "none";
            }
        });

        wrapper.appendChild(display);
        wrapper.appendChild(optionsDiv);
        select.parentNode.replaceChild(wrapper, select);
    });
});


function togglePassword() {
            var passwordInput = document.getElementById("password");
            var toggleBtn = document.querySelector(".toggle-btn");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggleBtn.textContent = "Hide";
            } else {
                passwordInput.type = "password";
                toggleBtn.textContent = "Show";
            }
        }
        
        
        document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close");
    const modals = document.querySelectorAll(".modal");

    // Open modal
    openButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "none";
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});



function getFormattedDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}

// Select all elements with the class "current-date" and update them
document.querySelectorAll("#currentDate").forEach(element => {
    element.textContent = getFormattedDate();
});
