create database loja_doces;
use loja_doces;
drop table categorias;
CREATE TABLE categorias (
  `id_categorias` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`id_categorias`)
  );

CREATE TABLE doces (
  `id_doces` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `id_categorias` INT NOT NULL,
  PRIMARY KEY (`id_doces`, `id_categorias`),
  INDEX `id_categorias_idx` (`id_categorias` ASC) ,
  CONSTRAINT `id_categorias`
    FOREIGN KEY (`id_categorias`)
    REFERENCES `categorias` (`id_categorias`)
);
select * from categorias;
select * from doces;
insert into categorias values(
null,
"tradicional"
);

insert into doces values(
null,
"brigadeiro",
1
);

