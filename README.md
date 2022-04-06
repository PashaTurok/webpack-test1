# Steps

1. start any local registry on port 4873
2. git clone https://github.com/PashaTurok/webpack-test1.git
3. Building library:
    1. cd mylib
    2. npm install
    3. npm run dev
4. Building and starting application:
    1. cd myapp
    2. npm install
    3. npm run serve -- --port 8888
    4. Now open http://localhost:8888/static/ and in console we see test_string_1.

In library we work with mylib/src/Constants file, in application with myapp/src/App.ts file. Now:

1. modify in library TEST_STRING to "test_string_2"
2. build and upload library (in mylib): npm run dev
3. update module in application (in myapp): npm update @foo/mylib
4. You will see in browser console: test_string_2
5. modify in library TEST_STRING to "test_string_3"
6. build and upload library (in mylib): npm run dev
7. update module in application (in myapp): npm update @foo/mylib
8. you will NOT see test_string_3 in browser console. If you refresh page you will see test_string_2.


Webpack config is in myapp/vue.config.js
