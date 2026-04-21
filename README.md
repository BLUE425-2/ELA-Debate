ye nothing here


















??









docker run -d --name=stealth-gaming -p 8080:3000 --shm-size="2gb" \
-e CHROME_CLI="https://play.geforcenow.com --force-device-scale-factor=1 --no-sandbox --disable-features=TouchpadAndWheelScrollLatching --autoplay-policy=no-user-gesture-required --enable-automation" \
lscr.io/linuxserver/chromium:latest


gh codespace ports visibility 8080:public -c $CODESPACE_NAME


URL="https://${CODESPACE_NAME}-8080.app.github.dev/"
echo -e "\n\033[1;32m--- COPY THE CODE BELOW FOR CODE.ORG ---\033[0m\n"
echo -e "<button onclick='const n=window.open(\"about:blank\",\"_blank\");if(n){n.document.open();n.document.write(\"<html><head><title>Google Docs</title><style>body,html{margin:0;padding:0;height:100%;overflow:hidden}iframe{width:100%;height:100%;border:none}</style></head><body><iframe src=\\\"$URL\\\"></iframe></body></html>\");n.document.close()}' style='width:500px;height:100px;font-size:50px;background-color:#4CAF50;color:white;cursor:pointer'>Begin Practice Test</button>"
echo -e "\n\033[1;32m---------------------------------------\033[0m\n"

