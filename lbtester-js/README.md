# lbtester-js
Docker images for Test load balancer (nodejs + express)

#### Local Run (dev)
```
npm install
export APP_VERSION="v.0.1-local"
node app.js
open http://localhost:8888/v3/ui
open http://localhost:8888/v3/app


npm install --save docker-container-id
npm install --save express
npm install --save body-parser
npm install --save cors

Embedded JavaScript templating.
https://ejs.co/
npm install --save ejs

npm install nodemon --save-dev

```

#### Run Docker (Dev)
```
docker run -p 8888:8888 tomj0101/lbtester:lasted
```
