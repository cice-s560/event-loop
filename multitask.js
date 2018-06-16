// process.env.UV_THREADPOOL_SIZE = 4;

const crypto = require("crypto");
const http = require("http");
const fs = require("fs");

const start = Date.now();

function doRequest() {
    http.get("http://google.com", resp => {
        resp.on("data", () => console.log("REQ:", Date.now() - start));
    });
}

function doFile() {
    fs.readFile("./file1.txt", "utf8", () => {
        console.log("FS:", Date.now() - start);
    })
}

function doHash() {
    crypto.pbkdf2("a", "b", 100000, 512, 'sha512', () => {
        console.log("HASH: ", Date.now() - start);
    });
}

doRequest();
doFile();
doHash();
doHash();
doHash();
doHash();
