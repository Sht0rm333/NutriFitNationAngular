-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2023 a las 01:28:05
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
  `Admin` int(2) NOT NULL,
  `activo` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Nombre`, `Email`, `Altura`, `Peso`, `Clave`, `Admin`, `activo`) VALUES
('aaaaaaaaaaaaa', 'aaa@gmail.com', 111, 111, '$2a$15$.pujdZTGaxeb4a9iKbLs1e7IL35pjzU6XroyHC', 1, 0),
('javier perez', 'carlogay@gmail.com', 123, 123, '$2a$15$JvGn2BoLtEGE1AKe2SOGt.ZSAWLSo1uaQPMro7', 0, 1),
('fernando andre', 'joselove@gmail.com', 210, 100, '$2a$15$2P5mV0EblmVYFND5Wfm8Y.rbe5qFyUHz4EeXqz', 0, 0),
('andre pailamilla', 'kbotas@gmail.com', 170, 100, '$2a$15$sLiGhbydRldt7LyRNHiqRuuHNy4qU27eb2boM7', 0, 0),
('lucaschavez', 'mapache1@gmail.com', 123, 123, '$2a$15$w4Iuro.lKjR6qQxBwYWw9e0Zk42PcK/zNajLgb', 0, 0),
('rocket raccon', 'mapache@gmail.com', 100, 40, '$2a$15$/JJzYLb4NDbrKPVhURGYPOuWi/Plz7TDjrTIcO', 0, 0),
('Peter Quill', 'starlord@gmail.com', 173, 90, '$2a$15$3nc1sE0/k.3yEN5fpn8AFuXDw.9XWnvhagvFtX', 1, 0);

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
