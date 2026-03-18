#!/bin/bash
# Run this once from the repo root to copy product logos into the website images/ dir.
# Usage: bash setup_images.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMG_DIR="$SCRIPT_DIR/images"

TWEETCLAW_SRC="/Users/hyperorchid/aiwithblockchain/aihub/tweetClaw/dist/images/logo_128.png"
AICLAW_SRC="/Users/hyperorchid/aiwithblockchain/aihub/aiClaw/dist/images/logo_128.png"

mkdir -p "$IMG_DIR"

cp "$TWEETCLAW_SRC" "$IMG_DIR/logo_tweetclaw.png"  && echo "✓ logo_tweetclaw.png"
cp "$TWEETCLAW_SRC" "$IMG_DIR/logo_localbridge.png" && echo "✓ logo_localbridge.png"
cp "$AICLAW_SRC"    "$IMG_DIR/logo_aiclaw.png"      && echo "✓ logo_aiclaw.png"

echo ""
echo "Done. Now commit:"
echo "  git add images/ && git commit -m 'add product logos' && git push"
