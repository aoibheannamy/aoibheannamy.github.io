from __future__ import unicode_literals
import youtube_dl

def my_status(d):
    if d['status'] == 'finished':
        print('Finished!')

ydl_opts = {
    'progress_hooks': [my_status]
}

with youtube_dl.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/playlist?list=PL86SiVwkw_ofvEbosKlapvTrLs7geMKvp'])

