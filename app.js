// init github class
const github = new Github();

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
      }
    });
  } else {
    //   clear profile
  }
});
