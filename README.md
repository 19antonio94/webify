[ ![Codeship Status for AD2014/app.let.life](https://codeship.com/projects/18273b00-e1fd-0132-eca4-3642858bbef8/status?branch=master)](https://codeship.com/projects/81346)

# webify


## how to install

first clone and install dependencies

```shell
git clone git@github.com:AD2014/webify
cd webify
npm install
``````

the `npm install` will run `bower install` and `gulp build` to generate all the html for the app in the `build` directory.

## how to test

```shell
npm test
```



## how to develop

```
gulp watch
```

## how to change env

```
export NODE_ENV=production
npm install

## OR
export NODE_ENV=staging
npm install

## OR
export NODE_ENV=devel
npm install

```

## how to clean and rebuild all

```
npm run-script clean
npm install
```

## codestyle

//TODO
# webify
