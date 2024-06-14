-- 1. Create table for Manfaat
CREATE TABLE Manfaat (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255) NOT NULL UNIQUE
);

-- 2. Create table for Rempah
CREATE TABLE Rempah (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255) NOT NULL UNIQUE,
    deskripsi TEXT,
    manfaat_ids INT[],
    image_url TEXT,
    rarity INT
);

-- 3. Create enum type for Penyakit
CREATE TYPE Penyakit AS ENUM (
    'Jantung', 
    'Batuk', 
    'Demam', 
    'Haid', 
    'Sakit Kepala', 
    'Pilek', 
    'Imunitas', 
    'Insomnia', 
    'Anemia',
    'Hipertensi', -- Hypertension
    'Kolesterol', -- Cholesterol
    'Asma', -- Asthma
    'Diabetes', -- Diabetes
    'Gastritis', -- Gastritis
    'Kembung', -- Bloating
    'Migrain', -- Migraine
    'Radang Tenggorokan', -- Sore throat
    'Gangguan Pencernaan', -- Digestive disorders
    'Nyeri Sendi'
);

-- 4. Create table for Jamu
CREATE TABLE Jamu (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255) NOT NULL UNIQUE,
    manfaat_ids INT[],
    rempah_ids INT[],
    penyakit Penyakit[]
);

-- 5. Create join table for Jamu and Manfaat (many-to-many relationship)
CREATE TABLE Jamu_Manfaat (
    jamu_id INT,
    manfaat_id INT,
    PRIMARY KEY (jamu_id, manfaat_id),
    FOREIGN KEY (jamu_id) REFERENCES Jamu(id),
    FOREIGN KEY (manfaat_id) REFERENCES Manfaat(id)
);

-- 6. Create join table for Jamu and Rempah (many-to-many relationship)
CREATE TABLE Jamu_Rempah (
    jamu_id INT,
    rempah_id INT,
    PRIMARY KEY (jamu_id, rempah_id),
    FOREIGN KEY (jamu_id) REFERENCES Jamu(id),
    FOREIGN KEY (rempah_id) REFERENCES Rempah(id)
);

-- 7. Create join table for Jamu and Penyakit (many-to-many relationship)
CREATE TABLE Jamu_Penyakit (
    jamu_id INT,
    penyakit Penyakit,
    PRIMARY KEY (jamu_id, penyakit),
    FOREIGN KEY (jamu_id) REFERENCES Jamu(id)
);

-- 8. Create join table for Rempah and Manfaat (many-to-many relationship)
CREATE TABLE Rempah_Manfaat (
    rempah_id INT,
    manfaat_id INT,
    PRIMARY KEY (rempah_id, manfaat_id),
    FOREIGN KEY (rempah_id) REFERENCES Rempah(id),
    FOREIGN KEY (manfaat_id) REFERENCES Manfaat(id)
);
