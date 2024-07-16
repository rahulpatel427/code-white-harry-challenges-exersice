import fs from "fs/promises"
import fsn from "fs"
import path from "path"
let bashpath = "D:\\Learning Html, css, js\\Exercise 15 Solution";

let files = await fs.readdir(bashpath)
// console.log(files);


for (const item of files) {

  let ext = item.split(".")[item.split(".").length - 1]
  // console.log(ext)

  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(bashpath, ext))) {

      // move the file to this directory
      fs.rename(path.join(bashpath, item), path.join(bashpath, ext, item))

    }

    else {
      fs.mkdir(ext)
      fs.rename(path.join(bashpath, item), path.join(bashpath, ext, item))
    }

  }

}



