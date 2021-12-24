-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2021 at 02:27 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.25

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
(6, '1640308817951-2021-07-11.png'),
(6, '1640308817986-Screenshot (1).png'),
(6, '1640308818027-Screenshot (3).png'),
(6, '1640308818066-Screenshot (4).png');

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
(1, 5, 1, 'Artwork', '100x200', '3000', 'This is a test Description', 1, '2021-12-23 20:07:08', '2021-12-24 01:07:08'),
(2, 5, 2, 'Artworks @', '100x2300', '1000', 'Test', 1, '2021-12-23 20:07:10', '2021-12-24 01:07:10'),
(3, 5, 2, 'Test', '100x2033', '110043', 'This is some shit', 1, '2021-12-23 20:07:12', '2021-12-24 01:07:12'),
(4, 5, 1, 'Artwork', '100x200', '3000', 'This is a test Description', 1, '2021-12-23 20:07:14', '2021-12-24 01:07:14'),
(5, 5, 2, 'Artworks @', '100x2300', '1000', 'Test', 1, '2021-12-23 20:07:16', '2021-12-24 01:07:16'),
(6, 5, 1, 'Test', '100x2033', '110043', 'test', 1, '2021-12-24 01:20:47', '2021-12-24 06:20:47');

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
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `message` varchar(500) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `message`, `status`, `createdAt`) VALUES
(1, 'Sameer', 'sameerwaseem01@gmail.com', '0301', 'test', 0, '2021-12-24 00:07:19');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `artwork` int(11) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `rating` float NOT NULL,
  `review` varchar(500) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `artwork`, `user`, `name`, `rating`, `review`, `status`, `createdAt`) VALUES
(1, 2, 5, 'sameerwaseem01@gmail.com', 3, 'updated', 1, '2021-12-23 23:55:29'),
(2, 2, 5, 'sameerwaseem01@gmail.com', 4, 'test', 1, '2021-12-23 21:25:51'),
(3, 6, 5, 'Sameer', 4.5, 'test', 1, '2021-12-23 23:18:05'),
(4, 6, 5, 'Sameer', 1, 'test', 1, '2021-12-23 23:18:07');

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
(5, '1640283246580-favicon copy.png', 'Sameer', 'sameer', 'sameerwaseem01@gmail.com', '$2b$10$C6uLomUmo0cMTk768X/hMuET34E.k5Guz863DhVwIgFJTq/mTHJUy', 1, '0301', 'test', 1, '2021-12-24 00:53:50');

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
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
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
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
