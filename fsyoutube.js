try {
  version.extensions['fsyoutubeMacro'] = { 
    major:1, minor:0, revision:0 
  };


	var player_div='fsyoutube';
	    
	


  macros['fsyoutube'] = {
    handler: function(place, macroName, params, parser) {
	videoid=params[0];
	if (typeof(YT)==="undefined") {
		initialize_video(videoid,0);
	} else {
	player=YT.get(player_div);
	macro_play_video(player,videoid,0);
	}
	new Wikifier(place, "");
    },
    init: function() {},
  };

macros['fsyoutube_jump'] ={
    handler: function(place, macroName, params, parser) {
	videoid=params[0];
	seconds=params[1];
	if (typeof(YT)==="undefined") {
		initialize_video(videoid,seconds);
	} else {
		player=YT.get(player_div);
		macro_play_video(player,videoid,seconds);
	}
	new Wikifier(place, "");
    },
    init: function() {},
  };


macro_play_video=function(player,videoid,seconds){
	player.loadPlaylist(videoid,0,seconds);
	player.setLoop(true);
}


initialize_video=function(videoid,seconds){
	getWindowRenderedSize = function(){
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
	firstChildElementTag = bodyTag.firstElementChild;
	firstChildElementTag.parentNode.insertBefore(playerTag,firstChildElementTag);
	
	windowsize = getWindowRenderedSize();
	windowX = windowsize[0];
	windowY = windowsize[1];
	var player;
	window.player=player;

	      window.onYouTubeIframeAPIReady=function(){
		player = new YT.Player(player_div, {
		  playerVars: {
				'autoplay': 1,
				'controls': 0, 
				'showinfo': 0, 
				'modestbranding': 1}, 
		  height: windowY, 
 		  width: windowX,
		  events: {'onReady':	
				function(e){
					player=e.target;
					macro_play_video(player,videoid,seconds);
				}
			}});
	      }
	}



} catch(e) {
  throwError(place,"fsyoutube Setup Error: "+e.message); 
}
	
