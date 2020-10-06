# Quick Nodejs Starter Template
> Quick and simple nodejs starter application template for your next project

![Node.js CI](https://github.com/netcode/quick-nodejs-starter/workflows/Node.js%20CI/badge.svg)
![MIT License](https://img.shields.io/github/license/netcode/quick-nodejs-starter.svg?style=flat-square)
![Issues](https://img.shields.io/github/issues/netcode/quick-nodejs-starter.svg?style=flat-square)

## About The Project

I needed a very simple structure for small nodejs applications, so i made one for my own use without too many plugins or over complication on folder structure.

## Built With
* [Express](https://expressjs.com) - Server framework.
* [Dotenv](https://github.com/motdotla/dotenv) - To manage environment variables across environments.
* [Debug](https://github.com/visionmedia/debug) - Debug without console.log
* [Jest](https://jestjs.io) - Testing framework.
* [Nodemon](https://github.com/remy/nodemon) - Monitor for any changes in your node.js application and automatically restart it.
* [eslint](https://eslint.org) - Find and fix problems in your JavaScript code
* [husky](https://github.com/typicode/husky) - Manage pre-commit/pre-post git hooks

## Using Docker 
* For Development
````
docker-compose -f docker-compose-dev.yml up --build
````

* For Production
```
docker-compose up --build
```

## Installation (local)


1. Install dependencies
```
yarn install
```
2. Copy .env.example into .env and edit its content to fit your case.
3. Run in dev mode
```
yarn dev
```


## Installation (production)

1. Install dependencies
```
yarn install --production
```
2. Copy .env.example into .env and edit its content to fit your case.
3. Start it using your fav tool ( recommend pm2 )
```
yarn start
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Eslam Salem - [@net_code](https://twitter.com/net_code) - eslam@shieldfy.com
