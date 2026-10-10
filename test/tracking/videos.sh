#!/bin/bash
# Erzeugt Fake-Kamera-Videos (1280x720, y4m) aus Standbildern, je ohne und mit
# zeitlichem Sensorrauschen.
set -e
cd "$(dirname "$0")"
B=../cache/bilder
Z=ausgabe/videos
mkdir -p $Z
mach() { # name bild filter
  ffmpeg -v error -y -loop 1 -i "$B/$2" -t 5 -r 30 -vf "$3,scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,format=yuv420p" -pix_fmt yuv420p "$Z/$1.y4m"
  ffmpeg -v error -y -loop 1 -i "$B/$2" -t 5 -r 30 -vf "$3,scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,noise=alls=7:allf=t+u,format=yuv420p" -pix_fmt yuv420p "$Z/$1_rauschen.y4m"
}
mach hand paper_165.jpg "null"
mach hand_ruecken right_hands.jpg "crop=360:382:360:0"
mach gesicht business-person.png "crop=958:539:0:0"
mach kette business-person.png "crop=958:539:0:180"
ls -la $Z
