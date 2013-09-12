/**
 * Plays video on reveal
 *
 * by @ddprrt
 */
var RevealVideoPlayer = (function() {

	var curvid;

	function checkforVideo() {
		var current = Reveal.getCurrentSlide();
		var element = current.querySelector('video');

		/** Slide fades -> stop the current playing video **/
		if(!!curvid) {
			curvid.pause();
		}

		/** Slide appears -> start the video **/
		if(!!element && !!element.play) {
			curvid = element;
			element.play();
		}
	}

	Reveal.addEventListener('slidechanged', checkforVideo);

})();