// 1
window._pusq = window._pusq || [];
window._pusVisitorData = window._pusVisitorData || [];
window._pusVisitorID = window._pusVisitorID || [];
(function()
{ var u=(('https:'==document.location.protocol)?'https://secure.':'http://www.')+'audienceinsights.net/'; var su=u.replace(/www|secure/,'static'); _pusq.push(['setIdp', '59aadb2cd3e2e255']); _pusq.push(['setTrackerUrl', u+'p']); _pusq.push(['setTrackerStaticUrl', su]); _pusq.push(['setVisitorData', _pusVisitorData]); _pusq.push(['setProviderId', _pusVisitorID]); _pusq.push(['send']); var s=document.createElement('script'); s.type='text/javascript'; s.defer=true; s.async=true; s.src=su+'t.js'; var p=document.getElementsByTagName('script')[0]; p.parentNode.insertBefore(s,p); }
)();

// 2
adroll_adv_id = "ECLYUIFRSJEG7EIRF46EGW";
adroll_pix_id = "DJ545LDLQNFYHOKR33HCJV";
/* OPTIONAL: provide email to improve user identification */
/* adroll_email = "username@example.com"; */
(function () {
    var _onload = function(){
        if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
        if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}
        var scr = document.createElement("script");
        var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
        scr.setAttribute('async', 'true');
        scr.type = "text/javascript";
        scr.src = host + "/j/roundtrip.js";
        ((document.getElementsByTagName('head') || [null])[0] ||
            document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
    };
    if (window.addEventListener) {window.addEventListener('load', _onload, false);}
    else {window.attachEvent('onload', _onload)}
}());

// 3
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-103646379-1', 'auto');
		  ga('send', 'pageview');

// 4
/* <![CDATA[ */
var bannersnack_userid = 30492356;
/* ]]> */
var bannerstack_script = document.createElement('script');
bannerstack_script.src = "//s3.amazonaws.com/files.bannersnack.com/tracking/trackingCode.js";
document.body.appendChild(bannerstack_script);

// 5
(function(c, d, e, g, a) {g = c.createElement(d); g.type = "text/java" + d; g.async = !0; g.src = e; a = c.getElementsByTagName(d)[0]; a.parentNode.insertBefore(g, a) }(document, "script", "//tag.retargeter.com/rt/4993/rt.min.js?t="+Math.floor(Date.now() / 86400000)));

// 6
(function() {
	window._pa = window._pa || {};
	var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
	pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//tag.marinsm.com/serve/598173f9f1d9a2e2e3000079.js";
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
})();