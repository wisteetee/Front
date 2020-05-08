bash:
	docker run --rm -it \
		-v $(CURDIR):/app \
		 -p 3001:3000 \
		 toroia/nodejs \
		 bash