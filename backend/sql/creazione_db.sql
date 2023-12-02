CREATE DATABASE IF NOT EXISTS `Progetto`;
USE `Progetto`;

CREATE TABLE IF NOT EXISTS Montature (
    Modello			char(20)	PRIMARY KEY,
    Brand			char(15)	NOT NULL,
    IDProdotto		char(7)		NOT NULL UNIQUE,
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
    IDProdotto		char(7)		NOT NULL UNIQUE,
    Prezzo      	int(10)		NOT NULL,
    Versione		char(20)	NOT NULL,
    Antiriflesso	boolean,
    Sfericità		char(15)	NOT NULL,
    Focale			char(10)	NOT NULL												);

CREATE TABLE IF NOT EXISTS LAC (
    Modello			char(20)	PRIMARY KEY,
    Brand			char(15)	NOT NULL,
    IDProdotto		char(7)		NOT NULL UNIQUE,
    Prezzo      	int(10)		NOT NULL,
    Durata			char(15)	NOT NULL,
    Fascia			char(10)	NOT NULL,
    Focale			char(10)	NOT NULL												);

CREATE TABLE IF NOT EXISTS Negozi (
    IDSede			char(5)		PRIMARY KEY,
    Via				char(30)	NOT NULL,
    Città			char(15)	NOT NULL,
    CAP				char(7)		NOT NULL	                                            );

CREATE TABLE IF NOT EXISTS Appuntamenti (
    Data            char(8),
    Ora             char(8),
    Tipo            char(20),
    IDSede          char(5)     REFERENCES Negozi(IDSede)
    PRIMARY KEY(Data, Ora, Tipo, IDSede)                                                        );

CREATE TABLE IF NOT EXISTS UtenzeCliente (
    IDUtente        char(5),
    User            char(20),
    Password        char(20)    NOT NULL,                                                
    PRIMARY KEY(IDUtente, User)                                                         );

CREATE TABLE IF NOT EXISTS Ordini (
    IDOrdine        char(5)     PRIMARY KEY,
    IDUtente        char(5)     REFERENCES UtenzeCliente(IDUtente),
    IDLenti         char(7)     REFERENCES Lenti(IDProdotto),
    IDMontature     char(7)     REFERENCES Montature(IDProdotto),
    IDLAC           char(7)     REFERENCES LAC(IDProdotto)                              );

CREATE TABLE IF NOT EXISTS UtenzeAdmin (
    IDUtente        char(5),
    User            char(20),
    Password        char(20)    NOT NULL,                                                
    PRIMARY KEY(IDUtente, User)                                                         );
