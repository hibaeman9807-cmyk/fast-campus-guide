// Navigate when "Explore Campus" button is clicked
function exploreCampus() {
    window.location.href = "about.html";
}

// Navigate when feature boxes are clicked
function goToPage(page) {
    window.location.href = page;
}

// Search bar handler
function searchWebsite(event) {
    // Only act when Enter is pressed
    if (!event || event.key !== "Enter") return;

    let query = document.getElementById("searchBar").value.toLowerCase().trim();

    // Mapping search terms to pages
    const pages = {
        "home": "index.html",
        "homepage": "index.html",
        "main": "index.html",

        "about": "about.html",
        "campus": "about.html",
        "overview": "about.html",

        "departments": "departments.html",
        "department": "departments.html",
        "dept": "departments.html",

        "admissions": "admissions.html",
        "admission": "admissions.html",
        "apply": "admissions.html",

        "contact": "contact.html",
        "contact us": "contact.html",
        "phone": "contact.html",

        "services": "services.html",
        "alumni": "services.html"
    };

    // Redirect if found, else alert
    if (pages[query]) {
        window.location.href = pages[query];
    } else {
        alert("No results found.");
    }
}
