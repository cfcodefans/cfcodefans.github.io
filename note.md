"start": "react-static start --debug",
"stage": "react-static build --staging --debug",
"build": "react-static build --debug",
"bundle": "react-static bundle --debug",
"export": "react-static export  --debug",
"serve": "serve dist -p 3000 -s"

"start": "node -r ts-node/register node_modules/react-static/bin/react-static start --debug",
"stage": "node -r ts-node/register node_modules/react-static/bin/react-static build --staging --debug",
"build": "node -r ts-node/register node_modules/react-static/bin/react-static build --debug",
"bundle": "node -r ts-node/register node_modules/react-static/bin/react-static bundle --debug",
"export": "node -r ts-node/register node_modules/react-static/bin/react-static export  --debug",
"serve": "serve dist -p 3000 -s"

https://github.com/react-static/react-static/issues/1110