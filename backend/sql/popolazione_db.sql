USE `Progetto`;
INSERT INTO Montature (Modello, Brand, Prezzo, Versione, Calibro, Ponte, Aste, Materiale, Colore, Immagine)
VALUES ('CCC00', 'RayBan', 180, 'da vista', 52, 16, 135, 'metallo', 'bianco', '/immagini/eyeglasses-wear.jpg'),
('CCC01', 'EA', 250, 'da vista', 58, 22, 142, 'acetato', 'rosso', 'immagini/sunglasses.jpg'),
('CCC02', 'Vogue', 220, 'da sole', 60, 18, 140, 'composito', 'verde', '/immagini/eyeglasses-wear.jpg'),
('CCC03', 'Gucci', 150, 'da vista', 55, 20, 138, 'metallo', 'blu', '/immagini/eyeglasses-wear.jpg'),
('CCC04', 'SL', 200, 'da vista', 58, 22, 145, 'acetato', 'giallo', '/immagini/eyeglasses-wear.jpg'),
('CCC05', 'BV', 280, 'da sole', 62, 21, 142, 'composito', 'rosa', '/immagini/eyeglasses-wear.jpg'),
('CCC06', 'Dior', 190, 'da vista', 54, 17, 140, 'metallo', 'grigio', '/immagini/eyeglasses-wear.jpg'),
('CCC07', 'Tiffany', 150, 'da vista', 57, 19, 140, 'acetato', 'oro', '/immagini/eyeglasses-wear.jpg'),
('CCC08', 'D&G', 220, 'da vista', 59, 23, 140, 'composito', 'argento', '/immagini/eyeglasses-wear.jpg'),
('CCC09', 'Persol', 200, 'da vista', 58, 22, 142, 'metallo', 'fucsia', '/immagini/eyeglasses-wear.jpg'),
('CCC10', 'Tom Ford', 180, 'da sole', 50, 15, 135, 'acetato', 'azzurro', '/immagini/eyeglasses-wear.jpg'),
('CCC11', 'GA', 240, 'da vista', 56, 21, 138, 'composito', 'marrone', '/immagini/eyeglasses-wear.jpg'),
('CCC12', 'GA', 260, 'da vista', 61, 24, 142, 'metallo', 'bianco', '/immagini/eyeglasses-wear.jpg');

INSERT INTO Lenti (Modello, Brand, Prezzo, Versione, Antiriflesso, Sfericità, Focale)
VALUES ('BBB00', 'Shamir', 70, 'graduata', false, 'sferica', 'monofocale'),
('BBB01', 'Zeiss', 130, 'da sole', false, 'asferica', 'bifocale'),
('BBB02', 'Oya', 90, 'graduata', false, 'sferica', 'monofocale'),
('BBB03', 'Shamir', 110, 'da sole graduata', true, 'sferica', 'monofocale'),
('BBB04', 'Zeiss', 180, 'da sole graduata', false, 'asferica', 'bifocale'),
('BBB05', 'Oya', 120, 'graduata', true, 'asferica', 'monofocale'),
('BBB06', 'Shamir', 200, 'da sole', false, 'asferica', 'bifocale'),
('BBB07', 'Zeiss', 80, 'graduata', true, 'sferica', 'bifocale'),
('BBB08', 'Oya', 150, 'graduata', false, 'sferica', 'monofocale'),
('BBB09', 'Shamir', 100, 'da sole graduata', true, 'asferica', 'bifocale'),
('BBB10', 'Zeiss', 120, 'da sole', false, 'sferica', 'monofocale'),
('BBB11', 'Oya', 70, 'graduata', true, 'asferica', 'bifocale'),
('BBB12', 'Shamir', 130, 'da sole graduata', false, 'asferica', 'monofocale'),
('BBB13', 'Zeiss', 90, 'graduata', false, 'asferica', 'bifocale'),
('BBB14', 'Oya', 110, 'da sole', true, 'sferica', 'monofocale'),
('BBB15', 'Shamir', 180, 'da sole graduata', true, 'sferica', 'monofocale');

INSERT INTO LAC (Modello, Brand, Prezzo, Durata, Fascia, Focale)
VALUES ('AAA00', 'Alcon', 42, 'giornaliere', 'bassa', 'monofocale'),
('AAA01', 'B&L', 60, 'settimanali', 'media', 'bifocale'),
('AAA02', 'Iridia', 28, 'mensili', 'alta', 'monofocale'),
('AAA03', 'Alcon', 32, 'giornaliere', 'bassa', 'bifocale'),
('AAA04', 'B&L', 48, 'settimanali', 'media', 'monofocale'),
('AAA05', 'Iridia', 65, 'mensili', 'alta', 'bifocale'),
('AAA06', 'Alcon', 36, 'giornaliere', 'bassa', 'monofocale'),
('AAA07', 'B&L', 54, 'settimanali', 'media', 'bifocale'),
('AAA08', 'Iridia', 42, 'mensili', 'alta', 'monofocale'),
('AAA09', 'Alcon', 30, 'giornaliere', 'bassa', 'bifocale'),
('AAA10', 'B&L', 75, 'settimanali', 'media', 'monofocale'),
('AAA11', 'Iridia', 40, 'mensili', 'alta', 'bifocale'),
('AAA12', 'Alcon', 22, 'giornaliere', 'bassa', 'monofocale'),
('AAA13', 'B&L', 52, 'settimanali', 'media', 'bifocale'),
('AAA14', 'Iridia', 62, 'mensili', 'alta', 'monofocale'),
('AAA15', 'Alcon', 36, 'giornaliere', 'bassa', 'bifocale'),
('AAA16', 'B&L', 45, 'settimanali', 'media', 'monofocale'),
('AAA17', 'Iridia', 32, 'mensili', 'alta', 'bifocale'),
('AAA18', 'Alcon', 24, 'giornaliere', 'bassa', 'monofocale'),
('AAA19', 'B&L', 68, 'settimanali', 'media', 'bifocale');

INSERT INTO Negozi (Via, Città, CAP)
VALUES ('XX Settembre, 23', 'Milano', '28178'),
('Garibaldi, 49', 'Roma', '43291'),
('Volta, 13', 'Palermo', '25521');