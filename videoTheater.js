var sourcesCollection = document.getElementsByTagName("source");

var videoSources = Array.from(sourcesCollection);

let sources = videoSources.filter(source => {
	return source.src.includes("m3u");
});

if (sources.length == 0) {
	console.log("No videos found");
} else {
	sources[0].parentNode.pause();
	let url = sources[0].src;
	window.location.href = url;
}
