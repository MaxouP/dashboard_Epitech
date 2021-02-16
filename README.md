

# DashboardAPI

## API du projet dashboard

## Indices

* [Services et Widgets](#services-et-widgets)

  * [Weather](#weather)
  
  * [Lichess](#lichess)
  
  * [Github](#github)

  * [Speedrun](#speedrun)

* [github](#github)

  * [githubRepositoryFromUsername](#1-githubrepositoryfromusername)

* [lichess](#lichess)

  * [Get my profile](#1-get-my-profile)
  * [getLeaderboardFromCategory](#2-getleaderboardfromcategory)

* [openWeather](#openweather)

  * [weatherByCityName](#1-weatherbycityname)

* [speedrun.com](#speedruncom)

  * [speedrunCategoriesFromGame](#1-speedruncategoriesfromgame)
  * [speedrunLeaderboardFromGameAndCategory](#2-speedrunleaderboardfromgameandcategory)


--------
## Services et Widgets
### Weather
* temperature
* weatherCity

### Lichess
* leaderboardFromCategory

### Github
* lastCommit
* WidgetGithub

### Speedrun
* SpeedrunGames

--------


 # API


## github
Service github permettant de récupérer des informations sur les projets des utilisaturs.



### 1. githubRepositoryFromUsername


Obtient une liste regroupant tous les projets publiés sur le repo.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/github/user/{username}
```



***More example Requests/Responses:***


##### I. Example Request: githubRepositoryFromUsername
```bash
curl --location --request GET 'http://localhost:3000/github/user/katsuyu' --header ': '
````

***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
|  |  |  |



##### I. Example Response: githubRepositoryFromUsername
```js
[
    {
        "id": 247130190,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNDcxMzAxOTA=",
        "name": "AREA",
        "full_name": "Katsuyu/AREA",
        "private": false,
        "owner": {
            "login": "Katsuyu",
            "id": 38114297,
            "node_id": "MDQ6VXNlcjM4MTE0Mjk3",
            "avatar_url": "https://avatars3.githubusercontent.com/u/38114297?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Katsuyu",
            "html_url": "https://github.com/Katsuyu",
            "followers_url": "https://api.github.com/users/Katsuyu/followers",
            "following_url": "https://api.github.com/users/Katsuyu/following{/other_user}",
            "gists_url": "https://api.github.com/users/Katsuyu/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Katsuyu/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Katsuyu/subscriptions",
            "organizations_url": "https://api.github.com/users/Katsuyu/orgs",
            "repos_url": "https://api.github.com/users/Katsuyu/repos",
            "events_url": "https://api.github.com/users/Katsuyu/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Katsuyu/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/Katsuyu/AREA",
        "description": "A IFTTT clone, an Epitech school project.",
        "fork": true,
        "url": "https://api.github.com/repos/Katsuyu/AREA",
        "forks_url": "https://api.github.com/repos/Katsuyu/AREA/forks",
        "keys_url": "https://api.github.com/repos/Katsuyu/AREA/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Katsuyu/AREA/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Katsuyu/AREA/teams",
        "hooks_url": "https://api.github.com/repos/Katsuyu/AREA/hooks",
        "issue_events_url": "https://api.github.com/repos/Katsuyu/AREA/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Katsuyu/AREA/events",
        "assignees_url": "https://api.github.com/repos/Katsuyu/AREA/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Katsuyu/AREA/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Katsuyu/AREA/tags",
        "blobs_url": "https://api.github.com/repos/Katsuyu/AREA/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Katsuyu/AREA/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Katsuyu/AREA/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Katsuyu/AREA/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Katsuyu/AREA/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Katsuyu/AREA/languages",
        "stargazers_url": "https://api.github.com/repos/Katsuyu/AREA/stargazers",
        "contributors_url": "https://api.github.com/repos/Katsuyu/AREA/contributors",
        "subscribers_url": "https://api.github.com/repos/Katsuyu/AREA/subscribers",
        "subscription_url": "https://api.github.com/repos/Katsuyu/AREA/subscription",
        "commits_url": "https://api.github.com/repos/Katsuyu/AREA/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Katsuyu/AREA/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Katsuyu/AREA/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Katsuyu/AREA/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Katsuyu/AREA/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Katsuyu/AREA/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Katsuyu/AREA/merges",
        "archive_url": "https://api.github.com/repos/Katsuyu/AREA/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Katsuyu/AREA/downloads",
        "issues_url": "https://api.github.com/repos/Katsuyu/AREA/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Katsuyu/AREA/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Katsuyu/AREA/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Katsuyu/AREA/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Katsuyu/AREA/labels{/name}",
        "releases_url": "https://api.github.com/repos/Katsuyu/AREA/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Katsuyu/AREA/deployments",
        "created_at": "2020-03-13T17:47:35Z",
        "updated_at": "2020-06-25T12:04:31Z",
        "pushed_at": "2020-03-09T13:45:41Z",
        "git_url": "git://github.com/Katsuyu/AREA.git",
        "ssh_url": "git@github.com:Katsuyu/AREA.git",
        "clone_url": "https://github.com/Katsuyu/AREA.git",
        "svn_url": "https://github.com/Katsuyu/AREA",
        "homepage": null,
        "size": 28690,
        "stargazers_count": 1,
        "watchers_count": 1,
        "language": null,
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "forks": 0,
        "open_issues": 0,
        "watchers": 1,
        "default_branch": "master"
    },
    {...}
]
```


***Status Code:*** 200

<br>



## lichess
Service permettant d'obtenir diverses informations provenant du site lichess.org.



### 1. Get my profile


## En développement...


***Endpoint:***

```bash
Method: GET
Type: FORMDATA
URL: https://lichess.org/api/account
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| content-type | application/json |  |



### 2. getLeaderboardFromCategory


Obtient le classement (**TOP 10**) des joueurs sur les différentes variantes que propose les échecs sur lichess.org.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/lichess/leaderboard/{category}
```



***More example Requests/Responses:***


##### I. Example Request: getLeaderboardFromCategory
```bash
curl --location --request GET 'http://localhost:3000/lichess/leaderboard/blitz'
```


##### I. Example Response: getLeaderboardFromCategory
```js
{
    "users": [
        {
            "id": "crecent",
            "username": "Crecent",
            "perfs": {
                "blitz": {
                    "rating": 2924,
                    "progress": 35
                }
            }
        },
        {
            "id": "hansschmidt",
            "username": "HansSchmidt",
            "perfs": {
                "blitz": {
                    "rating": 2872,
                    "progress": 15
                }
            },
            "online": true
        },
        {
            "id": "dolar9",
            "username": "dolar9",
            "perfs": {
                "blitz": {
                    "rating": 2859,
                    "progress": 46
                }
            },
            "title": "IM"
        },
        {
            "id": "cutemouse83",
            "username": "cutemouse83",
            "perfs": {
                "blitz": {
                    "rating": 2820,
                    "progress": 3
                }
            }
        },
        {
            "id": "yarebore",
            "username": "Yarebore",
            "perfs": {
                "blitz": {
                    "rating": 2812,
                    "progress": -20
                }
            },
            "title": "IM"
        },
        {
            "id": "drvitman",
            "username": "Drvitman",
            "perfs": {
                "blitz": {
                    "rating": 2808,
                    "progress": 19
                }
            },
            "title": "GM"
        },
        {
            "id": "benefactorr",
            "username": "Benefactorr",
            "perfs": {
                "blitz": {
                    "rating": 2806,
                    "progress": 8
                }
            },
            "title": "GM"
        },
        {
            "id": "knezmihailova",
            "username": "KnezMihailova",
            "perfs": {
                "blitz": {
                    "rating": 2806,
                    "progress": 10
                }
            }
        },
        {
            "id": "k-georgiev",
            "username": "K-Georgiev",
            "perfs": {
                "blitz": {
                    "rating": 2803,
                    "progress": 2
                }
            },
            "title": "GM"
        },
        {
            "id": "fireheart92",
            "username": "fireheart92",
            "perfs": {
                "blitz": {
                    "rating": 2800,
                    "progress": 28
                }
            },
            "title": "GM"
        }
    ]
}
```


***Status Code:*** 200

<br>



## openWeather
Service permettant d'obtenir diverses informations au sujet de la météo d'une ville.



### 1. weatherByCityName


Permet d'obtenir le temps qu'il fait dans une ville.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/weather/{cityName}
```



***More example Requests/Responses:***


##### I. Example Request: weatherByCityName
````bash
curl --location --request GET 'http://localhost:3000/weather/Paris'
````


##### I. Example Response: weatherByCityName
```js
{
    "coord": {
        "lon": 2.35,
        "lat": 48.85
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 4.8,
        "feels_like": 0.55,
        "temp_min": 3.89,
        "temp_max": 6.11,
        "pressure": 1019,
        "humidity": 80
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.6,
        "deg": 40
    },
    "clouds": {
        "all": 0
    },
    "dt": 1606619295,
    "sys": {
        "type": 1,
        "id": 6550,
        "country": "FR",
        "sunrise": 1606634439,
        "sunset": 1606665468
    },
    "timezone": 3600,
    "id": 2988507,
    "name": "Paris",
    "cod": 200
}
```


***Status Code:*** 0

<br>



## speedrun.com
Service permettant d'obtenir diverses données provenant de speedrun.com, le plus grand site de référencement de speedrun. 



### 1. speedrunCategoriesFromGame


Obtient la liste des différents jeux d'une licence, leurs catégories, les règles... 

Par ailleurs, il peut exister plusieurs versions d'un même jeu, ceux-ci y sont aussi listés.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/speedrun/{game}
```



***More example Requests/Responses:***


##### I. Example Request: speedrunCategoriesFromGame
````bash
curl --location --request GET 'http://localhost:3000/speedrun/mario'
````

##### I. Example Response: speedrunCategoriesFromGame
```js
[
    {
        "id": "4d74xld7",
        "names": {
            "international": "Cat Mario",
            "japanese": null,
            "twitch": "Cat Mario"
        },
        "abbreviation": "cm",
        "weblink": "https://www.speedrun.com/cm",
        "released": 2007,
        "release-date": "2007-12-01",
        "ruleset": {
            "show-milliseconds": true,
            "require-verification": true,
            "require-video": false,
            "run-times": [
                "realtime"
            ],
            "default-time": "realtime",
            "emulators-allowed": false
        },
        "romhack": false,
        "gametypes": [],
        "platforms": [
            "o7e25xew"
        ],
        "regions": [],
        "genres": [],
        "engines": [
            "mg1j4w1r"
        ],
        "developers": [],
        "publishers": [],
        "moderators": {
            "mkj9nw84": "super-moderator",
            "48go67xp": "super-moderator"
        },
        "created": "2015-04-19T14:20:58Z",
        "assets": {
            "logo": {
                "uri": "https://www.speedrun.com/themes/cm/logo.png",
                "width": 180,
                "height": 25
            },
            "cover-tiny": {
                "uri": "https://www.speedrun.com/themes/cm/cover-32.png",
                "width": 36,
                "height": 32
            },
            "cover-small": {
                "uri": "https://www.speedrun.com/themes/cm/cover-64.png",
                "width": 72,
                "height": 64
            },
            "cover-medium": {
                "uri": "https://www.speedrun.com/themes/cm/cover-128.png",
                "width": 144,
                "height": 128
            },
            "cover-large": {
                "uri": "https://www.speedrun.com/themes/cm/cover-256.png",
                "width": 288,
                "height": 256
            },
            "icon": {
                "uri": "https://www.speedrun.com/themes/cm/favicon.png",
                "width": 24,
                "height": 23
            },
            "trophy-1st": {
                "uri": "https://www.speedrun.com/themes/cm/1st.png",
                "width": 15,
                "height": 16
            },
            "trophy-2nd": {
                "uri": "https://www.speedrun.com/themes/cm/2nd.png",
                "width": 15,
                "height": 16
            },
            "trophy-3rd": {
                "uri": "https://www.speedrun.com/themes/cm/3rd.png",
                "width": 15,
                "height": 16
            },
            "trophy-4th": null,
            "background": {
                "uri": "https://www.speedrun.com/themes/cm/background.png",
                "width": 1746,
                "height": 775
            },
            "foreground": null
        },
        "links": [
            {
                "rel": "self",
                "uri": "https://www.speedrun.com/api/v1/games/4d74xld7"
            },
            {
                "rel": "runs",
                "uri": "https://www.speedrun.com/api/v1/runs?game=4d74xld7"
            },
            {
                "rel": "levels",
                "uri": "https://www.speedrun.com/api/v1/games/4d74xld7/levels"
            },
            {
                "rel": "categories",
                "uri": "https://www.speedrun.com/api/v1/games/4d74xld7/categories"
            },
            {
                "rel": "variables",
                "uri": "https://www.speedrun.com/api/v1/games/4d74xld7/variables"
            },
            {
                "rel": "records",
                "uri": "https://www.speedrun.com/api/v1/games/4d74xld7/records"
            },
            {
                "rel": "series",
                "uri": "https://www.speedrun.com/api/v1/series/049888nv"
            },
            {
                "rel": "derived-games",
                "uri": "https://www.speedrun.com/api/v1/games/4d74xld7/derived-games"
            },
            {
                "rel": "romhacks",
                "uri": "https://www.speedrun.com/api/v1/games/4d74xld7/derived-games"
            },
            {
                "rel": "leaderboard",
                "uri": "https://www.speedrun.com/api/v1/leaderboards/4d74xld7/category/vdo9j1dp"
            }
        ],
        "categories": {
            "data": [
                {
                    "id": "vdo9j1dp",
                    "name": "Warpless No OoB",
                    "weblink": "https://www.speedrun.com/cm#Warpless_No_OoB",
                    "type": "per-game",
                    "rules": "Complete all six levels without exploiting any out-of-bounds glitches or warps. \r\n\r\nTiming Starts at Level 1 on the first frame the life counter is shown. \r\nTiming Ends at contact with the flagpole of Level 6.\r\n\r\nLevels must be done in order like a new game.\r\n\r\nTimes below 4:00.00 need a video.",
                    "players": {
                        "type": "exactly",
                        "value": 1
                    },
                    "miscellaneous": false,
                    "links": [
                        {
                            "rel": "self",
                            "uri": "https://www.speedrun.com/api/v1/categories/vdo9j1dp"
                        },
                        {
                            "rel": "game",
                            "uri": "https://www.speedrun.com/api/v1/games/4d74xld7"
                        },
                        {
                            "rel": "variables",
                            "uri": "https://www.speedrun.com/api/v1/categories/vdo9j1dp/variables"
                        },
                        {
                            "rel": "records",
                            "uri": "https://www.speedrun.com/api/v1/categories/vdo9j1dp/records"
                        },
                        {
                            "rel": "runs",
                            "uri": "https://www.speedrun.com/api/v1/runs?category=vdo9j1dp"
                        },
                        {
                            "rel": "leaderboard",
                            "uri": "https://www.speedrun.com/api/v1/leaderboards/4d74xld7/category/vdo9j1dp"
                        }
                    ]
                },
                {
                    "id": "vdorp6dp",
                    "name": "Warpless",
                    "weblink": "https://www.speedrun.com/cm#Warpless",
                    "type": "per-game",
                    "rules": "Complete all six levels without warps.\r\n\r\nTiming Starts at Level 1 on the first frame the life counter is shown. \r\nTiming Ends at contact with the flagpole of Level 6.\r\n\r\nLevels must be done in order like a new game.\r\n\r\nTimes below 4:00.00 need a video.",
                    "players": {
                        "type": "exactly",
                        "value": 1
                    },
                    "miscellaneous": false,
                    "links": [
                        {
                            "rel": "self",
                            "uri": "https://www.speedrun.com/api/v1/categories/vdorp6dp"
                        },
                        {
                            "rel": "game",
                            "uri": "https://www.speedrun.com/api/v1/games/4d74xld7"
                        },
                        {
                            "rel": "variables",
                            "uri": "https://www.speedrun.com/api/v1/categories/vdorp6dp/variables"
                        },
                        {
                            "rel": "records",
                            "uri": "https://www.speedrun.com/api/v1/categories/vdorp6dp/records"
                        },
                        {
                            "rel": "runs",
                            "uri": "https://www.speedrun.com/api/v1/runs?category=vdorp6dp"
                        },
                        {
                            "rel": "leaderboard",
                            "uri": "https://www.speedrun.com/api/v1/leaderboards/4d74xld7/category/vdorp6dp"
                        }
                    ]
                },
                {
                    "id": "5dwpyynk",
                    "name": "Individual Level",
                    "weblink": "https://www.speedrun.com/cm",
                    "type": "per-level",
                    "rules": null,
                    "players": {
                        "type": "exactly",
                        "value": 1
                    },
                    "miscellaneous": false,
                    "links": [
                        {
                            "rel": "self",
                            "uri": "https://www.speedrun.com/api/v1/categories/5dwpyynk"
                        },
                        {
                            "rel": "game",
                            "uri": "https://www.speedrun.com/api/v1/games/4d74xld7"
                        },
                        {
                            "rel": "variables",
                            "uri": "https://www.speedrun.com/api/v1/categories/5dwpyynk/variables"
                        },
                        {
                            "rel": "records",
                            "uri": "https://www.speedrun.com/api/v1/categories/5dwpyynk/records"
                        },
                        {
                            "rel": "runs",
                            "uri": "https://www.speedrun.com/api/v1/runs?category=5dwpyynk"
                        }
                    ]
                },
                {
                    "id": "n2y5jr1k",
                    "name": "Any%",
                    "weblink": "https://www.speedrun.com/cm#Any",
                    "type": "per-game",
                    "rules": "",
                    "players": {
                        "type": "exactly",
                        "value": 1
                    },
                    "miscellaneous": false,
                    "links": [
                        {
                            "rel": "self",
                            "uri": "https://www.speedrun.com/api/v1/categories/n2y5jr1k"
                        },
                        {
                            "rel": "game",
                            "uri": "https://www.speedrun.com/api/v1/games/4d74xld7"
                        },
                        {
                            "rel": "variables",
                            "uri": "https://www.speedrun.com/api/v1/categories/n2y5jr1k/variables"
                        },
                        {
                            "rel": "records",
                            "uri": "https://www.speedrun.com/api/v1/categories/n2y5jr1k/records"
                        },
                        {
                            "rel": "runs",
                            "uri": "https://www.speedrun.com/api/v1/runs?category=n2y5jr1k"
                        },
                        {
                            "rel": "leaderboard",
                            "uri": "https://www.speedrun.com/api/v1/leaderboards/4d74xld7/category/n2y5jr1k"
                        }
                    ]
                },
                {
                    "id": "n2y3zyzd",
                    "name": "All Checkpoints",
                    "weblink": "https://www.speedrun.com/cm#All_Checkpoints",
                    "type": "per-game",
                    "rules": "Beat the game while collecting all five checkpoints.\r\n\r\nTiming Starts at Level 1 on the first frame the life counter is shown. \r\nTiming Ends at contact with the flagpole of Level 6.\r\n\r\nSubmissions require a video.",
                    "players": {
                        "type": "exactly",
                        "value": 1
                    },
                    "miscellaneous": true,
                    "links": [
                        {
                            "rel": "self",
                            "uri": "https://www.speedrun.com/api/v1/categories/n2y3zyzd"
                        },
                        {
                            "rel": "game",
                            "uri": "https://www.speedrun.com/api/v1/games/4d74xld7"
                        },
                        {
                            "rel": "variables",
                            "uri": "https://www.speedrun.com/api/v1/categories/n2y3zyzd/variables"
                        },
                        {
                            "rel": "records",
                            "uri": "https://www.speedrun.com/api/v1/categories/n2y3zyzd/records"
                        },
                        {
                            "rel": "runs",
                            "uri": "https://www.speedrun.com/api/v1/runs?category=n2y3zyzd"
                        },
                        {
                            "rel": "leaderboard",
                            "uri": "https://www.speedrun.com/api/v1/leaderboards/4d74xld7/category/n2y3zyzd"
                        }
                    ]
                }
            ]
        }
    },
    {
        "id": "pdvqek6w",
        "names": {
            "international": "MARIO",
            "japanese": null,
            "twitch": "Super Mario World"
        },
        "abbreviation": "mario_smw",
        "weblink": "https://www.speedrun.com/mario_smw",
        "released": 2014,
        "release-date": "2014-03-16",
        "ruleset": {
            "show-milliseconds": true,
            "require-verification": true,
            "require-video": true,
            "run-times": [
                "realtime"
            ],
            "default-time": "realtime",
            "emulators-allowed": true
        },
        "romhack": true,
        "gametypes": [
            "v4m291qw"
        ],
        "platforms": [
            "83exk6l5"
        ],
        "regions": [],
        "genres": [],
        "engines": [
            "r81pek5d"
        ],
        "developers": [],
        "publishers": [],
        "moderators": {
            "e8e7406x": "super-moderator"
        },
        "created": "2016-12-21T06:58:08Z",
        "assets": {
            "logo": {
                "uri": "https://www.speedrun.com/themes/smw/logo.png",
                "width": 180,
                "height": 32
            },
            "cover-tiny": {
                "uri": "https://www.speedrun.com/themes/mario_smw/cover-32.png",
                "width": 36,
                "height": 32
            },
            "cover-small": {
                "uri": "https://www.speedrun.com/themes/mario_smw/cover-64.png",
                "width": 72,
                "height": 64
            },
            "cover-medium": {
                "uri": "https://www.speedrun.com/themes/mario_smw/cover-128.png",
                "width": 144,
                "height": 128
            },
            "cover-large": {
                "uri": "https://www.speedrun.com/themes/mario_smw/cover-256.png",
                "width": 288,
                "height": 256
            },
            "icon": {
                "uri": "https://www.speedrun.com/themes/smw/favicon.png",
                "width": 16,
                "height": 16
            },
            "trophy-1st": {
                "uri": "https://www.speedrun.com/themes/smw/1st.png",
                "width": 64,
                "height": 64
            },
            "trophy-2nd": {
                "uri": "https://www.speedrun.com/themes/smw/2nd.png",
                "width": 64,
                "height": 64
            },
            "trophy-3rd": {
                "uri": "https://www.speedrun.com/themes/smw/3rd.png",
                "width": 64,
                "height": 64
            },
            "trophy-4th": null,
            "background": {
                "uri": "https://www.speedrun.com/themes/smw/background.png",
                "width": 1920,
                "height": 1080
            },
            "foreground": null
        },
        "links": [
            {
                "rel": "self",
                "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w"
            },
            {
                "rel": "runs",
                "uri": "https://www.speedrun.com/api/v1/runs?game=pdvqek6w"
            },
            {
                "rel": "levels",
                "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w/levels"
            },
            {
                "rel": "categories",
                "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w/categories"
            },
            {
                "rel": "variables",
                "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w/variables"
            },
            {
                "rel": "records",
                "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w/records"
            },
            {
                "rel": "series",
                "uri": "https://www.speedrun.com/api/v1/series/8nwddx7y"
            },
            {
                "rel": "base-game",
                "uri": "https://www.speedrun.com/api/v1/games/pd0wq31e"
            },
            {
                "rel": "game",
                "uri": "https://www.speedrun.com/api/v1/games/pd0wq31e"
            },
            {
                "rel": "derived-games",
                "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w/derived-games"
            },
            {
                "rel": "romhacks",
                "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w/derived-games"
            },
            {
                "rel": "leaderboard",
                "uri": "https://www.speedrun.com/api/v1/leaderboards/pdvqek6w/category/7dggjq7d"
            }
        ],
        "categories": {
            "data": [
                {
                    "id": "7dggjq7d",
                    "name": "Any%",
                    "weblink": "https://www.speedrun.com/mario_smw#Any",
                    "type": "per-game",
                    "rules": "Time starts when you choose player 1 and time ends when you enter the last pipe.",
                    "players": {
                        "type": "exactly",
                        "value": 1
                    },
                    "miscellaneous": false,
                    "links": [
                        {
                            "rel": "self",
                            "uri": "https://www.speedrun.com/api/v1/categories/7dggjq7d"
                        },
                        {
                            "rel": "game",
                            "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w"
                        },
                        {
                            "rel": "variables",
                            "uri": "https://www.speedrun.com/api/v1/categories/7dggjq7d/variables"
                        },
                        {
                            "rel": "records",
                            "uri": "https://www.speedrun.com/api/v1/categories/7dggjq7d/records"
                        },
                        {
                            "rel": "runs",
                            "uri": "https://www.speedrun.com/api/v1/runs?category=7dggjq7d"
                        },
                        {
                            "rel": "leaderboard",
                            "uri": "https://www.speedrun.com/api/v1/leaderboards/pdvqek6w/category/7dggjq7d"
                        }
                    ]
                },
                {
                    "id": "mke56n8k",
                    "name": "100%",
                    "weblink": "https://www.speedrun.com/mario_smw#100",
                    "type": "per-game",
                    "rules": "Time starts when you choose player 1 and time ends when you enter the last pipe.\r\nYou must beat all levels.",
                    "players": {
                        "type": "exactly",
                        "value": 1
                    },
                    "miscellaneous": false,
                    "links": [
                        {
                            "rel": "self",
                            "uri": "https://www.speedrun.com/api/v1/categories/mke56n8k"
                        },
                        {
                            "rel": "game",
                            "uri": "https://www.speedrun.com/api/v1/games/pdvqek6w"
                        },
                        {
                            "rel": "variables",
                            "uri": "https://www.speedrun.com/api/v1/categories/mke56n8k/variables"
                        },
                        {
                            "rel": "records",
                            "uri": "https://www.speedrun.com/api/v1/categories/mke56n8k/records"
                        },
                        {
                            "rel": "runs",
                            "uri": "https://www.speedrun.com/api/v1/runs?category=mke56n8k"
                        },
                        {
                            "rel": "leaderboard",
                            "uri": "https://www.speedrun.com/api/v1/leaderboards/pdvqek6w/category/mke56n8k"
                        }
                    ]
                }
            ]
        }
    },
    {...}
]
```


***Status Code:*** 200

<br>



### 2. speedrunLeaderboardFromGameAndCategory


Obtient le classement général d'un jeu de la catégorie désignée.

Il est obligatoire de renseigner la catégorie du jeu car chaque jeu en possède des multitudes.

# Information importante
Il faut renseigner l’abréviation du jeu dont on souhaite obtenir le classement. 

Par exemple: A Link to the Past devient alttp.

# Note
Il est possible d'utiliser l'appel **get speedRunCategoriesFromGame** pour les connaître


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/speedrun/{game}/{category}
```



***More example Requests/Responses:***


##### I. Example Request: speedrunLeaderboardFromGameAndCategory

````bash
curl --location --request GET 'http://localhost:3000/speedrun/alttp/No_Major_Glitches'
````

##### I. Example Response: speedrunLeaderboardFromGameAndCategory
```js
{
    "weblink": "https://www.speedrun.com/alttp#No_Major_Glitches",
    "game": "9d3rr0dl",
    "category": "wk6jz5rd",
    "level": null,
    "platform": null,
    "region": null,
    "emulators": null,
    "video-only": false,
    "timing": "realtime",
    "values": {},
    "runs": [
        {
            "place": 1,
            "run": {
                "id": "yv3eld4z",
                "weblink": "https://www.speedrun.com/alttp/run/yv3eld4z",
                "game": "9d3rr0dl",
                "level": null,
                "category": "wk6jz5rd",
                "videos": {
                    "links": [
                        {
                            "uri": "https://www.twitch.tv/videos/234450988?filter=highlights&sort=time"
                        }
                    ]
                },
                "comment": null,
                "status": {
                    "status": "verified",
                    "examiner": "98rrqlg8",
                    "verify-date": "2020-02-17T10:40:07Z"
                },
                "players": [
                    {
                        "rel": "user",
                        "id": "qjo6yl0j",
                        "uri": "https://www.speedrun.com/api/v1/users/qjo6yl0j"
                    }
                ],
                "date": "2018-05-10",
                "submitted": "2020-02-17T10:40:07Z",
                "times": {
                    "primary": "PT21M37S",
                    "primary_t": 1297,
                    "realtime": "PT21M37S",
                    "realtime_t": 1297,
                    "realtime_noloads": null,
                    "realtime_noloads_t": 0,
                    "ingame": null,
                    "ingame_t": 0
                },
                "system": {
                    "platform": "83exk6l5",
                    "emulated": false,
                    "region": "o316x197"
                },
                "splits": null,
                "values": {
                    "2lg2368p": "0q54xd7l",
                    "rn1wzdlj": "gq7298p1"
                }
            }
        },
        {...}
]
```


***Status Code:*** 200

<br>



---
[Back to top](#dashboardapi)