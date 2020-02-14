class Github{
    constructor() {
        this.client_id = '9e519d4371f360354c3b';
        this.client_secret = '331ede4d3c0b4af55c25e4f11dcfe38fa34ae31f';
        this.repos_count = 5;
        this.repos_sort = 'created asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}