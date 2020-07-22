class Github {
    constructor(){
        this.clientID = "000d2ec987b1421d2718";
        this.clientSecret = "035cd7ab2792373a38398134fe622f8115a4c33c";
        // from yourgithub oauth application
    }
    // fetch github api(that is username plus repos)

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`)
        // fetches github user name
        // note that the client ID and secret where used to generate users
        
        const profileData = await profileResponse.json()

        return {
           profileData 
        }
    
    
    }



  
}