import test from 'ava';
import func1 from '.';

const user = 'glimps.xyz.app';

test('userid', async t => {
	const specialFunc = await func1.specificField(user, 'id');

	t.is(specialFunc.data, '5502620115');
});

test('fullname', async t => {
	const specialFunc = await func1.specificField(user, 'fullname');

	t.is(specialFunc.data, 'GLIMPS.xyz | Seize the day');
});

test('username', async t => {
	const specialFunc = await func1.specificField(user, 'username');

	t.is(specialFunc.data, 'glimps.xyz.app');
});

test('bio', async t => {
	const specialFunc = await func1.specificField(user, 'bio');

	t.is(specialFunc.data, specialFunc.data);
});

test('externalUrl', async t => {
	const specialFunc = await func1.specificField(user, 'externalUrl');

	t.is(specialFunc.data, 'http://onelink.to/8m94d7');
});

test('linkshimmed', async t => {
	const specialFunc = await func1.specificField(user, 'linkshimmed');

	t.is(specialFunc.data, specialFunc.data);
});

test('posts', async t => {
	const specialFunc = await func1.specificField(user, 'posts');

	t.is(specialFunc.data, '86');
});

test('followers', async t => {
	const specialFunc = await func1.specificField(user, 'followers');

	t.is(specialFunc.data, specialFunc.data);
});

test('following', async t => {
	const specialFunc = await func1.specificField(user, 'following');

	t.is(specialFunc.data, specialFunc.data);
});

test('private', async t => {
	const specialFunc = await func1.specificField(user, 'private');

	t.is(specialFunc.data, 'false');
});

test('verified', async t => {
	const specialFunc = await func1.specificField(user, 'verified');

	t.is(specialFunc.data, 'false');
});

test('connected', async t => {
	const specialFunc = await func1.specificField(user, 'connected');

	t.is(specialFunc.data, 'null');
});

