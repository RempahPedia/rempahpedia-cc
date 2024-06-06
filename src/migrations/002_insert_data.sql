-- Seeding Rempah Data
INSERT INTO Rempah (nama, deskripsi) VALUES
    ('adas', 'Adas digunakan dalam berbagai masakan untuk memberikan rasa yang unik.'),
    ('andaliman', 'Andaliman, juga dikenal sebagai merica batak, memiliki rasa pedas dan sering digunakan dalam masakan Sumatra.'),
    ('asam_jawa', 'Asam Jawa digunakan sebagai bumbu dan bahan dasar dalam banyak masakan tradisional Indonesia.'),
    ('biji_ketumbar', 'Biji ketumbar digunakan sebagai bumbu dan memiliki aroma yang khas.'),
    ('bunga_lawang', 'Bunga Lawang atau pekak digunakan untuk memberikan aroma harum dalam masakan.'),
    ('cengkeh', 'Cengkeh digunakan sebagai bumbu dan memiliki aroma yang kuat dan khas.'),
    ('daun_ketumbar', 'Daun ketumbar sering digunakan sebagai hiasan atau bumbu masakan.'),
    ('daun_salam', 'Daun salam sering digunakan untuk memberikan aroma khas pada masakan.'),
    ('jahe', 'Jahe digunakan dalam berbagai masakan dan minuman untuk memberikan rasa pedas dan aroma khas.'),
    ('jinten', 'Jinten sering digunakan dalam masakan Timur Tengah dan India.'),
    ('kapulaga', 'Kapulaga digunakan untuk memberikan rasa dan aroma khas pada masakan.'),
    ('kayu_manis', 'Kayu manis digunakan untuk memberikan rasa manis dan aroma dalam masakan.'),
    ('kayu_secang', 'Kayu secang digunakan untuk memberikan warna merah pada minuman tradisional.'),
    ('kemiri', 'Kemiri digunakan sebagai bumbu dan bahan dasar dalam berbagai masakan Indonesia.'),
    ('kemukus', 'Kemukus memiliki rasa pedas dan digunakan dalam beberapa masakan tradisional.'),
    ('kencur', 'Kencur digunakan dalam masakan tradisional Indonesia untuk memberikan aroma khas.'),
    ('kluwek', 'Kluwek digunakan dalam masakan untuk memberikan warna hitam dan rasa yang khas.'),
    ('kunyit', 'Kunyit digunakan untuk memberikan warna kuning dan rasa khas pada masakan.'),
    ('lada', 'Lada digunakan sebagai bumbu utama dalam berbagai masakan untuk memberikan rasa pedas.'),
    ('lengkuas', 'Lengkuas digunakan dalam berbagai masakan Indonesia untuk memberikan aroma dan rasa yang khas.'),
    ('pala', 'Pala digunakan sebagai bumbu dan memiliki aroma yang kuat dan manis.'),
    ('saffron', 'Saffron adalah bumbu mahal yang digunakan untuk memberikan warna dan rasa pada masakan.'),
    ('serai', 'Serai digunakan untuk memberikan aroma segar pada masakan dan minuman.'),
    ('vanili', 'Vanili digunakan sebagai bumbu untuk memberikan aroma manis pada kue dan masakan.'),
    ('wijen', 'Wijen digunakan sebagai hiasan atau bumbu dalam berbagai masakan.');

-- Data seeding for table Manfaat
INSERT INTO Manfaat (nama) VALUES
('Meningkatkan Daya Tahan Tubuh'),
('Mengurangi Nyeri Sendi'),
('Melancarkan Pencernaan'),
('Menurunkan Kolesterol'),
('Menurunkan Berat Badan'),
('Mengatasi Insomnia'),
('Meredakan Batuk'),
('Mengurangi Stres'),
('Mengurangi Peradangan'),
('Menjaga Kesehatan Jantung');

-- Data seeding for table Jamu
INSERT INTO Jamu (nama) VALUES
('Jamu Kunyit Asam'),
('Jamu Beras Kencur'),
('Jamu Jahe'),
('Jamu Sambiloto'),
('Jamu Temulawak');

-- Data seeding for table Jamu_Manfaat (relationships)
INSERT INTO Jamu_Manfaat (jamu_id, manfaat_id) VALUES
(1, 5), -- Jamu Kunyit Asam - Menurunkan Berat Badan
(1, 10), -- Jamu Kunyit Asam - Menjaga Kesehatan Jantung
(2, 3), -- Jamu Beras Kencur - Melancarkan Pencernaan
(2, 6), -- Jamu Beras Kencur - Mengatasi Insomnia
(3, 7), -- Jamu Jahe - Meredakan Batuk
(3, 9), -- Jamu Jahe - Mengurangi Peradangan
(4, 8), -- Jamu Sambiloto - Mengurangi Stres
(4, 1), -- Jamu Sambiloto - Meningkatkan Daya Tahan Tubuh
(5, 4), -- Jamu Temulawak - Menurunkan Kolesterol
(5, 2); -- Jamu Temulawak - Mengurangi Nyeri Sendi

-- Data seeding for table Jamu_Rempah (relationships)
INSERT INTO Jamu_Rempah (jamu_id, rempah_id) VALUES
(1, 18), -- Jamu Kunyit Asam - kunyit
(2, 15), -- Jamu Beras Kencur - kencur
(3, 9),  -- Jamu Jahe - jahe
(4, 16), -- Jamu Sambiloto - kemukus
(5, 14); -- Jamu Temulawak - kemiri

-- Data seeding for table Rempah_Manfaat (relationships)
INSERT INTO Rempah_Manfaat (rempah_id, manfaat_id) VALUES
(18, 5),  -- kunyit - Menurunkan Berat Badan
(18, 10), -- kunyit - Menjaga Kesehatan Jantung
(15, 3),  -- kencur - Melancarkan Pencernaan
(15, 6),  -- kencur - Mengatasi Insomnia
(9, 7),   -- jahe - Meredakan Batuk
(9, 9),   -- jahe - Mengurangi Peradangan
(16, 8),  -- kemukus - Mengurangi Stres
(16, 1),  -- kemukus - Meningkatkan Daya Tahan Tubuh
(14, 4),  -- kemiri - Menurunkan Kolesterol
(14, 2);  -- kemiri - Mengurangi Nyeri Sendi

-- Data seeding for Jamu_penyakit
INSERT INTO Jamu_Penyakit (jamu_id, penyakit) VALUES
    (1, 'Jantung'),
    (2, 'Gangguan Pencernaan'),
    (2, 'Insomnia'),
    (3, 'Batuk'),
    (3, 'Radang Tenggorokan'),
    (4, 'Imunitas'),
    (5, 'Kolesterol'),
    (5, 'Nyeri Sendi');