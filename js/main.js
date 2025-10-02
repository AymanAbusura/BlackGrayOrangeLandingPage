window.onload = function() {;
    // More Efficient than the upper
    function setupToggle(toggleId, maxHeight) {
        var toggleLink = document.getElementById(toggleId);
        if (!toggleLink) return;

        var submenu = toggleLink.nextElementSibling;
        toggleLink.addEventListener('click', function (e) {
            e.stopPropagation();
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function (e) {
            if (submenu.style.display === 'block' && e.target !== toggleLink && !submenu.contains(e.target)) {
                submenu.style.display = 'none';
            }
        });

        submenu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                submenu.style.display = 'none';
            }
        });

        submenu.style.maxHeight = maxHeight;
        submenu.style.overflowY = "auto";
    }

    setupToggle('toggle', '300px');
    setupToggle('mobile-toggle', '300px');
    setupToggle('toggle-1', '150px');

    // Scroll
    var buttons = document.querySelectorAll(".scroll_btn");
    var form = document.getElementById("form");
    if (buttons.length > 0) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                form.scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
    }

    // замена домена
    var domainName = "ShaddersAgent.com";
    var replaceableTextElements = document.querySelectorAll(".domain");
    replaceableTextElements.forEach(function(element) {
        if (element.classList.contains("email")) {
            var currentEmail = element.textContent;
            var emailParts = currentEmail.split('@');
            element.textContent = emailParts[0] + '@' + domainName;
        } else {
            element.textContent = domainName;
        }
    });

    var emailLinks = document.querySelectorAll(".mail-link");
    emailLinks.forEach(function(emailLink) {
        emailLink.href = "mailto:support@" + domainName;
    });
    // Конец
};