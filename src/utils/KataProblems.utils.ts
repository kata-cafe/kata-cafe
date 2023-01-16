import type { MarkdownInstance } from "astro";
import { FileNameUtils } from "./FileName.utils";

export class KataProblemsUtils {
  static mapProblemNames(problems: MarkdownInstance<Record<string, any>>[]) {
    const problemNames = problems
      .map((problem) => FileNameUtils.mapFileName(problem.file))
      .filter((problemName) => problemName !== "template");

    return problemNames;
  }
}
