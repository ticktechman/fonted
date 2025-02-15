###############################################################################
##
##       filename: makefile
##    description:
##        created: 2025/02/15
##         author: ticktechman
##
###############################################################################
.PHONY: all build test install doc

PACKER="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT_DIR="$(shell pwd)"
NAME=fonted

all: clean
	@echo "building..."
	@javascript-obfuscator ./*.js -o ./$(NAME) > /dev/null
	@cp -a ./icons ./$(NAME)/
	@cp ./manifest.json ./$(NAME)/
	@cp ./*.js ./$(NAME)/
	@$(PACKER) --pack-extension=$(ROOT_DIR)/$(NAME)
	@cp $(NAME).crx $(NAME).zip
	@ls $(NAME).{crx,pem,zip}
	@echo "done."

dep:
	@echo "installing deps..."
	@npm i -g javascript-obfuscator
	@echo "done."

clean:
	@rm -rf $(NAME).{crx,pem,zip} ./$(NAME)
###############################################################################

###############################################################################
