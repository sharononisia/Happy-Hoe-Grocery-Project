document.getElementById('toggle-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0px';
        content.style.marginLeft = '250px';
    }
});
