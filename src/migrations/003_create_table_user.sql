CREATE TABLE Pengguna(
    email VARCHAR(255) PRIMARY KEY
);

CREATE TABLE Pengguna_Rempah(
    email VARCHAR(255),
    rempah_id INT,
    PRIMARY KEY (email, rempah_id),
    FOREIGN KEY (email) REFERENCES Pengguna(id),
    FOREIGN KEY (rempah_id) REFERENCES Rempah(id)
);