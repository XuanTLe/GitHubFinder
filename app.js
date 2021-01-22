// Init Github
const github = new Github;
// Init UI
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    // if text is not empty in search box
    if(userText !== ''){
        // Make http call 
        github.getUser(userText)
        // profile is property of data object, message is property of profile object; all of them are from gitHub API
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            
            })
    // If text is empty in search box
    } else {
        // Clear profile
        ui.clearProfile();
    }
});