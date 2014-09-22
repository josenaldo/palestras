// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	slideNumber: true,
	 mouseWheel: true,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

	// Parallax scrolling
	parallaxBackgroundImage: 'img/colocando_sua_aplicacao_na_nuvem_com_o_openshift/bg1.jpg',
	parallaxBackgroundSize: '2880px 1800px',

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});

//window.addEventListener("mousedown", handleClick, false);
//window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
 
function handleClick(e) {
	e.preventDefault();
	if(e.button === 0) Reveal.next(); 
	if(e.button === 2) Reveal.prev(); 
}