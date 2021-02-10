document.addEventListener("DOMContentLoaded", function(event) {

const tabs = document.querySelectorAll('.tab-nav-item');
const tabsContent = document.querySelectorAll('.tab-container');

    for (let i =0; i < tabs.length; i++) {

        tabs[i].addEventListener('click', function () {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
                tabsContent[j].classList.remove('open');
            }
            this.classList.add('active');
            tabsContent[i].classList.add('open');
        })

    }

});