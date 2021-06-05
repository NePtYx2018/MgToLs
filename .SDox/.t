nam=$(cat .n)
me=$(cat .m)
lynx -nonumbers -dump https://www.google.com/search?q=$nam%2B$me > reg.txt

