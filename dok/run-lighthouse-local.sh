mkdir -p /tmp/foo/
NODE_PATH=.. lighthouse https://webforfuture.org \
  --plugins=lighthouse-plugin-webforfuture \
  --view \
  --chrome-flags="--no-sandbox --headless" \
  --output-path=/tmp/foo/webforfuture-report.html