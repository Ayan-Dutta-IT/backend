const express = require('express')
require('dotenv').config()

const app = express()

const githubData = {
  "login": "Ayan-Dutta-IT",
  "id": 134796831,
  "node_id": "U_kgDOCAjWHw",
  "avatar_url": "https://avatars.githubusercontent.com/u/134796831?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ayan-Dutta-IT",
  "html_url": "https://github.com/Ayan-Dutta-IT",
  "followers_url": "https://api.github.com/users/Ayan-Dutta-IT/followers",
  "following_url": "https://api.github.com/users/Ayan-Dutta-IT/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ayan-Dutta-IT/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ayan-Dutta-IT/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ayan-Dutta-IT/subscriptions",
  "organizations_url": "https://api.github.com/users/Ayan-Dutta-IT/orgs",
  "repos_url": "https://api.github.com/users/Ayan-Dutta-IT/repos",
  "events_url": "https://api.github.com/users/Ayan-Dutta-IT/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ayan-Dutta-IT/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ayan  Dutta",
  "company": null,
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "Late-night coder fueled by caffeine and curiosity",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-05-27T15:48:22Z",
  "updated_at": "2025-06-29T11:19:23Z"
}

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('hiteshdotcom')
})

app.get('/github',(req, res)=>{
    res.json(githubData)
})
app.get('/login',(req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})
