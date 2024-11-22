import path from "path";
import sharp from "sharp";
import { promises as fs } from "fs";

export default class ImageController {
  private directory: string;

  constructor(directory: string) {
    this.directory = directory;
  }
  private PROD = import.meta.env.PROD;
  private baseDir = this.PROD ? "dist/client" : "public";
  private __dirname = path.resolve();

  private generadorNombre() {
    let d = new Date().getTime();
    let uuid = "itsrxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    /*  return uuid + type.replace("image/", "."); */
    return "/" + uuid + ".webp";
  }
  async save(fileBuffer: Buffer) {
    const uploadsDir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this.directory
    );

    const fileName = this.generadorNombre();

    await sharp(fileBuffer)
      .webp({ quality: 50 })
      .toFile(uploadsDir + fileName);

    return fileName;
  }

  async readFiles(origin: string) {
    const uploadsDir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this.directory
    );

    console.log(uploadsDir);

    const files = (await fs.readdir(uploadsDir)).map((el) => ({
      url: origin + "/uploads/" + this.directory + "/" + el,
      fileName: el,
    }));
    return files;
  }

  async deleteFile(fileName: string) {
    const filePath = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this.directory,
      fileName
    );
    await fs.unlink(filePath);
  }
}
