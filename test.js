import test from 'ava';
import func1 from '.';

const user = 'tech.planner';

test('userid', async t => {
	const specialFunc = await func1.specificField(user, 'id');

	t.is(specialFunc.data, '45481686154');
});

test('fullname', async t => {
	const specialFunc = await func1.specificField(user, 'fullname');

	t.is(specialFunc.data, 'Girish');
});

test('username', async t => {
	const specialFunc = await func1.specificField(user, 'username');

	t.is(specialFunc.data, 'tech.planner');
});

test('bio', async t => {
	const specialFunc = await func1.specificField(user, 'bio');

	t.is(specialFunc.data, specialFunc.data);
});

test('externalUrl', async t => {
	const specialFunc = await func1.specificField(user, 'externalUrl');

	t.is(specialFunc.data, 'https://www.techplanner.xyz');
});

test('linkshimmed', async t => {
	const specialFunc = await func1.specificField(user, 'linkshimmed');

	t.is(specialFunc.data, specialFunc.data);
});

test('posts', async t => {
	const specialFunc = await func1.specificField(user, 'posts');

	t.is(specialFunc.data, '12');
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

