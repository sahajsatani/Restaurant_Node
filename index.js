
// script.js

$(document).ready(function () {
    // Load default content on page load
    loadContent('home.html');

    // Handle navigation clicks
    $('nav a').click(function (e) {
        e.preventDefault();
        var page = $(this).attr('href');
        loadContent(page);
    });
});

function loadContent(page) {
    $('#main-content').load(page);
}

const dt = new Object();
fetch('./Menu.json')
    .then((res) => res.json())
    .then((data) => {
        try {
            console.log(data)
            dt = JSON.parse(data)
        } catch (error) {
            console.log(error)
        }
    });
    console.log(dt.No);
