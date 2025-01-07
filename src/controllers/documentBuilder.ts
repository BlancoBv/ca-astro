import { promises as fs } from "fs";
import path from "path";

interface Builder {
  setFileName(fileName: string): this;
  setAutoName(fileExtension: string): this;
  setDirectory(directory: string): this;
  setOrigin(origin: string): this;
}

function generadorNombre(fileExtension: string) {
  let d = new Date().getTime();
  let uuid = "itsrxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid + fileExtension;
}

export class DocumentBuilder implements Builder {
  private document: Document;

  constructor() {
    this.document = new Document();
  }

  reset(): void {
    this.document = new Document();
  }
  setFileName(fileName: string): this {
    this.document.fileName = fileName;
    return this;
  }
  setAutoName(fileExtension: string): this {
    const autoName = generadorNombre(fileExtension);
    this.document.fileName = autoName;
    return this;
  }
  setDirectory(directory: string): this {
    this.document.directory = directory;
    return this;
  }
  setOrigin(origin: string): this {
    this.document.origin = origin;
    return this;
  }
  getResult() {
    const result = this.document;
    this.reset();
    return result;
  }
}

class Document {
  private _fileName: string | null = null;
  private _directory: string | null = null;
  private _origin: string | null = null;
  private PROD = import.meta.env.PROD;
  private baseDir = this.PROD ? "/ca-astro/client" : "public";
  private __dirname = path.resolve();

  public set fileName(fileName: string) {
    this._fileName = fileName;
  }
  public set directory(directory: string) {
    this._directory = directory;
  }

  public set origin(origin: string) {
    this._origin = origin;
  }
  public async writeFile(file: File): Promise<string | null> {
    const dir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this._directory ?? "",
      this._fileName ?? ""
    );

    try {
      const buffer = file.stream();
      await fs.writeFile(dir, buffer);
      return this._fileName;
    } catch (error) {
      throw error;
    }
  }
  public async getFiles(): Promise<
    { fileName: string; url: string; [key: string]: string }[]
  > {
    const dir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this._directory ?? ""
    );

    try {
      const files = (await fs.readdir(dir)).map((el) => ({
        url: this._origin + "/uploads/" + this._directory + "/" + el,
        fileName: el,
      }));
      return files;
    } catch (err) {
      return [];
    }
  }
  public updateFile() {}

  public async deleteFile() {
    const dir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this._directory ?? "",
      this._fileName ?? ""
    );
    try {
      await fs.unlink(dir);
    } catch (error) {
      throw error;
    }
  }
}
