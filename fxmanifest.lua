fx_version "cerulean"

description "Basic MultiJob System for QBCore"
author "Redline Studios"
version '1.0.0'

lua54 'yes'

games {
  "gta5",
}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script  {
  '@oxmysql/lib/MySQL.lua',
  "server/**/*"
}

shared_script  {
  "shared/*.lua"
}

files {
	'web/build/index.html',
	'web/build/**/*',
}
