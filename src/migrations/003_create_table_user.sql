CREATE TABLE Pengguna(
    email VARCHAR(255) PRIMARY KEY,
    is_unlocked BOOLEAN
);

CREATE TABLE Pengguna_Rempah(
    email VARCHAR(255),
    rempah_id INT,
    PRIMARY KEY (email, rempah_id),
    FOREIGN KEY (email) REFERENCES Pengguna(email),
    FOREIGN KEY (rempah_id) REFERENCES Rempah(id)
);

INSERT INTO PENGGUNA(email) VALUES ('rikzakalmujtaba@gmail.com'), ('rikzakurnia1802@gmail.com');