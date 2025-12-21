.PHONY:
run:
	docker run --rm -it -v $(CURDIR):/work -w /work homework src/js/homework-11.js
