CREATE DATABASE IF NOT EXISTS `Progetto`;
USE `Progetto`;

CREATE TABLE IF NOT EXISTS Montature (
    Modello			char(20)	PRIMARY KEY,
    Brand			char(15)	NOT NULL,
    Prezzo	        int(10)		NOT NULL,
    Versione		char(20)	NOT NULL,
    Calibro			char(10)	NOT NULL,
    Ponte			char(10)	NOT NULL,
    Aste			char(10)	NOT NULL,
    Materiale		char(10)	NOT NULL,
    Colore			char(10)	NOT NULL,												
    Immagine        varchar(255) NOT NULL                                              );

CREATE TABLE IF NOT EXISTS Lenti (
    Modello			char(20)	PRIMARY KEY,
    Brand			char(15)	NOT NULL,
    Prezzo      	int(10)		NOT NULL,
    Versione		char(20)	NOT NULL,
    Antiriflesso	boolean,
    Sfericità		char(15)	NOT NULL,
    Focale			char(10)	NOT NULL												);

CREATE TABLE IF NOT EXISTS LAC (
    Modello			char(20)	PRIMARY KEY,
    Brand			char(15)	NOT NULL,
    Prezzo      	int(10)		NOT NULL,
    Durata			char(15)	NOT NULL,
    Fascia			char(10)	NOT NULL,
    Focale			char(10)	NOT NULL,
    Immagine        varchar(255) NOT NULL	    									    );

CREATE TABLE IF NOT EXISTS Negozi (
    IDNegozio		int		    AUTO_INCREMENT PRIMARY KEY,
    Via				char(30)	NOT NULL,
    Città			char(15)	NOT NULL,
    CAP				char(7)		NOT NULL	                                            );

CREATE TABLE IF NOT EXISTS Utenze (
    IDUtente        int         AUTO_INCREMENT PRIMARY KEY,
    User            varchar(100)    NOT NULL,
    Password        varchar(512)    NOT NULL,
    Nome            varchar(100),
    Cognome         varchar(100),
    Mail          varchar(100),
    Telefono        varchar(20),
    Indirizzo       varchar(100),
    Role           ENUM("admin", "user") default "user"                                  );

CREATE TABLE IF NOT EXISTS Appuntamenti (
    Data            char(8),
    Ora             char(8),
    Tipo            char(20),
    IDNegozio       int         REFERENCES Negozi(IDNegozio),
    IDUtente        int         REFERENCES Utenze(IDUtente),
    PRIMARY KEY(Data, Ora, Tipo, IDNegozio)                                             );   
/*
CREATE TABLE IF NOT EXISTS Ordini (
    IDOrdine        int          AUTO_INCREMENT PRIMARY KEY,
    IDUtente        int          REFERENCES Utenze(Modello),
    IDLenti         char(20)     REFERENCES Lenti(Modello),
    IDMontature     char(20)     REFERENCES Montature(Modello),
    IDLAC           char(20)     REFERENCES LAC(Modello)                              );*/

CREATE TABLE IF NOT EXISTS Ordini (
    IDOrdine        int          AUTO_INCREMENT PRIMARY KEY,
    IDUtente        int          REFERENCES Utenze(Modello),
    Data            char(20)
                                                                                        );
/*
CREATE TABLE IF NOT EXISTS Prodotti (
    IDProdotto      int         AUTO_INCREMENT PRIMARY KEY,
    IDMontature     char(20),	FOREIGN KEY (IDMontature) REFERENCES Montature(Modello),
    IDLenti         char(20),	FOREIGN KEY (IDLenti) REFERENCES Lenti(Modello),
    IDLAC           char(20),	FOREIGN KEY (IDLAC) REFERENCES LAC(Modello)
);*/

CREATE TABLE IF NOT EXISTS dettOrdini (
    IDOrdine        int,         FOREIGN KEY (IDOrdine) REFERENCES Ordini(IDOrdine),
    IDProdotto      char(20),
    Categoria       varchar(20)  NOT NULL,
    Quantità        int          NOT NULL,
    PRIMARY KEY(IDOrdine, IDProdotto)                                                   );