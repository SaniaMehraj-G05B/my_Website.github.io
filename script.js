function toggleDarkMode(){
document.body.classList.toggle("dark");
}
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Remove active from all buttons
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active to clicked button
    event.target.classList.add('active');
}
