echo "Switching to branch master"
git checkout master

echo "Building app..."
cd client
npm run build

echo "Deploying files to server..."
scp -r build/* williamfrisk@williamfrisk.com:/var/www/williamfrisk.com/
cd ..

echo "Done!"