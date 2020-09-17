import os
import cv2
pathOut = r"C:/Users/amaye/Desktop/Youtube/frames/"
count = 0
counter = 1
listing = os.listdir(r'C:/Users/amaye/Desktop/Youtube/video')
# for video, get frames and create an image file for each
for vid in listing:
    vid = r"C:/Users/amaye/Desktop/Youtube/video/"+vid
    cap = cv2.VideoCapture(vid)
    count = 0
    counter += 1
    success = True
    while success:
        success,image = cap.read()
        print('read a new frame:',success)
        if count%30 == 0 :
             cv2.imwrite(pathOut + 'video%d'%counter + 'frame%d.jpg'%count ,image)
        count+=1