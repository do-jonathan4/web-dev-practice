# Firebase Practice

## [Deployed Site](https://cs-intro.web.app)

### Quick Steps

Install Firebase command line tools globally.
```
npm install -g firebase-tools
```

Then initialize your project. You can just stick to the default options.
```
firebase init hosting
```

That should have generated a public/ folder along with some config files. Serve up your app in the browser with.
```
firebase serve
```

Deploy it by running.
```
firebase deploy
```

### Setting up redirects
In `firebase.json`
```
...
    "redirects": [
      {
        "source": "/contact",
        "destination": "/",
        "type": 302
      }
    ],
```
In this repo, `contact.html` does not exist, so it redirects to the home page.