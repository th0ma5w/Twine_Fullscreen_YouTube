Twine_Fullscreen_YouTube
========================

A small macro and stylesheet for Twine to add fullscreen HTML5 video to passages.

# What is this?

This is a JavaScript macro for Twine.

For more about Twine visit: http://twinery.org/

# Why do this?

I wanted to be able to use YouTube videos in a story, and it seemed like other people wanted to do this too.

# What does it look like?

I put up an example story about myself over at the Tilde Club:

http://tilde.club/~thomas/looking_up.html

The Twine file used to create this story is also available in this repository.

# How do I do this?

- Get Twine
- Install the script from this repository into your story.
- Add or merge the styles into your story's styles.
- Use the macros as outlined below.

# How do I use the macros?

There are three macros you can use:

### fsyoutube 

Insert this macro to play a video from the beginning. The macro takes one parameter, the Video ID of the YouTube video.

### fsyoutube_jump

This macro takes an additional parameter, which is the number of seconds to jump forward into the video to begin playing.

### fsyoutube_stop

This macro takes no parameters. If used in a passage immediately following a passage with either of the above two video playing macros, it will stop the video and hide the player.

# Something's wrong

Here are some things I discovered:

- If videos aren't jumping to a spot you want them to, try logging out of YouTube, especially if they are your own videos.

- Try "Incognito Mode" or "Safe Browsing" in your browser to try to preview how others may view your story.

- Some videos aren't available for embedding.

- Some vides that have embedding may only work if you are hosting your Twine story on a web server.

- Videos do not play on mobile devices because the YouTube API does not automatically start videos so as to save mobile plan data usage, and there doesn't seem to be a way around this.

If none of these tips apply, feel free to submit a bug, or contact me via Twitter @th0ma5

# Thank you

To hoopy froods out there who have told me this works for them, that liked the example story, and suggested improvements. Thank you!!


