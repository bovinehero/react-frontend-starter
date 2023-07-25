## Node .nvenv Setup


Installed the latest LTS version of Node (18.17.0) https://nodejs.org/en/download

then in the local dir:

``` sh
npx create-react-app . --use-npm
```


React bootstrap

``` sh
npm install react-bootstrap
```

## API Endpoints

| Methods \ Resources  | Profiles<br>(name, content) | Posts<br>(image, title, image_filter, content) | Comments<br>(comment)  | Likes<br>(id)    | Followers<br>(id)  | Custom 1<br>() | Custom 2<br>() |
| :------------------: | :-------------------------: | :--------------------------------------------: | :--------------------: | :--------------: | :----------------: | :------------: | :------------: |
| __Create - Post__    | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __Retrieve - Get__   | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __Update - Put__     | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| __Destroy - Delete__ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __List - Get__       | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| __Search - Get__     | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

| Authentication             | Endpoint                      | Expected Value |
| :------------------------: | :---------------------------: | :------------: |
| registration<br>(POST)     | /dj-rest-auth/registration    | username, password1, password2 |
| login<br>(POST)            | /dj-rest-auth/login           | username, password |
| logout<br>(POST)           | /dj-rest-auth/logout          | |
| user<br>(GET)              | /dj-rest-auth/logout          | |
| refresh token <br>(POST)   | /dj-rest-auth/token/refresh   | refresh token |
| change password <br>(POST) | /dj-rest-auth/password/change | newpassword1. newpassword2 |


## markdown handler

``` sh
npm install create-react-app
npx create-react-app my-react-app
cd my-react-app
npm install react-markdown react-syntax-highlighter 
npm install  @material-ui/icons @material-ui/core --force
```

Use this as part of the css for the site to get a nice clear view (App.css)

``` css
body {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.App {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
}
.wrapper {
  width: 45%;
  height: 60%;
  margin: 25px;
  outline: none;
  display: flex;
  padding: 20px;
  background: #eceeee;
  flex-direction: column;
  border: 2px solid #ccc;
  overflow: hidden;
  overflow-y: auto;
}
.head {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  font-size: 15px;
}
textarea {
  padding: 15px;
  border: none;
  outline: none !important;
  width: 96%;
  height: 100%;
  overflow-x: hidden;
  font-size: 17px;
  resize: none;
  background: #eceeee;
}
.markdown {
  padding: 15px;
  border: none;
  outline: none !important;
  width: 96%;
  height: 100%;
  resize: none;
  overflow-x: hidden;
  background: #fff;
}
```


use this as App.js

``` jsx
import './App.css'
import React from 'react'
import LiveMarkdown from './components/LiveMarkdown'
function App() {
  return (
    <div>
      <LiveMarkdown />
    </div>
  )
}
export default App
```

This will give the live markdown editor.

``` jsx
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
export default function LiveMarkdown() {
  const [markdownInput, setMarkdownInput] = useState()
  return (
    <div className="App">
      <div className="wrapper">
        <div className="head">
          MARKDOWN
        </div>
        <textarea
          autoFocus
          className="textarea"
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
        ></textarea>
      </div>
      <div className="wrapper">
        <div className="head">
          PREVIEW
        </div>
        <ReactMarkdown
          children={markdownInput}
          components={{
            code: MarkComponent,
          }}
        />
      </div>
    </div>
  )
}
const MarkComponent = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  )
}
```

https://www.positronx.io/how-to-create-live-markdown-editor-in-react-js/