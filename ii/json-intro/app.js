const user = {
    "login": "ode96-dev",
    "id": 150020491,
    "node_id": "U_kgDOCPEhiw",
    "avatar_url": "https://avatars.githubusercontent.com/u/150020491?v=4",
    "url": "https://api.github.com/users/ode96-dev",
    "html_url": "https://github.com/ode96-dev",
    "followers_url": "https://api.github.com/users/ode96-dev/followers",
    "following_url": "https://api.github.com/users/ode96-dev/following{/other_user}",
    "gists_url": "https://api.github.com/users/ode96-dev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ode96-dev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ode96-dev/subscriptions",
    "organizations_url": "https://api.github.com/users/ode96-dev/orgs",
    "repos_url": "https://api.github.com/users/ode96-dev/repos",
    "events_url": "https://api.github.com/users/ode96-dev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ode96-dev/received_events",
    "type": "User",
    "site_admin": false,
    "bio": "Flutter, Reactjs/Nextjs\r\n",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-11-06T10:53:53Z",
    "updated_at": "2024-01-18T21:05:05Z"
}

//convert to json string
const str = JSON.stringify(user)

//parse json
const obj = JSON.parse(str)

console.log(obj.bio)