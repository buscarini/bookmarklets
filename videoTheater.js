function findSources(node) {
	var sourcesCollection = node.getElementsByTagName("source");
	var videoSources = Array.from(sourcesCollection);

	return videoSources
	.filter(source => {
		return source.src.includes("m3u");
	})
	.map(source => {
		return {
			node: source.parentNode,
			url: source.src
		};
	});
};

function findVideos(node) {
	var videosCollection = node.getElementsByTagName("video");
	var videoNodes = Array.from(videosCollection);

	return videoNodes.filter(video => {
		return video.src.includes("m3u");
	})
	.map(source => {
		return {
			node: source,
			url: source.src
		};
	});
};


let objs = findSources(document).concat(findVideos(document));

if (objs.length == 0) {
	console.log("No videos found");
} else {
	let v = objs[0];
	v.node.pause();
	window.location.href = v.url;
}
