const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showNextItem() {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }

        setInterval(showNextItem, 5000); // Change image every 5 seconds