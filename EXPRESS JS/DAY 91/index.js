import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "D:\\PROGRAMMING TUTORIAL\\Web devlopment\\365-DAYS-365-CODES\\EXPRESS JS\\DAY 91";

(async () => {
    try {
        let files = await fs.readdir(basepath);

        for (const item of files) {
            console.log("Processing:", item);

            let ext = path.extname(item).slice(1); // Extract extension without "."
            if (!ext || ext === "js" || ext === "json") continue; // Skip JS & JSON files

            let targetDir = path.join(basepath, ext);
            let oldPath = path.join(basepath, item);
            let newPath = path.join(targetDir, item);

            // If directory doesn't exist, create it automatically
            if (!fsn.existsSync(targetDir)) {
                await fs.mkdir(targetDir, { recursive: true });
                console.log(`Created folder: ${targetDir}`);
            }

            // Move file to the respective folder
            await fs.rename(oldPath, newPath);
            console.log(`Moved: ${item} -> ${targetDir}`);
        }

        console.log("File organization complete!");
    } catch (error) {
        console.error("Error:", error);
    }
})();
