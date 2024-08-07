#!/bin/bash
echo  "Checking dependencies for any update is available..."

repo=$(git pull origin)

output=$(npx npm-check-updates)
if echo "$output" | grep -q "All dependencies match the latest package versions"; then
  echo "Great! Nothing to update :)"
else
  echo "$output"
  echo "Do you want to update all dependencies? (y/n)"
  read -r response

  if [[ $response =~ ^[Yy]$ ]]; then
    echo "Updating dependencies..."
    npx npm-check-updates -u
    rm package-lock.json
    rm -r node_modules
    npm install

    echo "Do you want to commit changes? (y/n)"
    read -r response
    if [[ $response =~ ^[Yy]$ ]]; then
      git add .
      git commit -m "Updated dependencies"
      git push
    else
      echo "Changes are not committed"
    fi
  else
    echo "Exiting dependency updates"
    exit 0
  fi
fi
