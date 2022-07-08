
// read and write files, FS module ASYNC 
// using callback

/* const {readFile, writeFile} = require('fs')

readFile('./content/subfolder/first.txt','utf-8',(err, result) => {
    if (err) {
        console.log(err)
        return
    } else {
        const first = result
    }
})
 */

// read and write files? FS module sync

/* const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/second.txt', 'utf-8')

console.log(first)
console.log(second)

writeFileSync('./content/subfolder/combine.txt', first+second+'\n', {flag: 'a'})
const third = readFileSync('./content/subfolder/combine.txt', 'utf-8')
console.log(third); */
