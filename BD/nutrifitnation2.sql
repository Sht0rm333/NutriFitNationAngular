-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2023 a las 21:47:11
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nutrifitnation2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_del_avance`
--

CREATE TABLE `datos_del_avance` (
  `IdDatosAvance` int(11) NOT NULL,
  `Sexo` varchar(10) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Nivel_De_Actividad` int(11) NOT NULL,
  `Altura` int(11) NOT NULL,
  `Peso` int(11) NOT NULL,
  `Email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio`
--

CREATE TABLE `ejercicio` (
  `NombreEjercicio` varchar(45) NOT NULL,
  `Descripcion` text NOT NULL,
  `Link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Nombre` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Altura` int(11) NOT NULL,
  `Peso` int(11) NOT NULL,
  `Clave` varchar(45) NOT NULL,
  `Admin` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Nombre`, `Email`, `Altura`, `Peso`, `Clave`, `Admin`) VALUES
('aaaaaaaaaaaaa', 'aaa@gmail.com', 111, 111, '$2a$15$.pujdZTGaxeb4a9iKbLs1e7IL35pjzU6XroyHC', 0),
('lucaschavez', 'andre@gmail.com', 123, 123, '123123', 0),
('andre', 'andrew@gmail.com', 170, 780, '13455', 1),
('fernando', 'fernando@gmail.com', 180, 70, '1345', 1),
('khyron briso', 'khyronpajaro@gmail.com', 172, 100, '123123', 0),
('aaaa', 'laaaa@gmail.com', 200, 100, 'andaaaa', 0),
('lucas', 'lucas@gmail.com', 160, 70, 'andreslove', 0),
('javier ignacio', 'perezpsn1@gmail.com', 170, 100, 'soydios', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos_del_avance`
--
ALTER TABLE `datos_del_avance`
  ADD PRIMARY KEY (`IdDatosAvance`),
  ADD KEY `usuario_Email_datos_del_avance` (`Email`);

--
-- Indices de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD PRIMARY KEY (`NombreEjercicio`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Email`) USING BTREE;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `datos_del_avance`
--
ALTER TABLE `datos_del_avance`
  ADD CONSTRAINT `usuario_Email_datos_del_avance` FOREIGN KEY (`Email`) REFERENCES `usuario` (`Email`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
