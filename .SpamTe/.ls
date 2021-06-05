#!/usr/bin/expect
spawn telegram-cli

expect ">"

send -- "add_contact numero base\n"

expect ">"

send -- "contact_list\n"

sleep 10

expect ">"

send -- "msg base Spam By NePtYx\n"

sleep 5
