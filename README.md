ye nothing here


















??










docker run -d --name=nebula -p 8080:3000 --shm-size="2gb" -e CHROME_CLI="https://www.google.com --force-device-scale-factor=1 --no-sandbox" lscr.io/linuxserver/chromium:latest && gh codespace ports visibility 8080:public -c $CODESPACE_NAME && echo -e "\n\033[1;32m--- COPY THE CODE BELOW FOR CODE.ORG ---\033[0m\n\n<button onclick='const n=window.open(\"about:blank\",\"_blank\");if(n){n.document.open();n.document.write(\"<html><head><title>Google Docs</title><style>body,html{margin:0;padding:0;height:100%;overflow:hidden}iframe{width:100%;height:100%;border:none}</style></head><body><iframe src=\\\"https://$CODESPACE_NAME-8080.app.github.dev/\\\"></iframe></body></html>\");n.document.close()}' style='width:100%;height:100%;font-size:100px;background-color:#4CAF50;color:white;cursor:pointer'>Initiate Nebula</button>\n\n\033[1;32m---------------------------------------\033[0m\n"
