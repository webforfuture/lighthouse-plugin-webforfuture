NODE_PATH=.. lighthouse http://localhost:1313/ \
  --plugins=lighthouse-plugin-webforfuture \
  --view \
  --chrome-flags="--no-sandbox --headless" \
  --output-path=/tmp/foo/file.html