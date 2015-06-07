//var a=function(){"use strict"; var Macro={};

var player_div='fsyoutube';

var macro_play_video=function(player,videoid,seconds){
	show_player_div();
	player.loadPlaylist(videoid,0,seconds);
	player.setLoop(true);
}


var initialize_video=function(videoid,seconds){
	var getWindowRenderedSize = function(){
		var w = window,
		    d = document,
		    e = d.documentElement,
		    g = d.getElementsByTagName('body')[0],
		    x = w.innerWidth || e.clientWidth || g.clientWidth,
		    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
		return [x,y];
		}

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
      	var firstScriptTag  = document.getElementsByTagName('script')[0];
      	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var bodyTag = document.getElementsByTagName('body')[0];
	var playerTag = document.createElement('div');
	playerTag.id=player_div;
	var firstChildElementTag = bodyTag.firstElementChild;
	firstChildElementTag.parentNode.insertBefore(playerTag,firstChildElementTag);
	
	var windowsize = getWindowRenderedSize();
	var windowX = windowsize[0];
	var windowY = windowsize[1];
	var player;
        window.player=player;
	window.playerTag=playerTag;
	show_player_div();

	window.onYouTubeIframeAPIReady=function(){
		var player = new YT.Player(player_div, {
		  playerVars: {
				'autoplay': 1,
				'controls': 0, 
				'showinfo': 0, 
				'modestbranding': 1}, 
		  height: windowY, 
 		  width: windowX,
		  events: {'onReady':	
				function(e){
					var player=e.target;
					macro_play_video(player,videoid,seconds);
				}
			}});
	      }
	}


var hide_player_div = function() {
	window.document.getElementById(player_div).style.display="none";
}

var show_player_div = function() {
	window.document.getElementById(player_div).style.display="";
}


Macro.add('fsyoutube', {
//macros.fsyoutube={
    handler: function() {
	var videoid=this.args[0];
	console.log(videoid);
	if (typeof(YT)==="undefined") {
		initialize_video(videoid,0);
	} else {
		var player=YT.get(player_div);
		macro_play_video(player,videoid,0);
	}
      }}
);

Macro.add('fsyoutube_jump',{
//macros.fsyoutube_jump={
    handler: function() {
	var videoid=this.args[0];
	var seconds=this.args[1];
	if (typeof(YT)==="undefined") {
		initialize_video(videoid,seconds);
	} else {
		var player=YT.get(player_div);
		macro_play_video(player,videoid,seconds);
	}
      }}    
);

Macro.add('fsyoutube_stop',{
//macros.fsyoutube_stop={
    handler: function() {
    	if (typeof(YT)==="undefined") {
    		// Nothing to do yet :D
	} else {
		var player=YT.get(player_div);
		player.stopVideo();
		hide_player_div();
	}
      }}
);

};

