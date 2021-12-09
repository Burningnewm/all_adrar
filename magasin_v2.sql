-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 05 nov. 2021 à 10:03
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `magasin_v2`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `mail` varchar(150) NOT NULL,
  PRIMARY KEY (`id_client`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `prenom`, `nom`, `mail`) VALUES
(2, 'Juste', 'Leblanc', 'justeleblanc@adrar-formation.com'),
(3, 'François', 'Pignon', 'françoispignon@adrar-formation.com'),
(4, 'Barbara', 'Stresande', 'barbarastresand@adrar-formation.com'),
(5, 'Jean', 'Valgean', 'jeanvalgean@adrar-formation.com'),
(6, 'Jean', 'Valgean', 'valgeanbaptiste@adrar-formation.com'),
(7, 'l\'asticot', 'toto', 'totoasticot@adrar-formation.com');

-- --------------------------------------------------------

--
-- Structure de la table `jeuxvideo`
--

DROP TABLE IF EXISTS `jeuxvideo`;
CREATE TABLE IF NOT EXISTS `jeuxvideo` (
  `id_jeuxvideo` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `style` varchar(100) NOT NULL,
  `date_sortie` date DEFAULT NULL,
  `multijoueur` tinyint(1) NOT NULL,
  `prix` float DEFAULT NULL,
  `id_support` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_jeuxvideo`),
  KEY `fk_jeuxvideo_support` (`id_support`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jeuxvideo`
--

INSERT INTO `jeuxvideo` (`id_jeuxvideo`, `nom`, `style`, `date_sortie`, `multijoueur`, `prix`, `id_support`) VALUES
(1, 'diablo 2', 'hack and slash', '2000-06-20', 1, 20, 1),
(2, 'age of empire 2', 'strategie', '1999-09-30', 1, 20, 1),
(3, 'resident evil 4', 'action', '2005-01-11', 0, 35, 1),
(4, 'gta 5', 'gta-like', '2013-09-11', 1, 40, 1),
(6, 'resident evil 4', 'action ', '2005-01-11', 0, 10, 3),
(7, 'duke nukem forever', 'action', '2011-06-10', 1, 25, 1),
(8, 'crash bandicoot n\'sane trilogy', 'aventure', '2017-06-30', 0, 30, 3),
(9, 'gta 5', 'gta-like', '2013-09-11', 1, 60, 3),
(10, 'gta 5', 'gta-like', '2013-09-11', 1, 60, 2);

-- --------------------------------------------------------

--
-- Structure de la table `jouer`
--

DROP TABLE IF EXISTS `jouer`;
CREATE TABLE IF NOT EXISTS `jouer` (
  `id_jeuxvideo` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  PRIMARY KEY (`id_jeuxvideo`,`id_client`),
  KEY `fk_client_jouer` (`id_client`),
  KEY `fk_jeuxvideo_jouer` (`id_jeuxvideo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jouer`
--

INSERT INTO `jouer` (`id_jeuxvideo`, `id_client`) VALUES
(7, 2),
(1, 3),
(2, 3),
(3, 3),
(1, 4),
(3, 4),
(3, 5),
(2, 6),
(8, 7);

-- --------------------------------------------------------

--
-- Structure de la table `localisation`
--

DROP TABLE IF EXISTS `localisation`;
CREATE TABLE IF NOT EXISTS `localisation` (
  `id_localisation` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id_localisation`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `localisation`
--

INSERT INTO `localisation` (`id_localisation`, `nom`) VALUES
(1, 'AB-01'),
(2, 'AB-02'),
(3, 'AB-03'),
(4, 'AB-04'),
(5, 'AB-05'),
(6, 'AB-06'),
(7, 'AB-07');

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `id_stock` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `id_jeuxvideo` int(11) DEFAULT NULL,
  `id_localisation` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_stock`),
  KEY `fk_jeuxvideo_stock` (`id_jeuxvideo`),
  KEY `fk_localisation_stock` (`id_localisation`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id_stock`, `quantity`, `id_jeuxvideo`, `id_localisation`) VALUES
(1, 50, 1, 1),
(2, 50, 2, 2),
(3, 25, 4, 3),
(4, 35, 6, 4),
(5, 12, 3, 6),
(6, 12, 9, NULL),
(7, 22, 10, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `support`
--

DROP TABLE IF EXISTS `support`;
CREATE TABLE IF NOT EXISTS `support` (
  `id_support` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id_support`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `support`
--

INSERT INTO `support` (`id_support`, `nom`) VALUES
(1, 'pc'),
(3, 'ps4'),
(2, 'xbox');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `jeuxvideo`
--
ALTER TABLE `jeuxvideo`
  ADD CONSTRAINT `fk_jeuxvideo_support` FOREIGN KEY (`id_support`) REFERENCES `support` (`id_support`);

--
-- Contraintes pour la table `jouer`
--
ALTER TABLE `jouer`
  ADD CONSTRAINT `fk_client_jouer` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`),
  ADD CONSTRAINT `fk_jeuxvideo_jouer` FOREIGN KEY (`id_jeuxvideo`) REFERENCES `jeuxvideo` (`id_jeuxvideo`);

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `fk_jeuxvideo_stock` FOREIGN KEY (`id_jeuxvideo`) REFERENCES `jeuxvideo` (`id_jeuxvideo`),
  ADD CONSTRAINT `fk_localisation_stock` FOREIGN KEY (`id_localisation`) REFERENCES `localisation` (`id_localisation`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
