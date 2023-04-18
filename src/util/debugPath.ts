import debug from 'debug';
const rootDirName = process.cwd();

export default function debugPath(path: string) {
	try {
		return debug(path.split(rootDirName)[1].replace(/\\/g, ':'));
	} catch (e) {
		return debug(
			`Debug function is in itself broken @debugPath.ts. All hope is lost.\n${e}`
		);
	}
}
