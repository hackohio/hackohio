# HackOHI/O Website
![Deployment Status](https://github.com/hackohio/hackohio/workflows/Hack-site%20S3%20Deployment/badge.svg)  
Welcome to the official website for HackOHI/O, an annual hackathon hosted by OHI/O at the Ohio State University.

# How to contribute to the website
- You may want to run a local testing server if you're working with absolute paths or page builders.

**Folder Structure**:  
20**: Contains the HTML pages and asset folders for each individual event.  
hack-assets: Contains commonly used assets (such as minified js) that may be reused across events.

**Deployment**:  
The website is deployed using a simple GitHub actions workflow using AWS's S3 CLI.
- The script is setup to deploy the repo into the root directory
- It uses the `--excludes` filter to avoid overwriting the homepage and other event subfolders
