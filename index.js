'use strict';

const got = require('got');
const unicode = require('unicodechar-string');

const baseLink = username => {
	return `https://instagram.com/${username}`;
};

const bodyData = "";

const points = {
	id: `"id":"`,
	fullname: `full_name":"`,
	username: `,"username":"`,
	bio: `"biography":"`,
	externalUrl: `"external_url":"`,
	linkshimmed: `"external_url_linkshimmed":"`,
	posts: `,"edge_owner_to_timeline_media":{"count":`,
	followers: `,"edge_followed_by":{"count":`,
	following: `,"edge_follow":{"count":`,
	private: `,"is_private":`,
	verified: `,"is_verified":`,
	connected: `,"connected_fb_page":`
};

const splitData = (data, index) => {
	if (index === points.id || index === points.fullname || index === points.username || index === points.bio || index === points.externalUrl || index === points.linkshimmed) {
		// console.log(data.split(index)[1].split(`","`)[0]);
		return data.split(index)[1].split(`","`)[0];
	}

	if (index === points.followers || index === points.following) {
		// console.log(data.split(index)[1].split(`},"`)[0]);
		return data.split(index)[1].split(`},"`)[0];
	}

	// console.log(data.split(index)[1].split(`},"`)[0])
	return data.split(index)[1].split(`,"`)[0];
};

module.exports ={ 
	
specificField : (username, info) => {
	return got(baseLink(username)).then(res => {
		const data = res.body;

		// console.log(data);
		
		const skip = points[info];
		
		// console.log(skip);

		const user = splitData(data, skip);

		// console.log(user);
		
		return {data: unicode(user)};
	}).catch(err => {
		if (err && err.message === `Cannot read property \'split\' of undefined`) {
			return {data: false};
		}
		return {data: err.message};
	});
},


// getAllDetails : (username,allInfo)=>{
// 	return got(baseLink(username)).then(res=>{
// 		const data = res.body;
// 	}).catch(err =>{

// 	})
// }


}
