# SuperNurse
Super Nurse

Para poder trabajar offline con el calculo de los datos de Nutricion de la poblacion que las Nutriologas y/o Enfermeras. Si tienen linea que mejor, pero si no, pueden trabajar.

La app de NutriNurse la armo usando:

Ionic 3

PouchDB - LocalStorage

CouchDB - RemoteStorage (con auto sync)

X el momento el server de BD CouchDB atiene a localhost. Hay que hacer un tunel para que funcione en modo DEV. Les comparto las llaves (adjuntas) y el comando
```sh
victor@centauro:~/dev/LOZCAR.MX/ssh$ ssh -L5984:127.0.0.1:5984 -i bitnami-hosting.pem bitnami@lozcar.bitnamiapp.com
Welcome to Ubuntu 14.04.5 LTS (GNU/Linux 3.13.0-79-generic x86_64)
*** System restart required ***
       ___ _ _                   _
      | _ |_) |_ _ _  __ _ _ __ (_)
      | _ \ |  _| ' \/ _` | '  \| |
      |___/_|\__|_|_|\__,_|_|_|_|_|

  *** Welcome to Bitnami                             ***
  *** Bitnami Wiki:   https://wiki.bitnami.com/      ***
  *** Bitnami Forums: https://community.bitnami.com/ ***
Last login: Sun May 14 18:59:44 2017 from fixed-187-190-163-102.totalplay.net
bitnami@ip-172-31-55-49:~$
```
Tambien el server de AUTH esta corriendo localmente. Luego se pasara al server, pero una vez que hacen el tunnel se corre el server de esta manera:
```sh
victor@centauro:~/dev/ionic2-apache-couchDB/clouddb/src/app/todos-server$ node todos-server.js
Memory Adapter loaded
App listening on 3000
OPTIONS /auth/register 204 2.395 ms - -
(node:32717) DeprecationWarning: crypto.pbkdf2 without specifying a digest is deprecated. Please specify a digest
POST /auth/register 200 2061.744 ms - 277
OPTIONS /auth/login 204 1.263 ms - -
POST /auth/login 200 1262.532 ms - 288
OPTIONS /auth/register 204 0.137 ms - -
POST /auth/register 200 1927.645 ms - 279
OPTIONS /auth/login 204 0.715 ms - -
POST /auth/login 200 1166.904 ms - 290
OPTIONS /auth/login 204 0.336 ms - -
POST /auth/login 200 1164.210 ms - 290
```
La aplicacion la corren:
```sh
victor@centauro:~/git/SuperNurse$ npm install

victor@centauro:~/git/SuperNurse$ ionic serve -c

> ionic-hello-world@ ionic:serve /home/victor/git/SuperNurse
> ionic-app-scripts serve "-c"

[22:03:56]  ionic-app-scripts 1.3.7
[22:03:56]  watch started ...
[22:03:56]  build dev started ...
[22:03:56]  clean started ...
[22:03:56]  clean finished in 4 ms
[22:03:56]  copy started ...
[22:03:56]  transpile started ...
[22:04:00]  transpile finished in 3.53 s
[22:04:00]  preprocess started ...
[22:04:00]  deeplinks started ...
[22:04:00]  deeplinks finished in 31 ms
[22:04:00]  preprocess finished in 32 ms
[22:04:00]  webpack started ...
[22:04:00]  copy finished in 3.76 s
[22:04:13]  webpack finished in 13.35 s
[22:04:13]  sass started ...
[22:04:15]  sass finished in 2.08 s
[22:04:15]  postprocess started ...
[22:04:15]  postprocess finished in 6 ms
[22:04:15]  lint started ...
[22:04:15]  build dev finished in 19.07 s
[22:04:15]  watch ready in 19.16 s
[22:04:15]  dev server running: http://localhost:8100/

[22:04:20]  tslint: src/providers/todos.ts, line: 61
            Unused variable: 'doc'

      L61:          let doc = result.rows.map((row) => {
      L62:            this.data.push(row.doc);

[22:04:20]  lint finished in 4.48 s
[22:04:23]  console.log: Angular is running in the development mode. Call enableProdMode() to enable the production
            mode.
[22:04:23]  console.warn: Native: tried calling StatusBar.styleDefault, but Cordova is not available. Make sure to
            include cordova.js or run in a device/simulator
[22:04:23]  console.warn: Native: tried calling SplashScreen.hide, but Cordova is not available. Make sure to include
            cordova.js or run in a device/simulator
```
