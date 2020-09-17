import youtube_dl
ydl = youtube_dl.YoutubeDL({'outtmpl': '%(id)s%(ext)s', 'quiet':True,})
video = "https://www.youtube.com/watch?v=nrCV1Vpt3TM&list=PL86SiVwkw_ocgvNLxFnUUj8-VjswdqKWS"
# this just gets the urls of the video
with ydl:
    result = ydl.extract_info \
    (yt_url,
    download=False) #We just want to extract the info

    if 'entries' in result:
        # Can be a playlist or a list of videos
        video = result['entries']

        #loops entries to grab each video_url
        for i, item in enumerate(video):
            video = result['entries'][i]