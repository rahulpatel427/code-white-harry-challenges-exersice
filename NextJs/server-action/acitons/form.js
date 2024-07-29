"use server"
import fs from "fs/promises"

export const submitAction = async (e) => {
  console.log(e.get("name"), e.get("add"))

  let a = await fs.appendFile("rahul.txt", `The Name is: ${e.get("name")} & Addresss is: ${e.get("add")} <br />`);
  // Note : yha se hm data ko database me bhi le ja skte he ...
}