


 // JavaScript to toggle active tab content
    const tabs = document.querySelectorAll('.tabs input[type="radio"]');
    tabs.forEach(tab => {
        tab.addEventListener('change', function() {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById('tab-content-' + this.value).classList.add('active');
        });
    });