USE `Progetto`;
INSERT INTO Montature (Modello, Brand, IDProdotto, Prezzo, Versione, Calibro, Ponte, Aste, Materiale, Colore, Immagine)
VALUES ('CCC00', 'RayBan', '00C00', 180, 'da vista', 52, 16, 135, 'metallo', 'bianco', '/immagini/eyeglasses-wear.jpg'),
('CCC01', 'EA', '00C01', 250, 'da vista', 58, 22, 142, 'acetato', 'rosso', 'immagini/sunglasses.jpg'),
('CCC02', 'Vogue', '00C02', 220, 'da sole', 60, 18, 140, 'composito', 'verde', '/immagini/eyeglasses-wear.jpg'),
('CCC03', 'Gucci', '00C03', 150, 'da vista', 55, 20, 138, 'metallo', 'blu', '/immagini/eyeglasses-wear.jpg'),
('CCC04', 'SL', '00C04', 200, 'da vista', 58, 22, 145, 'acetato', 'giallo', '/immagini/eyeglasses-wear.jpg'),
('CCC05', 'BV', '00C05', 280, 'da sole', 62, 21, 142, 'composito', 'rosa', '/immagini/eyeglasses-wear.jpg'),
('CCC06', 'Dior', '00C06', 190, 'da vista', 54, 17, 140, 'metallo', 'grigio', '/immagini/eyeglasses-wear.jpg'),
('CCC07', 'Tiffany', '00C07', 150, 'da vista', 57, 19, 140, 'acetato', 'oro', '/immagini/eyeglasses-wear.jpg'),
('CCC08', 'D&G', '00C08', 220, 'da vista', 59, 23, 140, 'composito', 'argento', '/immagini/eyeglasses-wear.jpg'),
('CCC09', 'Persol', '00C09', 200, 'da vista', 58, 22, 142, 'metallo', 'fucsia', '/immagini/eyeglasses-wear.jpg'),
('CCC10', 'Tom Ford', '00C10', 180, 'da sole', 50, 15, 135, 'acetato', 'azzurro', '/immagini/eyeglasses-wear.jpg'),
('CCC11', 'GA', '00C11', 240, 'da vista', 56, 21, 138, 'composito', 'marrone', '/immagini/eyeglasses-wear.jpg'),
('CCC12', 'GA', '00C12', 260, 'da vista', 61, 24, 142, 'metallo', 'bianco', '/immagini/eyeglasses-wear.jpg');

INSERT INTO Lenti (Modello, Brand, IDProdotto, Prezzo, Versione, Antiriflesso, Sfericità, Focale)
VALUES ('BBB00', 'Shamir', '00B00', 70, 'graduata', false, 'sferica', 'monofocale'),
('BBB01', 'Zeiss', '00B01', 130, 'da sole', false, 'asferica', 'bifocale'),
('BBB02', 'Oya', '00B02', 90, 'graduata', false, 'sferica', 'monofocale'),
('BBB03', 'Shamir', '00B03', 110, 'da sole graduata', true, 'sferica', 'monofocale'),
('BBB04', 'Zeiss', '00B04', 180, 'da sole graduata', false, 'asferica', 'bifocale'),
('BBB05', 'Oya', '00B05', 120, 'graduata', true, 'asferica', 'monofocale'),
('BBB06', 'Shamir', '00B06', 200, 'da sole', false, 'asferica', 'bifocale'),
('BBB07', 'Zeiss', '00B07', 80, 'graduata', true, 'sferica', 'bifocale'),
('BBB08', 'Oya', '00B08', 150, 'graduata', false, 'sferica', 'monofocale'),
('BBB09', 'Shamir', '00B09', 100, 'da sole graduata', true, 'asferica', 'bifocale'),
('BBB10', 'Zeiss', '00B10', 120, 'da sole', false, 'sferica', 'monofocale'),
('BBB11', 'Oya', '00B11', 70, 'graduata', true, 'asferica', 'bifocale'),
('BBB12', 'Shamir', '00B12', 130, 'da sole graduata', false, 'asferica', 'monofocale'),
('BBB13', 'Zeiss', '00B13', 90, 'graduata', false, 'asferica', 'bifocale'),
('BBB14', 'Oya', '00B14', 110, 'da sole', true, 'sferica', 'monofocale'),
('BBB15', 'Shamir', '00B15', 180, 'da sole graduata', true, 'sferica', 'monofocale');

INSERT INTO LAC (Modello, Brand, IDProdotto, Prezzo, Durata, Fascia, Focale)
VALUES ('AAA00', 'Alcon', '00A00', 42, 'giornaliere', 'bassa', 'monofocale'),
('AAA01', 'B&L', '00A01', 60, 'settimanali', 'media', 'bifocale'),
('AAA02', 'Iridia', '00A02', 28, 'mensili', 'alta', 'monofocale'),
('AAA03', 'Alcon', '00A03', 32, 'giornaliere', 'bassa', 'bifocale'),
('AAA04', 'B&L', '00A04', 48, 'settimanali', 'media', 'monofocale'),
('AAA05', 'Iridia', '00A05', 65, 'mensili', 'alta', 'bifocale'),
('AAA06', 'Alcon', '00A06', 36, 'giornaliere', 'bassa', 'monofocale'),
('AAA07', 'B&L', '00A07', 54, 'settimanali', 'media', 'bifocale'),
('AAA08', 'Iridia', '00A08', 42, 'mensili', 'alta', 'monofocale'),
('AAA09', 'Alcon', '00A09', 30, 'giornaliere', 'bassa', 'bifocale'),
('AAA10', 'B&L', '00A10', 75, 'settimanali', 'media', 'monofocale'),
('AAA11', 'Iridia', '00A11', 40, 'mensili', 'alta', 'bifocale'),
('AAA12', 'Alcon', '00A12', 22, 'giornaliere', 'bassa', 'monofocale'),
('AAA13', 'B&L', '00A13', 52, 'settimanali', 'media', 'bifocale'),
('AAA14', 'Iridia', '00A14', 62, 'mensili', 'alta', 'monofocale'),
('AAA15', 'Alcon', '00A15', 36, 'giornaliere', 'bassa', 'bifocale'),
('AAA16', 'B&L', '00A16', 45, 'settimanali', 'media', 'monofocale'),
('AAA17', 'Iridia', '00A17', 32, 'mensili', 'alta', 'bifocale'),
('AAA18', 'Alcon', '00A18', 24, 'giornaliere', 'bassa', 'monofocale'),
('AAA19', 'B&L', '00A19', 68, 'settimanali', 'media', 'bifocale');

INSERT INTO Negozi (IDSede, Via, Città, CAP)
VALUES ('00001', 'XX Settembre, 23', 'Milano', '28178'),
('00002', 'Garibaldi, 49', 'Roma', '43291'),
('00003', 'Volta, 13', 'Palermo', '25521');