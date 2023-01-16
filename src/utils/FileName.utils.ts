export class FileNameUtils {
  static mapFileName(file: string) {
    const splitFile = file.split("/");
    return splitFile[splitFile.length - 1].split(".")[0];
  }
}
