-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema heroku_ea7a9f65887d529
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema heroku_ea7a9f65887d529
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `heroku_ea7a9f65887d529` DEFAULT CHARACTER SET latin1 ;
USE `heroku_ea7a9f65887d529` ;

-- -----------------------------------------------------
-- Table `heroku_ea7a9f65887d529`.`doctor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_ea7a9f65887d529`.`doctor` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `heroku_ea7a9f65887d529`.`episode_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_ea7a9f65887d529`.`episode_type` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `heroku_ea7a9f65887d529`.`patient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_ea7a9f65887d529`.`patient` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `dob` DATE NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `heroku_ea7a9f65887d529`.`episode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_ea7a9f65887d529`.`episode` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `patient_id` INT(11) NOT NULL,
  `doctor_id` INT(11) NOT NULL,
  `type_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `patient_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_patient_has_doctor_doctor1_idx` (`doctor_id` ASC),
  INDEX `fk_patient_has_doctor_patient1_idx` (`patient_id` ASC),
  INDEX `fk_episode_episode_types1_idx` (`type_id` ASC),
  CONSTRAINT `fk_episode_episode_types1`
    FOREIGN KEY (`type_id`)
    REFERENCES `heroku_ea7a9f65887d529`.`episode_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_doctor_doctor1`
    FOREIGN KEY (`doctor_id`)
    REFERENCES `heroku_ea7a9f65887d529`.`doctor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_patient_has_doctor_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `heroku_ea7a9f65887d529`.`patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `heroku_ea7a9f65887d529`.`medical_act`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_ea7a9f65887d529`.`medical_act` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `heroku_ea7a9f65887d529`.`worklist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_ea7a9f65887d529`.`worklist` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `clinical_info` VARCHAR(300) NOT NULL,
  `status` TINYINT(2) NOT NULL,
  `in_worklist` TINYINT(2) NOT NULL,
  `medical_act_id` INT(11) NOT NULL,
  `episode_id` INT(11) NOT NULL,
  `patient_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_request_medical_act1_idx` (`medical_act_id` ASC),
  INDEX `fk_request_episode1_idx` (`episode_id` ASC, `patient_id` ASC),
  CONSTRAINT `fk_request_episode1`
    FOREIGN KEY (`episode_id` , `patient_id`)
    REFERENCES `heroku_ea7a9f65887d529`.`episode` (`id` , `patient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_medical_act1`
    FOREIGN KEY (`medical_act_id`)
    REFERENCES `heroku_ea7a9f65887d529`.`medical_act` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
