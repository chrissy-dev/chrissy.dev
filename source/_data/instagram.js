// const Cache = require("@11ty/eleventy-cache-assets");
// const Image = require("@11ty/eleventy-img");

// async function getInstagramData() {
// 	let json = await Cache("https://www.instagram.com/scottishstoater/?__a=1", {
// 		duration: "1d", // 1 day
// 		type: "json" // also supports "text" or "buffer"
// 	});

// 	return json.graphql.user.edge_owner_to_timeline_media.edges
// }

// async function optimiseImages(instagramData) {
// 	let images = [];

// 	await instagramData.forEach(async item => {
// 		let url = item.node.display_url;
// 		let stats = await Image(url, {
// 			widths: [300],
// 			formats: ["jpeg"],
// 			outputDir: "./dist/static"
// 		});

// 		images = [...images, stats]
// 	});

// 	return images;
// }

// module.exports = async function () {
// 	let instagramData = await getInstagramData();
// 	let convertedImages = await optimiseImages(instagramData);
	
// 	return convertedImages;
// };