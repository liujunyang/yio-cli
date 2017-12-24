#!/usr/bin/env node

/*
 * @file
 * @desc yio client
 * @date 2017/12/20
 *
 */

const path = require('path')
const fse = require('fs-extra')
const commander = require('commander')

const cacheDir = path.join(process.env.HOME, '.yio/yio-core-module')
console.log(cacheDir)

require('keep-module-latest')({
	moduleName: 'yio-core',
	cwd: cacheDir,
	registry: 'https://registry.npmjs.org/',
	beforeInstall: cwd => {
		console.log('do beforeInstall')
		if (fse.pathExistsSync(cwd)) {
			try {
				fse.removeSync(cwd)
			} catch (err) {
				throw new Error(err)
			}
		}
	},
}).then(modulePath => {
	console.log(modulePath)
}).catch(err => {
	console.error(err)
})
