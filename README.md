## Instagram-Basic-data-Scraper-With-Username
<p align="center">
<img src="mime/instagram.jpg" width="340">
<br><a href="https://travis-ci.org/girishbaranda/Instagram-Basic-Data-Scraper-With-Username">
    <img src="https://travis-ci.org/girishbaranda/Instagram-Basic-Data-Scraper-With-Username.svg?branch=master">
    </a>
    <br>
    <br>
    <b>A node module to extract the basic instagram data with username from the instagram.</b>
</p>

## Install

```
$ npm install --save instagram-basic-data-scraper-with-username
```

## Usage

__`User ID`__
```js
const instaObj = require('instagram-basic-data-scraper-with-username');

const user = 'joietribianni';

instaObj.specificField(user, 'id').then(id => {
  console.log(id);
  // => { data: '1429637717' }
});
```

__`OR`__

```js
instaObj.specificField(user, 'id').then(res => {
  const userId = res.data;
  console.log(userId);
  // => 1429637717
});
```

__`OR`__

```js
instaObj.getId(user).then(res => {
  const userId = res.data;
  console.log(userId);
  // => 1429637717
});
```

## Example

__`Full Name`__

```js
instaObj.specificField(user, 'fullname').then(fullname => {
  console.log(fullname);
  // => { data: 'Joie' }
});
```

## API

```js
instaObj.specificField('username', 'options')
```

`username` `:`  __`string`__

`options` `:` __`string`__


| __`Options`__      | __`Output`__  |
|--------------------|---------------|
| __`id`__           | `string`      |
| __`fullname`__     | `string`      |
| __`username`__     | `string`      |
| __`bio`__          | `string`      |
| __`externalUrl`__  | `string`      |
| __`linkshimmed`__  | `string`      |
| __`posts`__        |  `string`     |
| __`followers`__    |  `string`     |
| __`following`__    |  `string`     |
| __`private`__      |  `boolean`    |
| __`verified`__     |  `boolean`    |
| __`connected`__    |  `object`     |




## Table of other functions that you can use to directly get the data

## Username is the common arguments of the all the functions 

| __`Functions`__      | __`Usage`__  |
|--------------------|---------------|
| __`getId`__           | `ID of the username`      |
| __`getFullname`__     | `Extract Fullname of the username`      |
| __`getBio`__          | `Extract bio of the username`      |
| __`getExternalUrl`__  | `Get External Url of the username`      |
| __`getLinkShimmed`__  | `Get LinkShimmed of the username`      |
| __`getPosts`__        |  `Get Number of Posts of the username`     |
| __`getFollowers`__    |  `Get Number of Followers of the username`     |
| __`getFollowing`__    |  `Get Number of Following of the username`     |
| __`getPrivate`__      |  `True or False if the profile is private or public`    |
| __`getVerified`__     |  `True or False if the profile is verified`    |
| __`getConnected`__    |  `Get the user connection object`     |


## Usage
```js
instaObj.getFullname(user).then(res => {
  const userFullname = res.data;
  console.log(userFullname);
  // => Joie
});
```




## License

MIT &copy; [Girish Baranda](https://girishbaranda.github.io);
