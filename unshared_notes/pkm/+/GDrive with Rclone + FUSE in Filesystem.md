---
note_type: article
tags: 
  - Linux
---

## Objetivo

En esta nota muestro como montar mi unidad de GDrive sobre mi filesystem Linux utilizando rclone con FUSE


```bash
rclone listremotes
mkdir -pv 5_Rclone_Fuse/GDrive-daniel.oscar.zamo_gmail.com/  
rclone config  
systemctl -t --user system  
cp .config/systemd/user/rclone-fuse-danieloscar.zamo_tajamar365.com.service .config/systemd/user/rclone-fuse-daniel.oscar.zamo_gmail.com.service    
vim .config/systemd/user/rclone-fuse-daniel.oscar.zamo_gmail.com.service
systemctl --user enable --now rclone-fuse-daniel.oscar.zamo_gmail.com.service
```