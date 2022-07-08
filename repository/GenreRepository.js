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
                        `DELETE FROM genre WHERE id = ?`,
                        [id],
                        (err) => {
                            console.error(err.message)
                        }
                    )
                }
            })
        })
        

module.exports = GenreRepository;
