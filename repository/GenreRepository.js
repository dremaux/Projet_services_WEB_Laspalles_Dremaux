/* eslint-disable no-console */
/* eslint-disable func-names */
class GenreRepository {
    constructor(database) {
        this.database = database;
    }

    list() {
        return new Promise((resolve, reject) => {
            this.database.all('SELECT * FROM genres', [], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    create(data) {
        return new Promise((resolve, reject) => {
            this.database.run(
                'INSERT INTO genres (name) VALUES (?)',
                [data.name],
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


    delete(id) {
        return new Promise ((resolve, reject) => {
            this.database.all('SELECT * FROM films WHERE genre_id = ?', [id], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                }
                else if(rows.length > 0 ){
                    reject("Genre utilisé");
                }
                else {
                    this.database.run(
                        `DELETE FROM genres WHERE id = ?`,
                        [id],
                        (err) => {
                            if (err) {
                                console.error(err.message);
                                reject(err);
                            }else{
                                resolve(true);
                            }
                        },
                    );
            }
            });
    })}        
}
module.exports = GenreRepository;
//{"first_name":"Louis","last_name":"De Funès","date_of_birth":"1914-07-31","date_of_death":"1983-01-27"}