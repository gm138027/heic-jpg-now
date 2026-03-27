import type { HelpIndex, HelpPage } from "./content";

export const HELP_INDEX_EN: HelpIndex = {
  title: "Help",
  metaTitle: "Help | HEIC JPG NOW",
  metaDescription:
    "Help for HEIC JPG NOW. Find answers for failed conversions, Download All problems, batch size guidance, and browser-side processing.",
  intro: [
    "This Help section covers the issues people run into most often while converting HEIC files in batches.",
    "If some files fail, Download All stops working, the batch feels too large, or you want to understand how browser-side processing works, start with the page that matches your situation.",
  ],
};

export const HELP_PAGES_EN: HelpPage[] = [
  {
    slug: "heic-conversion-failures",
    title: "Why do some HEIC files fail to convert?",
    metaDescription:
      "Learn the most common reasons some HEIC or HEIF files fail to convert, what to check first, and when the problem is more likely to be the file itself or the current batch size.",
    summary:
      "Explains the most common file-level and batch-level reasons HEIC conversions fail and what to check first.",
    intro: [
      "If some HEIC files convert and others do not, the cause is usually the file itself, where it came from, how large the batch is, or how much load the device is already under. The extension alone does not tell you much.",
    ],
    sections: [
      {
        title: "Why can two files with the same extension behave differently?",
        paragraphs: [
          "HEIC is just the extension. Two files with the same extension can still be saved differently depending on the device, app, or export path that produced them. That is one reason one file may convert cleanly while another does not.",
        ],
      },
      {
        title: "Main reasons HEIC files fail to convert",
        subsections: [
          {
            title: "1. The file is damaged",
            paragraphs: [
              "If a file was damaged during transfer, export, saving, or copying, it may fail to convert. Problems like this often do not show up until the file is actually processed.",
            ],
          },
          {
            title: "2. The files did not all come from the same source",
            paragraphs: [
              "Even with the same .heic or .heif extension, files can differ depending on the device, app, and save path behind them. If one batch mixes files from different sources, it is normal for some to convert and others to fail.",
            ],
          },
          {
            title: "3. The batch is too large for the device you are using",
            paragraphs: [
              "More files and larger files both add load. If the batch is too heavy, conversion can slow down, some files can fail, and Download All can become less reliable later on.",
            ],
          },
          {
            title: "4. The device or browser is already under strain",
            paragraphs: [
              "Browser-based conversion still uses device resources. If you have many tabs open, several background apps running, limited memory, or a larger batch on a phone, processing may slow down or become less stable.",
              "A failed conversion does not mean the whole tool is broken. More often, the problem is one file or one batch that is too heavy for the device you are using.",
            ],
          },
        ],
      },
      {
        title: "If conversion fails, check these first",
        subsections: [
          {
            title: "1. See whether only a few files failed or the whole batch failed",
            paragraphs: [
              "If only a few files failed, start with those files. If the whole batch failed, check file count, file size, device state, and browser load first.",
            ],
          },
          {
            title: "2. Retry only the failed files",
            paragraphs: [
              "If the same files keep failing, isolate them and retry them on their own. That is the fastest way to tell whether the problem is in those files.",
            ],
          },
          {
            title: "3. Split the batch and try again",
            paragraphs: [
              "If you added a lot of files at once, or the files are large, split the batch and rerun it. As a practical guide, batches are easier to manage when you stay around 200 files, 30 MB per file, and 1 GB total.",
            ],
          },
          {
            title: "4. If the issue started on a phone, try the same files on a desktop",
            paragraphs: [
              "The tool works on phones too, but larger batches are usually easier to handle on a desktop. A desktop retry can quickly tell you whether the phone is part of the problem.",
            ],
          },
          {
            title: "5. If the same failure keeps repeating after splitting, go back to the files themselves",
            paragraphs: [
              "If the batch still fails after splitting, the files themselves may be damaged. Another possibility is that the files came from different sources and were not saved the same way, even if the extension looks identical.",
            ],
          },
        ],
      },
      {
        title: "How does this tool handle failed files?",
        paragraphs: [
          "The tool keeps going where it can. A failed file does not automatically stop the rest of the batch.",
        ],
        subsections: [
          {
            title: "1. If only some files fail",
            paragraphs: [
              "Successful files stay available as results. You should not have to restart the whole batch just because part of it failed.",
            ],
          },
          {
            title: "2. If all files fail",
            paragraphs: [
              "If nothing in the batch converts successfully, there is no downloadable result and the tool shows an error message. In that case, check the files themselves, where they came from, or whether the batch is too heavy for the device you are using.",
            ],
          },
        ],
      },
      {
        title: "When is a desktop or local tool a better fit?",
        paragraphs: [
          "The browser is not always the best place to keep pushing the same job. A desktop workflow or local tool is usually a better fit when:",
        ],
        list: [
          "You need to process a very large number of files at once",
          "The batch keeps failing even after you split it",
          "You need EXIF or other metadata preserved as completely as possible",
          "The device is already stretched and the files are large",
          "You want long runs with less dependence on browser conditions",
        ],
      },
    ],
    closing: [
      "If only a few files failed, go back to the tool and retry those files on their own, or rerun the batch with fewer files.",
      "If you want to check whether the batch itself is too large, read: Why does the tool recommend limits for batch size and file size?",
    ],
    relatedSlugs: ["batch-size-guidelines"],
  },
  {
    slug: "batch-size-guidelines",
    title: "Why does the tool recommend limits for batch size and file size?",
    metaDescription:
      "Learn why the tool shows batch-size and file-size guidance, how to tell when the current batch is too heavy, and why 200 files, 30 MB per file, and 1 GB total are practical reference points.",
    summary:
      "Explains why the tool shows batch-size guidance and how to tell when the current batch is too heavy.",
    intro: [
      "The tool does not lock you to a fixed number of files. The recommendations are there because larger jobs are more likely to slow down, fail partway through, or make the later download step less reliable.",
      "If you can add the files to the page, that only means the browser accepted them. It does not guarantee that the same device will finish the whole batch comfortably in one pass.",
    ],
    sections: [
      {
        title: "Why does the page show batch and file-size guidance?",
        paragraphs: [
          "A batch job is more than Add Files. The browser still has to convert the files, keep the results organized, and prepare the later download step. The guidance is there because that whole job gets harder to finish cleanly as the workload grows.",
        ],
      },
      {
        title: "What signs usually mean the batch is already too heavy?",
        paragraphs: [
          "If you see one or more of the signs below, split the batch before you keep going:",
        ],
        list: [
          "Conversion has clearly slowed down",
          "Some files have started to fail",
          "The batch feels heavy on a phone",
          "Individual files are large",
          "Downloading the converted results becomes harder to finish",
        ],
      },
      {
        title: "Why do larger batches slow down more easily?",
        paragraphs: [
          "More files means more work in sequence. Larger files mean more work per file. Either way, the browser and device have more to carry through conversion, result handling, and download prep.",
          "Both can slow the process down, even if the files were added without trouble at the start.",
        ],
      },
      {
        title: "Why does the tool mention 200 files, 30 MB per file, and 1 GB total?",
        paragraphs: [
          "These numbers are guidelines, not hard limits.",
        ],
        list: [
          "Around 200 files per batch: a practical range for many common batch jobs without making the full process too heavy",
          "Around 30 MB per file: large files can become heavy even when the file count is not very high",
          "Around 1 GB total: helps keep the full batch from becoming so heavy that later steps start to break down",
        ],
        afterList: [
          "Treat those numbers as a practical guide, not as a hard stop.",
        ],
      },
      {
        title: "Why can the same batch feel fine on one device and rough on another?",
        paragraphs: [
          "Because the tool runs in the browser, the device matters. The same batch may feel fine on a desktop and noticeably heavier on a phone.",
          "That is normal. The guidance is there to keep the tool usable across different devices, not to imply that every device can handle the same load.",
        ],
      },
      {
        title: "What if I need to process a very large batch anyway?",
        paragraphs: [
          "If you need to work through a large number of HEIC files, this approach is usually more stable:",
        ],
        list: [
          "Use a desktop if you can",
          "Split the work into smaller batches from the start",
          "Keep the successful results first, then move on to the next batch",
          "If you need fuller EXIF preservation or long continuous runs, use a local tool",
        ],
      },
    ],
    closing: [
      "If the batch has clearly slowed down, or some files have started to fail, split it and try again.",
      "If the problem looks less like batch size and more like a file-level issue, check: Why do some HEIC files fail to convert?",
    ],
    relatedSlugs: ["heic-conversion-failures"],
  },
  {
    slug: "batch-download-issues",
    title: "What should I do if Download All doesn't work?",
    metaDescription:
      "Learn why Download All can fail after conversion, how to tell a packaging problem from a conversion problem, and how to keep the files that already worked before retrying.",
    summary:
      "Explains why Download All can fail after conversion and how to keep the files that already worked.",
    intro: [
      "Sometimes the files finish converting but Download All still fails. When that happens, the trouble is usually in the step where the browser gathers the successful files and prepares them for download, not in the earlier conversions themselves.",
      "Start by checking what already worked. Do not assume you need to rerun the whole batch.",
    ],
    sections: [
      {
        title: "Why can Download All fail after conversion finishes?",
        paragraphs: [
          "Conversion is not the last step. After the files finish converting, the browser still has to organize the successful results and prepare the bundled download. If the batch is heavy enough, that later step can slow down or fail even when the conversions already finished.",
          "So a successful conversion and a working Download All button are connected, but they are not the same thing.",
        ],
      },
      {
        title: "When is Download All more likely to fail?",
        paragraphs: [
          "Download All is more likely to struggle in situations like these:",
        ],
        list: [
          "The batch contains many files",
          "Individual files are large and the total load is heavy",
          "The browser or device has very little headroom left",
          "Many tabs are open, or other apps are already using resources",
          "A heavier batch is running on a phone",
        ],
      },
      {
        title: "What should I check first?",
        subsections: [
          {
            title: "1. Check whether successful files are still there",
            paragraphs: [
              "If some files already converted successfully, keep those results in mind first. You may not need to redo the full batch.",
            ],
          },
          {
            title: "2. Separate conversion problems from later download-stage problems",
            paragraphs: [
              "If the files themselves are not converting, the issue starts earlier. If the files do convert but only Download All fails, the issue is more likely to be in the later step where the browser packages the results for download.",
            ],
          },
          {
            title: "3. Check whether the batch is simply too heavy",
            paragraphs: [
              "If the job was already large, the files were large, or the flow had been slowing down before the end, the batch may simply be too heavy for the device you are using.",
            ],
          },
        ],
      },
      {
        title: "What is the safest way to continue?",
        paragraphs: [
          "If you already have successful files, keep those first.",
          "A good next order is:",
        ],
        list: [
          "Save the files that already converted successfully",
          "If Download All is unavailable, download files one by one first",
          "If you still want a fresh full set later, rerun the job as smaller batches",
        ],
        afterList: [
          "In most cases, this means the later download step failed, not that every earlier result disappeared.",
        ],
      },
      {
        title: "When should I split the batch, switch to desktop, or use a local tool?",
        paragraphs: [
          "Change the approach instead of repeating the same run when:",
        ],
        list: [
          "The failure shows up in Download All",
          "The whole flow becomes clearly slow before the end",
          "The batch contains many files",
          "Individual files are large",
          "The batch feels heavy on a phone",
          "The same problem keeps coming back after splitting",
          "You need to process a very large batch at once",
          "You want less dependence on browser conditions",
        ],
        afterList: [
          "If the batch is only a little too heavy, splitting it may be enough. If the same problem keeps coming back even after splitting, or the workload is large from the start, a desktop or local tool is usually the better option.",
        ],
      },
      {
        title: "When should I check Why do some HEIC files fail to convert? first?",
        paragraphs: [
          "If the real problem is not Download All, but the files themselves failing during conversion, start with: Why do some HEIC files fail to convert?",
          "That usually means the issue is in the files, where they came from, or the size of the batch, not in the later download step.",
        ],
      },
    ],
    closing: [
      "If you already have successful results, keep those first, then retry with a smaller batch if needed.",
      "If the problem looks more like a conversion problem than a later download problem, also check: Why do some HEIC files fail to convert?",
    ],
    relatedSlugs: ["heic-conversion-failures", "batch-size-guidelines"],
  },
  {
    slug: "browser-side-processing",
    title: "Are files uploaded to a server? What does browser-side processing mean?",
    metaDescription:
      "Learn what browser-side processing means in this tool, how it relates to privacy and device limits, and when desktop or local tools are a better fit for heavier jobs or fuller EXIF retention.",
    summary:
      "Explains what browser-side processing means here, what it does and does not guarantee, and when local tools are a better fit.",
    intro: [
      "This tool does most of its conversion work in your browser. It is not built around uploading files first to a remote conversion server and waiting for converted copies to come back.",
      "That helps explain the privacy side of the tool, but it also explains the limits. Your device and browser still do the work, so file size, batch size, and device load still matter.",
    ],
    sections: [
      {
        title: "What does browser-side processing mean here?",
        paragraphs: [
          "After you add files, the main conversion work runs in the browser on the device you are using.",
          "In practical terms, that means:",
        ],
        list: [
          "The tool is not based on uploading files first and waiting for results to come back",
          "Speed and stability depend partly on the device and browser you are using",
          "Larger files and larger batches put more strain on that device",
        ],
      },
      {
        title: "How does that affect privacy, speed, and device differences?",
        paragraphs: [
          "For normal use, it means the work stays on your device instead of being sent somewhere else for conversion first.",
          "It also means the device pays the cost. If the batch is large, the files are large, or the browser is already busy, the job may slow down or feel less stable.",
          "The same files can feel fine on a desktop and heavy on a phone.",
        ],
      },
      {
        title: "What browser-side processing does not guarantee",
        paragraphs: [
          "Running the conversion in the browser does not guarantee all of the following:",
        ],
        list: [
          "Every file will convert cleanly",
          "Every run will finish quickly",
          "Every device will feel the same",
          "All metadata will stay fully intact",
        ],
        afterList: [
          "If a file is damaged, saved differently, or part of a batch that is too large for the device, you may still see failed conversions, slowdowns, or Download All issues.",
        ],
      },
      {
        title: "What happens to EXIF and other metadata?",
        paragraphs: [
          "Browser-side processing is not the same thing as full metadata preservation.",
          "This tool keeps EXIF where it can, but it is not designed around perfect preservation.",
          "If you just need HEIC files converted to JPG / JPEG for everyday use, that is often enough.",
          "If complete EXIF or metadata preservation matters, a dedicated local tool is the safer choice.",
        ],
      },
      {
        title: "When is staying in the browser a good fit?",
        paragraphs: [
          "Staying in the browser is usually a good fit when:",
        ],
        list: [
          "You want to convert iPhone photos to JPG / JPEG for everyday use",
          "You want files in a more widely supported format quickly",
          "The file count is not extremely large",
          "Complete metadata preservation is not a requirement",
        ],
      },
      {
        title: "When are desktop or local tools a better fit?",
        paragraphs: [
          "A desktop workflow or local tool is usually the better fit when:",
        ],
        list: [
          "You need to process a very large number of files at once",
          "The device already feels overloaded",
          "You are already seeing slowdowns, failed conversions, or Download All problems",
          "You need EXIF or other metadata preserved as completely as possible",
          "You want longer runs with less dependence on browser conditions",
        ],
      },
    ],
    closing: [
      "If the batch feels heavy, this page is the best next step: Why does the tool recommend limits for batch size and file size?",
      "If some files are already failing to convert, check: Why do some HEIC files fail to convert?",
      "If the main problem is the later download step, check: What should I do if Download All doesn't work?",
    ],
    relatedSlugs: ["batch-size-guidelines", "heic-conversion-failures", "batch-download-issues"],
  },
];
