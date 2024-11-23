import path from 'path';
import sharp from 'sharp';
import { promises } from 'fs';

class ImageController {
  directory;
  constructor(directory) {
    this.directory = directory;
  }
  PROD = true;
  baseDir = this.PROD ? "" : "public";
  __dirname = path.resolve();
  generadorNombre() {
    let d = (/* @__PURE__ */ new Date()).getTime();
    let uuid = "itsrxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : r & 3 | 8).toString(16);
    });
    return "/" + uuid + ".webp";
  }
  async save(fileBuffer) {
    const uploadsDir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this.directory
    );
    const fileName = this.generadorNombre();
    await sharp(fileBuffer).webp({ quality: 50 }).toFile(uploadsDir + fileName);
    return fileName;
  }
  async readFiles(origin) {
    const uploadsDir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this.directory
    );
    console.log(uploadsDir);
    const files = (await promises.readdir(uploadsDir)).map((el) => ({
      url: origin + "/uploads/" + this.directory + "/" + el,
      fileName: el
    }));
    return files;
  }
  async deleteFile(fileName) {
    const filePath = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this.directory,
      fileName
    );
    await promises.unlink(filePath);
  }
}

export { ImageController as I };
