import util from "util";
import { readFile, writeFile } from "fs";
const readfilepromise = util.promisify(readFile);
const writeFilepromise = util.promisify(writeFile);
async function start() {
	try {
		const fr = await readfilepromise(
			new URL("value.txt", import.meta.url),
			"utf-8"
		);
		const sc = await readfilepromise(
			new URL("textfile.txt", import.meta.url),
			"utf-8"
		);
        await writeFilepromise(
					new URL("result.txt", import.meta.url),"this is data",'utf-8'
				);
		console.log(fr, sc);
	} catch (err) {
		console.log(err);
	}
}
start();
