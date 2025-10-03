#!/bin/bash

# Go to your video folder
cd public/assets/video || exit

# Loop through all mp4 files
f="WhatsApp Video 2025-10-01 at 06.47.49.mp4"
echo "Compressing $f ..."
ffmpeg -i "$f" -vcodec libx264 -crf 28 -preset veryfast -acodec aac -b:a 128k -y "tmp_$f"
mv "tmp_$f" "$f"

echo "All videos compressed!"
