// In this project, we need gitHub API to make requests. Normally, we can only make 100 requests per hour. So, we create an OAuth application to get the secret key in order to make many requests. 
class Github {
    constructor(){
        this.client_id = '4624ffaede22dad04e75';
        this.client_secret = '8f66b8c7e915655c028df3211ae69aa7b5f6ff00';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // ? and &: query string; to be learned
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}