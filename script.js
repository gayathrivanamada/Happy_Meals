


function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const selectedOption = searchInput.value;
    const options = document.getElementById('options').getElementsByTagName('option');
    
    let selectedUrl = '';
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      if (option.value === selectedOption) {
        selectedUrl = option.getAttribute('data-url');
        break;
      }
    }
    
    if (selectedUrl) {
      window.location.href = selectedUrl;
    }
  }
