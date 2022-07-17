/* eslint-disable no-console */
/* eslint-disable func-names */
class FilmRepository {
    constructor(database) {
        this.database = database;
    }

    list() {
        return new Promise((resolve, reject) => {
            this.database.all('SELECT * FROM films, genres, actors', [], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            this.database.get('SELECT * FROM films WHERE id = ?', [id], (err, row) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    create(data) {
        return new Promise((resolve, reject) => {
            this.database.run(
                'INSERT INTO films (name, synopsis, release_year, genre_id) VALUES (?,?,?,?)',
                [data.name, data.synopsis, data.release_year, data.genre_id],
                    function (err) {
                        if (err) {
                            console.error(err.message);
                            reject(err);
                        } else {
                            resolve(this.lastID);
                        }
                    },
                );
            });
        }

//                        const obj = JSON.parse(data); // je parse le json
/*
                        this.database.all('SELECT id = ? FROM genres', [obj.genre_id], (rows2)=>{
                            if(rows2.length <= 0){
                                reject("genre invalide/introuvable");
                            }else{}})
*/                            
/*                       
                        this.database.all('SELECT id = ? FROM actors', [obj._id], (rows3)=>{
                            if(rows3.length <= 0){
                                reject("actor invalide/introuvable");
                            }else{}})
*/

    update(id, data) {
        return new Promise((resolve, reject) => {
            this.database.run(
                `UPDATE films
                 SET contents = ?,
                     done = ?
                 WHERE id = ?`,
                [data.contents, data.done ? 1 : 0, id],
                (err) => {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    } else {
                        resolve();
                    }
                },
            );
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.database.run(
                `DELETE FROM films
                 WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    } else {
                        resolve(true);
                    }
                },
            );
        });
    }


}

module.exports = FilmRepository;
