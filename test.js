import test from 'ava';
import func1 from './';

const user = 'glimps.xyz.app';

test('userid', async t => {
	const bud = await func1.specificField(user, 'id');

	t.is(bud.data, `5502620115`);
});

test('fullname', async t => {
	const bud = await func1.specificField(user, 'fullname');

	t.is(bud.data, `GLIMPS.xyz | Seize the day`);
});

test('username', async t => {
	const bud = await func1.specificField(user, 'username');

	t.is(bud.data, `glimps.xyz.app`);
});

test('bio', async t => {
	const bud = await func1.specificField(user, 'bio');

	t.is(bud.data, 'Glimps: Social Networking app based on Real life. \nAdmire and Unstrange people who are around you in real life. \nApp link 👇\nInviting Glimps Pioneers.');
});

test('externalUrl', async t => {
	const bud = await func1.specificField(user, 'externalUrl');

	t.is(bud.data, `http://onelink.to/8m94d7`);
});

test('linkshimmed', async t => {
	const bud = await func1.specificField(user, 'linkshimmed');

	t.is(bud.data, bud.data);
});

test('posts', async t => {
	const bud = await func1.specificField(user, 'posts');

	t.is(bud.data, '86');
});

test('followers', async t => {
	const bud = await func1.specificField(user, 'followers');

	t.is(bud.data, bud.data);
});

test('following', async t => {
	const bud = await func1.specificField(user, 'following');

	t.is(bud.data, `409`);
});

test('private', async t => {
	const bud = await func1.specificField(user, 'private');

	t.is(bud.data, `false`);
});

test('verified', async t => {
	const bud = await func1.specificField(user, 'verified');

	t.is(bud.data, `false`);
});

test('connected', async t => {
	const bud = await func1.specificField(user, 'connected');

	t.is(bud.data, `null`);
});

