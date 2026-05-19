#!/bin/bash
# Use Homebrew Node 20 (Create React App works poorly on Node 25+)
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
export HOST=127.0.0.1
export WDS_SOCKET_HOST=127.0.0.1
cd "$(dirname "$0")"

if [ "$1" = "start" ]; then
  echo ""
  echo "  Open: http://127.0.0.1:3000"
  echo "  (Use http, not https — https causes error -101)"
  echo "  Wait for: Compiled successfully!"
  echo ""
fi

exec npm "$@"
