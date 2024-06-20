# Broken App Issues
1. The app doesn't have body-parser, it was not able to parse JSOn bodies
2. The code included "map" to create an array of promises but there was no "await"
3. missing next(err)
4. app.listen(3000) is incomplete, no error statement from console.log