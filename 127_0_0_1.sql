-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 23, 2021 at 07:42 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `untitled_fyp`
--

-- --------------------------------------------------------

--
-- Table structure for table `artworkimages`
--

CREATE TABLE `artworkimages` (
  `artworkId` int(11) NOT NULL,
  `image` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artworkimages`
--

INSERT INTO `artworkimages` (`artworkId`, `image`) VALUES
(1, '1640267291067-favicon.png'),
(2, '1640267832412-logo.png'),
(3, '1640267881366-daily-paigam-old.png'),
(4, '1640267881366-daily-paigam-old.png'),
(5, '1640267881366-daily-paigam-old.png'),
(6, '1640267881366-daily-paigam-old.png');

-- --------------------------------------------------------

--
-- Table structure for table `artworks`
--

CREATE TABLE `artworks` (
  `id` int(11) NOT NULL,
  `artist` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `size` varchar(15) NOT NULL,
  `price` varchar(10) NOT NULL,
  `description` varchar(300) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artworks`
--

INSERT INTO `artworks` (`id`, `artist`, `category`, `title`, `size`, `price`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 5, 1, 'Artwork', '100x200', '3000', 'This is a test Description', 0, '2021-12-23 13:48:11', NULL),
(2, 5, 2, 'Artworks @', '100x2300', '1000', 'Test', 0, '2021-12-23 13:57:12', NULL),
(3, 5, 2, 'Test', '100x2033', '110043', 'This is some shit', 0, '2021-12-23 13:58:01', NULL),
(4, 5, 1, 'Artwork', '100x200', '3000', 'This is a test Description', 0, '2021-12-23 13:48:11', NULL),
(5, 5, 2, 'Artworks @', '100x2300', '1000', 'Test', 0, '2021-12-23 13:57:12', NULL),
(6, 5, 2, 'Test', '100x2033', '110043', 'This is some shit', 0, '2021-12-23 13:58:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `createdAt`) VALUES
(1, 'Calligraphy', '2021-12-22 20:31:43'),
(2, 'Abstract', '2021-12-22 20:31:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `image` varchar(75) DEFAULT NULL,
  `name` varchar(75) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `password` varchar(300) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `phone` varchar(40) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `isVerified` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `image`, `name`, `username`, `email`, `password`, `status`, `phone`, `description`, `isVerified`, `createdAt`) VALUES
(5, '1640283246580-favicon copy.png', 'Sameer', 'sameer', 'sameerwaseem01@gmail.com', '$2b$10$VcOOI0GUObql1l1WUF2sQuELQNz1dFZK2jH6edvNhCcuvNE54c0V2', 1, '0301', 'test', 1, '2021-12-23 18:14:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artworks`
--
ALTER TABLE `artworks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artworks`
--
ALTER TABLE `artworks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
