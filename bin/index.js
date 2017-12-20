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
