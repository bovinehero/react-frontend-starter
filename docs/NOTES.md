

## API Endpoints

| Methods \ Resources  | Profiles<br>(name, content) | Posts<br>(image, title, image_filter, content) | Comments<br>(comment)  | Likes<br>(id)    | Followers<br>(id)  | Custom 1<br>() | Custom 2<br>() |
| :------------------: | :-------------------------: | :--------------------------------------------: | :--------------------: | :--------------: | :----------------: | :------------: | :------------: |
| __Create - Post__    | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __Retrieve - Get__   | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __Update - Put__     | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| __Destroy - Delete__ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __List - Get__       | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __Search - Get__     | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

Check if MD fails on gitub
&#x2611; or &#9745;
Cross if MD fails on gitub
&#x2612; or &#9746;

✅
❌

| Authentication             | Endpoint                      | Expected Value |
| :------------------------: | :---------------------------: | :------------: |
| registration<br>(POST)     | /dj-rest-auth/registration    | username, password1, password2 |
| login<br>(POST)            | /dj-rest-auth/login           | username, password |
| logout<br>(POST)           | /dj-rest-auth/logout          | |
| user<br>(GET)              | /dj-rest-auth/logout          | |
| refresh token <br>(POST)   | /dj-rest-auth/token/refresh   | refresh token |
| change password <br>(POST) | /dj-rest-auth/password/change | newpassword1. newpassword2 |
