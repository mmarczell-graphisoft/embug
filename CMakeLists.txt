cmake_minimum_required(VERSION 3.20)
project(emsandbox)

add_executable(
	main

	main.cpp
)

target_link_options(
	main
	PUBLIC

	--pre-js=webpack/pre.bundle.js
)

add_custom_command(
	OUTPUT
	webpack/pre.bundle.js

	COMMAND
	npx webpack ./pre.js

	MAIN_DEPENDENCY
	pre.js

	DEPENDS
	webpack.config.js

	WORKING_DIRECTORY
	..

	VERBATIM
)

add_custom_target(
	run_webpack

	DEPENDS
	webpack/pre.bundle.js
)

add_dependencies(
	main
	run_webpack
)