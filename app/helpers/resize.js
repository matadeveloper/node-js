/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 10-06-2022 12:11:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const {Module} = require('configs/module')
const sharp    = new Module().sharp()
const uuidv4   = new Module().uuidv4()
const path     = require('path')

class Resize {
    constructor(folder) {
      this.folder = folder;
    }
    save(buffer) {
        const filename = Resize.filename();
        const filepath = this.filepath(filename);
    
        sharp(buffer)
        .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
        })
        .toFile(filepath);
        
        return filename;
    }
    static filename() {
      return `${uuidv4()}.png`;
    }
    filepath(filename) {
      return path.resolve(`${this.folder}/${filename}`)
    }
}

module.exports = Resize