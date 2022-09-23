'use strict';

import test from 'ava';
const specialFunc2 = require('.');

const user = 'tech.planner';

const check = (usr, opt) => {
	return specialFunc2.specificField(usr, opt).then(res => {
		console.log(' ' + opt + ' : ' + res.data + ' \n ');
	});
};

const userImage = usr => {
	return specialFunc2.instaRegular(usr).then(res => {
		console.log(' Image URL : ' + res + ' \n ');
	});
};

const getall = usr => {
	return specialFunc2.getAll(usr).then(res => {
		console.log('all Data : ' + JSON.stringify(res.data) + '\n');
	});
};

userImage(user);
check(user, 'id');
check(user, 'fullname');
check(user, 'username');
check(user, 'bio');
check(user, 'externalUrl');
check(user, 'linkshimmed');
check(user, 'posts');
check(user, 'followers');
check(user, 'following');
check(user, 'private');
check(user, 'verified');
check(user, 'connected');
getall(user);

test('userid', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'id');

	t.is(specialFunc.data, '45481686154');
});

test('fullname', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'fullname');

	t.is(specialFunc.data, 'Girish');
});

test('username', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'username');

	t.is(specialFunc.data, 'tech.planner');
});

test('bio', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'bio');

	t.is(specialFunc.data, specialFunc.data);
});

test('externalUrl', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'externalUrl');

	t.is(specialFunc.data, 'https://www.techplanner.xyz');
});

test('linkshimmed', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'linkshimmed');

	t.is(specialFunc.data, specialFunc.data);
});

test('posts', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'posts');

	t.is(specialFunc.data, '12');
});

test('followers', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'followers');

	t.is(specialFunc.data, specialFunc.data);
});

test('following', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'following');

	t.is(specialFunc.data, specialFunc.data);
});

test('private', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'private');

	t.is(specialFunc.data, 'false');
});

test('verified', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'verified');

	t.is(specialFunc.data, 'false');
});

test('connected', async t => {
	const specialFunc = await specialFunc2.specificField(user, 'connected');

	t.is(specialFunc.data, 'null');
});

test('getAll', async t => {
	const specialFunc = await specialFunc2.getAll(user, 'getAll');

	t.is(specialFunc.data, specialFunc.data);
});
