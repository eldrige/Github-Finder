// init github class
const github = new Github();
// init ui class
const ui = new UI()
// search input

const searcUser = document.querySelector("#seahcUser");

// search input event listener
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;
  if (userText !== "") {
    //    make http call
    github.getUser(userText).then((data) => {
      if(data.profileData.message === 'not found'){
        //   show alert
      } else {
        //   show profile
        ui.showProfile(data.profileData)
        
      }
    });
  } else {
    //   clear profile
  }
});
