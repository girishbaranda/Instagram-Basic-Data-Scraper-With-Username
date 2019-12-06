<p align="center">
<img src="mime/instagram.jpg" width="340">
<br>
  <a href="https://travis-ci.org/girishbaranda/Instagram-Basic-Data-Scraper-With-Username">
  <img src="https://travis-ci.org/girishbaranda/Instagram-Basic-Data-Scraper-With-Username.svg?branch=master">
  </a>
  <!-- ⚫
  <img src="https://travis-ci.org/girishbaranda/Instagram-Basic-Data-Scraper-With-Username.svg?branch=master"> -->
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


## License

MIT &copy; [Girish Baranda](https://girishbaranda.github.io);
