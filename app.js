//Init Github
const github = new Github;
//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');
//Search Eventlistener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        //Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                   //Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Display Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);

        
               }
        })
    } else {
        //Clear Profile
        ui.clearProfile();

    }
});
