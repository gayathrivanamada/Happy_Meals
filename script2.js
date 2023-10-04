function handleSearch(event) {
    event.preventDefault();
    var searchInput = document.getElementById("search-input").value;
    var options = document.getElementById("options").options;
    for (var i = 0; i < options.length; i++) {
        if (options[i].value.toLowerCase() === searchInput.toLowerCase()) {
            window.location.href = options[i].getAttribute("data-url");
            break;
        }
    }
}