# Backend Assignment
Viktoria Steiner & Magdalena Wimmer

##### Easy
- Read up on express and cluster.js Express Production best practices
- Create an express app that serves a few pages
- Benchmark with ab with and without cluster.js

##### Express
```sh
$ npm install express --save
```

##### Node-Pm
- [node-pm] - A better worker process manager


##### ApacheBench Test
ab -n 100000 -c 500 http://localhost:3000/

##### Solution
run index.js with node
```sh
$ node index.js
```
run index.js with node-pm
```sh
$ node-pm index.js
```

##### Output
###### with node
![with-node](https://github.com/magdawi/ss4-backend1/blob/master/images/ab-test-with-node.png)

###### with node-pm
![with-node-pm](https://github.com/magdawi/ss4-backend1/blob/master/images/ab-test-with-node-pm.png)


[node-pm]: <https://www.npmjs.com/package/node-pm>
