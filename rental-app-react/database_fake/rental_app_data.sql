-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2020 at 06:02 PM
-- Server version: 10.4.14-MariaDB-log
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(10) UNSIGNED NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `address`, `city`, `district`, `created_at`, `updated_at`) VALUES
(1, 'số 6, ngõ 38 đường nguyễn văn huyên - cầu giấy.', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(2, ' số 8b, ngách 80 ngõ 381 nguyễn khang, yên hòa, cầu giấy', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(3, 'số 10, ngõ 44/64/10 đường trần thái tông, cầu giấy, hà nôi', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(4, 'ngõ 90 hoàng ngân, trung hòa, cầu giấy, hà nội', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(5, 'ngõ 2 đường phạm văn đồng , mai dịch , cầu giấy hà nội', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(6, 'Đường Bạch Đằng, Phường Chương Dương, Quận Hoàn Kiếm, Hà Nội', 'Hà Nội', 'Hoàn Kiếm', NULL, NULL),
(7, '79, Đường Hai Bà Trưng, Phường Cửa Nam, Quận Hoàn Kiếm, Hà Nội', 'Hà Nội', 'Hoàn Kiếm', NULL, NULL),
(8, 'Đường Bảo Linh, Phường Phúc Tân, Quận Hoàn Kiếm, Hà Nội', 'Hà Nội', 'Hoàn Kiếm', NULL, NULL),
(9, 'Đường Đào Duy Từ, Phường Hàng Buồm, Quận Hoàn Kiếm, Hà Nội', 'Hà Nội', 'Hoàn Kiếm', NULL, NULL),
(10, '2, đường Phúc Tân, Phường Đồng Xuân, Quận Hoàn Kiếm, Hà Nội', 'Hà Nội', 'Hoàn Kiếm', NULL, NULL),
(11, 'ngõ 127c trần hưng đạo SN 30, Đường Trần Hưng Đạo, Phường Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội', 'Hà Nội', 'Hoàn Kiếm', NULL, NULL),
(12, 'Đường Cầu Gỗ||17, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội', 'Hà Nội', 'Hoàn Kiếm', NULL, NULL),
(13, 'Đường Hồ Đắc Di, Phường Nam Đồng, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(14, 'Đường Pháo Đài Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(15, 'Đường Láng, Phường Ngã Tư Sở, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(16, '13 ngõ Đại Đồng, Đường Khâm Thiên, Phường Khâm Thiên, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(17, '199, Đường Quan Thổ 1, Phường Hàng Bột, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(18, '34, ngõ Láng Trung, Phường Láng Hạ, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(19, '22/5d ngõ 41, Đường Thái Hà, Phường Khương Thượng, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(20, 'Đường Tây Sơn, Phường Quang Trung, Quận Đống Đa, Hà Nội', 'Hà Nội', 'Đống Đa', NULL, NULL),
(21, '80, Đường Vân Hồ 3, Phường Lê Đại Hành, Quận Hai Bà Trưng, Hà Nội', 'Hà Nội', 'Hai Bà Trưng', NULL, NULL),
(22, '6, Phố 8/3, Phường Quỳnh Mai, Quận Hai Bà Trưng, Hà Nội', 'Hà Nội', 'Hai Bà Trưng', NULL, NULL),
(23, '15, Đường Tây Kết||593, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội', 'Hà Nội', 'Hai Bà Trưng', NULL, NULL),
(24, 'Ngõ 39c/5 vĩnh tuy SN 141 1tr5, Đường Vĩnh Tuy, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội', 'Hà Nội', 'Hai Bà Trưng', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) UNSIGNED NOT NULL,
  `address` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `identification` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `address`, `created_at`, `updated_at`, `email`, `gender`, `identification`, `img_src`, `name`, `password`, `phone_number`) VALUES
(1, 1, NULL, NULL, 'abc@gmail.com', 1, '20501066', 'icebear.jpg', 'Ân Bảo Cường', '111111', '0101010101'),
(2, 3, NULL, NULL, 'mpn@gmail.com', 0, '20502036', 'Isabella.png', 'Nguyễn Bảo An', '111111', '0101010101'),
(3, 5, NULL, NULL, 'aaa@gmail.com', 0, '20301836', 'Gretchen.png', 'Nguyễn Thị Miên', '111111', '0101010101'),
(4, 2, NULL, NULL, 'aba@gmail.com', 1, '20701636', 'grizz.png', 'Phạm Mạnh', '111111', '0101010101'),
(5, 2, NULL, NULL, 'aba@gmail.com', 1, '5656565656', 'panda.jpg', 'Phạm Bách Cao', '111111', '0101010101');

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conversation_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `conversation`
--

CREATE TABLE `conversation` (
  `id` int(10) UNSIGNED NOT NULL,
  `owner_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `other_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `facilities`
--

CREATE TABLE `facilities` (
  `id` int(10) UNSIGNED NOT NULL,
  `air_cond` tinyint(1) NOT NULL DEFAULT 0,
  `area` int(11) NOT NULL,
  `bath_rooms` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `kitchen` enum('Bếp chung','Bếp riêng','Không nấu ăn') COLLATE utf8mb4_unicode_ci NOT NULL,
  `internet` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `other` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rooms` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `water_price` double NOT NULL,
  `electric_price` double NOT NULL,
  `bancony` tinyint(1) NOT NULL DEFAULT 0,
  `general_owner` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `facilities`
--

INSERT INTO `facilities` (`id`, `air_cond`, `area`, `bath_rooms`, `kitchen`, `internet`, `other`, `price`, `rooms`, `created_at`, `updated_at`, `water_price`, `electric_price`, `bancony`, `general_owner`) VALUES
(1, 1, 35, 'Khép kín, có nóng lạnh', 'Bếp chung', '70000VNĐ 1 tháng', NULL, '3000000', 2, NULL, NULL, 3500, 1600, 0, 1),
(2, 0, 40, 'Khép kín, có nóng lạnh', 'Bếp riêng', '80000VNĐ 1 tháng', NULL, '3500000', 3, NULL, NULL, 3500, 1600, 0, 0),
(3, 0, 20, 'Chung, có nóng lạnh', 'Bếp chung', '50000VNĐ 1 tháng', NULL, '1500000', 1, NULL, NULL, 3500, 1600, 0, 1),
(4, 1, 25, 'Khép kín, có nóng lạnh', 'Bếp chung', '50000VNĐ 1 tháng', NULL, '2000000', 1, NULL, NULL, 3500, 1600, 1, 0),
(5, 1, 25, 'Khép kín, có nóng lạnh', 'Bếp riêng', '50000VNĐ 1 tháng', NULL, '2500000', 1, NULL, NULL, 3500, 1600, 0, 0),
(6, 1, 20, 'Khép kín, có nóng lạnh', 'Không nấu ăn', '60000VNĐ 1 tháng', NULL, '1200000', 1, NULL, NULL, 3500, 1600, 0, 0),
(7, 0, 25, 'Khép kín, có nóng lạnh', 'Không nấu ăn', '60000VNĐ 1 tháng', NULL, '1800000', 1, NULL, NULL, 3500, 1600, 1, 1),
(8, 1, 35, 'Khép kín, có nóng lạnh', 'Bếp riêng', '60000VNĐ 1 tháng', NULL, '2800000', 3, NULL, NULL, 3500, 1600, 0, 0),
(9, 1, 20, 'Khép kín, không có nóng lạnh', 'Bếp chung', '60000VNĐ 1 tháng', NULL, '1500000', 1, NULL, NULL, 3500, 1600, 1, 1),
(10, 0, 27, 'Khép kín, có nóng lạnh', 'Bếp chung', '60000VNĐ 1 tháng', NULL, '2100000', 2, NULL, NULL, 3500, 1600, 1, 1),
(11, 0, 25, 'Khép kín, có nóng lạnh', 'Bếp chung', '60000VNĐ 1 tháng', NULL, '2000000', 1, NULL, NULL, 3500, 1600, 1, 0),
(12, 1, 20, 'Khép kín, không có nóng lạnh', 'Không nấu ăn', '60000VNĐ/tháng', NULL, '1800000', 1, NULL, NULL, 3500, 1600, 0, 0),
(13, 0, 26, 'Khép kín, có nóng lạnh', 'Bếp riêng', '60000VNĐ/tháng', NULL, '1500000', 2, NULL, NULL, 3500, 1600, 0, 0),
(14, 1, 31, 'Khép kín, có nóng lạnh', 'Bếp riêng', '70000VNĐ/tháng', NULL, '2000000', 2, NULL, NULL, 3500, 1600, 0, 0),
(15, 1, 30, 'Khép kín, có nóng lạnh', 'Bếp chung', '70000VNĐ/tháng', NULL, '2800000', 2, NULL, NULL, 3500, 1600, 0, 1),
(16, 0, 15, 'Khép kín, có nóng lạnh', 'Không nấu ăn', '70000VNĐ/tháng', NULL, '1000000', 1, NULL, NULL, 3500, 1600, 0, 0),
(17, 0, 27, 'Khép kín, có nóng lạnh', 'Bếp riêng', '70000VNĐ/tháng', NULL, '2500000', 2, NULL, NULL, 3500, 1600, 0, 1),
(18, 0, 20, 'Khép kín, không có nóng lạnh', 'Bếp riêng', '55000VNĐ/tháng', NULL, '1200000', 1, NULL, NULL, 3500, 1600, 1, 0),
(19, 1, 45, 'Khép kín, có nóng lạnh', 'Bếp riêng', '80000VNĐ/tháng', NULL, '4000000', 3, NULL, NULL, 3500, 1600, 1, 0),
(20, 1, 25, 'Khép kín, có nóng lạnh', 'Bếp riêng', '60000VNĐ/tháng', NULL, '2200000', 1, NULL, NULL, 3500, 1600, 0, 0),
(21, 0, 35, 'Khép kín,Không có nóng lạnh', 'Bếp chung', '50000VNĐ/tháng', NULL, '2000000', 2, NULL, NULL, 3500, 1600, 0, 1),
(22, 0, 25, 'Khép kín, không có nóng lạnh', 'Bếp riêng', '65000VNĐ/tháng', NULL, '1800000', 2, NULL, NULL, 3500, 1600, 0, 1),
(23, 1, 35, 'Khép kín, có nóng lạnh', 'Bếp riêng', '70000VNĐ/tháng', NULL, '2600000', 2, NULL, NULL, 3500, 1600, 0, 0),
(24, 0, 40, 'Khép kín, có nóng lạnh', 'Bếp riêng', '80000VNĐ/tháng', NULL, '2000000', 2, NULL, NULL, 3500, 1600, 0, 0),
(25, 1, 18, 'Chung, có nóng lạnh', 'Bếp chung', '70000VNĐ/tháng', NULL, '900000', 1, NULL, NULL, 3500, 1600, 0, 1),
(26, 1, 35, 'Khép kín, có nóng lạnh', 'Bếp riêng', '75000VNĐ/tháng', NULL, '3000000', 2, NULL, NULL, 3500, 1600, 0, 0),
(27, 1, 40, 'Khép kín, không có nóng lạnh', 'Bếp riêng', '70000VNĐ/tháng', NULL, '3600000', 3, NULL, NULL, 3500, 1600, 1, 0),
(28, 1, 30, 'Khép kín, có nóng lạnh', 'Bếp riêng', '70000VNĐ/tháng', NULL, '2500000', 3, NULL, NULL, 3500, 1600, 1, 0),
(29, 0, 22, 'Chung, có nóng lạnh', 'Bếp chung', '70000VNĐ/tháng', NULL, '1400000', 2, NULL, NULL, 3500, 1600, 0, 1),
(30, 1, 20, 'Khép kín, có nóng lạnh', 'Bếp riêng', '60000VNĐ/tháng', NULL, '1600000', 2, NULL, NULL, 3500, 1600, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(11) NOT NULL,
  `renter_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`id`, `post_id`, `renter_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, NULL, NULL),
(2, 3, 2, NULL, NULL),
(3, 4, 5, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 2, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL,
  `img_src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `img_src`, `post_id`, `created_at`, `updated_at`) VALUES
(1, '1_img1.jpg', 1, NULL, NULL),
(2, '1_img2.jpg', 1, NULL, NULL),
(3, '1_img3.jpg', 1, NULL, NULL),
(4, '2_img1.jpg', 2, NULL, NULL),
(5, '2_img2.jpg', 2, NULL, NULL),
(6, '2_img3.jpg', 2, NULL, NULL),
(7, '2_img4.jpg', 2, NULL, NULL),
(8, '2_img5.jpg', 2, NULL, NULL),
(9, '2_img6.jpg', 2, NULL, NULL),
(10, '3_img1.jpg', 3, NULL, NULL),
(11, '3_img2.jpg', 3, NULL, NULL),
(12, '3_img3.jpg', 3, NULL, NULL),
(13, '4_img1.jpg', 4, NULL, NULL),
(14, '4_img2.jpg', 4, NULL, NULL),
(15, '4_img3.jpg', 4, NULL, NULL),
(16, '4_img4.jpg', 4, NULL, NULL),
(17, '5_img1.jpg', 5, NULL, NULL),
(18, '5_img2.jpg', 5, NULL, NULL),
(19, '5_img3.jpg', 5, NULL, NULL),
(20, '5_img4.jpg', 5, NULL, NULL),
(21, '6_img1.jpg', 6, NULL, NULL),
(22, '6_img2.jpg', 6, NULL, NULL),
(23, '6_img3.jpg', 6, NULL, NULL),
(24, '7_img1.jpg', 7, NULL, NULL),
(25, '7_img2.jpg', 7, NULL, NULL),
(26, '7_img3.jpg', 7, NULL, NULL),
(27, '7_img4.jpg', 7, NULL, NULL),
(28, '8_img1.jpg', 8, NULL, NULL),
(29, '8_img2.jpg', 8, NULL, NULL),
(30, '8_img3.jpg', 8, NULL, NULL),
(31, '8_img4.jpg', 8, NULL, NULL),
(32, '9_img1.jpg', 9, NULL, NULL),
(33, '9_img2.jpg', 9, NULL, NULL),
(34, '9_img3.jpg', 9, NULL, NULL),
(35, '9_img4.jpg', 9, NULL, NULL),
(36, '10_img1.jpg', 10, NULL, NULL),
(37, '10_img2.jpg', 10, NULL, NULL),
(38, '10_img3.jpg', 10, NULL, NULL),
(39, '11_img1.jpg', 11, NULL, NULL),
(40, '11_img2.jpg', 11, NULL, NULL),
(41, '11_img3.jpg', 11, NULL, NULL),
(42, '12_img1.jpg', 12, NULL, NULL),
(43, '12_img2.jpg', 12, NULL, NULL),
(44, '12_img3.jpg', 12, NULL, NULL),
(45, '12_img4.jpg', 12, NULL, NULL),
(46, '13_img1.jpg', 13, NULL, NULL),
(47, '13_img2.jpg', 13, NULL, NULL),
(48, '13_img3.jpg', 13, NULL, NULL),
(49, '13_img4.jpg', 13, NULL, NULL),
(50, '14_img1.jpg', 14, NULL, NULL),
(51, '14_img2.jpg', 14, NULL, NULL),
(52, '14_img3.jpg', 14, NULL, NULL),
(53, '14_img4.jpg', 14, NULL, NULL),
(54, '15_img1.jpg', 15, NULL, NULL),
(55, '15_img2.jpg', 15, NULL, NULL),
(56, '15_img3.jpg', 15, NULL, NULL),
(57, '16_img1.jpg', 16, NULL, NULL),
(58, '16_img2.jpg', 16, NULL, NULL),
(59, '16_img3.jpg', 16, NULL, NULL),
(60, '17_img1.jpeg', 17, NULL, NULL),
(61, '17_img2.jpeg', 17, NULL, NULL),
(62, '17_img3.jpeg', 17, NULL, NULL),
(63, '17_img4.jpeg', 17, NULL, NULL),
(64, '18_img1.jpg', 18, NULL, NULL),
(65, '18_img2.jpg', 18, NULL, NULL),
(66, '18_img3.jpg', 18, NULL, NULL),
(67, '19_img1.jpeg', 19, NULL, NULL),
(68, '19_img2.jpeg', 19, NULL, NULL),
(69, '19_img3.jpeg', 19, NULL, NULL),
(70, '19_img4.jpeg', 19, NULL, NULL),
(71, '20_img1.jpeg', 20, NULL, NULL),
(72, '20_img2.jpeg', 20, NULL, NULL),
(73, '20_img3.jpeg', 20, NULL, NULL),
(74, '20_img4.jpeg', 20, NULL, NULL),
(75, '20_img5.jpeg', 20, NULL, NULL),
(76, '21_img1.jpg', 21, NULL, NULL),
(77, '21_img2.jpg', 21, NULL, NULL),
(78, '21_img3.jpg', 21, NULL, NULL),
(79, '21_img4.jpg', 21, NULL, NULL),
(80, '22_img1.jpg', 22, NULL, NULL),
(81, '22_img2.jpg', 22, NULL, NULL),
(82, '22_img3.jpg', 22, NULL, NULL),
(83, '22_img4.jpg', 22, NULL, NULL),
(84, '22_img5.jpg', 22, NULL, NULL),
(85, '23_img1.jpg', 23, NULL, NULL),
(86, '23_img2.jpg', 23, NULL, NULL),
(87, '23_img3.jpg', 23, NULL, NULL),
(88, '24_img1.jpg', 24, NULL, NULL),
(89, '24_img2.jpg', 24, NULL, NULL),
(90, '24_img3.jpg', 24, NULL, NULL),
(91, '24_img4.jpg', 24, NULL, NULL),
(92, '25_img1.png', 25, NULL, NULL),
(93, '25_img2.png', 25, NULL, NULL),
(94, '25_img3.png', 25, NULL, NULL),
(95, '26_img1.jpeg', 26, NULL, NULL),
(96, '26_img2.jpg', 26, NULL, NULL),
(97, '26_img3.jpg', 26, NULL, NULL),
(98, '26_img4.jpeg', 26, NULL, NULL),
(99, '27_img1.jpg', 27, NULL, NULL),
(100, '27_img2.jpg', 27, NULL, NULL),
(101, '27_img3.jpg', 27, NULL, NULL),
(102, '27_img4.jpg', 27, NULL, NULL),
(103, '27_img5.jpg', 27, NULL, NULL),
(104, '29_img1.jpg', 29, NULL, NULL),
(105, '29_img2.jpg', 29, NULL, NULL),
(106, '29_img3.jpg', 29, NULL, NULL),
(107, '29_img4.jpg', 29, NULL, NULL),
(108, '30_img1.jpg', 30, NULL, NULL),
(109, '30_img2.jpg', 30, NULL, NULL),
(110, '30_img3.jpg', 30, NULL, NULL),
(111, '30_img4.jpg', 30, NULL, NULL),
(112, '28_img1.jpg', 28, NULL, NULL),
(113, '28_img2.jpg', 28, NULL, NULL),
(114, '28_img3.jpg', 28, NULL, NULL),
(115, '28_img4.jpg', 28, NULL, NULL),
(116, '28_img5.jpg', 28, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_11_18_044437_create_admin_table', 1),
(2, '2020_11_18_044559_create_conversation_table', 2),
(3, '2020_11_18_044652_create_facilities_table', 2),
(4, '2020_11_18_044748_create_favourites_table', 2),
(5, '2020_11_18_044805_create_images_table', 2),
(6, '2020_11_18_044833_create_owners_table', 3),
(7, '2020_11_18_044855_create_posts_table', 3),
(8, '2020_11_18_044915_create_reacts_table', 3),
(9, '2020_11_18_044946_create_renters_table', 3),
(10, '2020_11_18_045010_create_reviews_table', 3),
(11, '2020_11_18_045033_create_types_table', 3),
(12, '2020_11_18_045110_create_address_table', 3),
(13, '2020_11_18_052014_create_chat_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `id` int(10) UNSIGNED NOT NULL,
  `address_id` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identification` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_src` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `owners`
--

INSERT INTO `owners` (`id`, `address_id`, `email`, `identification`, `img_src`, `name`, `password`, `phone_number`, `created_at`, `updated_at`) VALUES
(1, 2, 'mmm@gmail.com', '1212121212', 'Ari.png', 'Phạm Thị Thảo', '111111', '0101010101', NULL, NULL),
(2, 2, 'mab@gmail.com', '1213151712', 'Agent_Trout.png', 'Lê Văn Tài', '111111', '0101010101', NULL, NULL),
(3, 2, 'mcb@gmail.com', '1213151712', 'Alexander.png', 'Đỗ Nam Huy', '111111', '0101010101', NULL, NULL),
(4, 2, 'mnb@gmail.com', '1217171717', 'BrosephBrogan.png', 'Ngô Duy Nam', '111111', '0101010101', NULL, NULL),
(5, 5, 'ascb@gmail.com', '1219171717', 'Celine.png', 'Ngô Thị Mị', '111111', '0101010101', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `address_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facilities_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `react_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `address_id`, `admin_id`, `description`, `facilities_id`, `owner_id`, `react_id`, `status`, `title`, `type_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Nhà đẹp giá rẻ', 1, 2, 1, 6, 'Nhà cho thuê', 1, '2020-11-18 06:00:39', '2020-11-18 06:00:39'),
(2, 3, 5, 'Phòng rộng rãi thoáng mát', 2, 3, 2, 6, 'Nhà cho thuê', 3, NULL, NULL),
(3, 2, 2, 'Phòng rộng rãi thoáng mát', 3, 2, 3, 6, 'Nhà cho thuê', 3, NULL, NULL),
(4, 4, 4, 'Phòng rộng rãi thoáng mát', 4, 4, 5, 6, 'Nhà cho thuê', 2, NULL, NULL),
(5, 5, 3, 'Phòng rộng rãi thoáng mát', 5, 5, 4, 6, 'Nhà cho thuê', 5, NULL, NULL),
(6, 6, 5, 'Nhà đẹp giá rẻ', 6, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(7, 7, 5, 'Nhà đẹp giá rẻ', 7, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(8, 8, 5, 'Nhà đẹp giá rẻ', 8, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(9, 9, 5, 'Nhà đẹp giá rẻ', 9, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(10, 10, 5, 'Nhà đẹp giá rẻ', 10, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(11, 11, 5, 'Nhà đẹp giá rẻ', 11, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(12, 12, 5, 'Nhà đẹp giá rẻ', 12, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(13, 13, 5, 'Nhà đẹp giá rẻ', 13, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(14, 14, 5, 'Nhà đẹp giá rẻ', 14, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(15, 15, 5, 'Nhà đẹp giá rẻ', 15, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(16, 16, 5, 'Nhà đẹp giá rẻ', 16, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(17, 17, 5, 'Nhà đẹp giá rẻ', 17, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(18, 18, 5, 'Nhà đẹp giá rẻ', 18, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(19, 19, 5, 'Nhà đẹp giá rẻ', 19, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(20, 20, 5, 'Nhà đẹp giá rẻ', 20, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(21, 21, 5, 'Nhà đẹp giá rẻ', 21, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(22, 22, 5, 'Nhà đẹp giá rẻ', 22, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(23, 23, 5, 'Nhà đẹp giá rẻ', 23, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(24, 24, 5, 'Nhà đẹp giá rẻ', 24, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(25, 25, 5, 'Nhà đẹp giá rẻ', 25, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(26, 26, 5, 'Nhà đẹp giá rẻ', 26, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(27, 27, 5, 'Nhà đẹp giá rẻ', 27, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(28, 28, 5, 'Nhà đẹp giá rẻ', 28, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(29, 29, 5, 'Nhà đẹp giá rẻ', 29, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL),
(30, 30, 5, 'Nhà đẹp giá rẻ', 30, 1, 1, 6, 'Nhà cho thuê', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reacts`
--

CREATE TABLE `reacts` (
  `id` int(10) UNSIGNED NOT NULL,
  `favourites_id` int(11) NOT NULL,
  `like_number` int(11) NOT NULL DEFAULT 0,
  `report_number` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reacts`
--

INSERT INTO `reacts` (`id`, `favourites_id`, `like_number`, `report_number`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 0, NULL, NULL),
(2, 2, 0, 0, NULL, NULL),
(3, 3, 0, 0, NULL, NULL),
(4, 4, 0, 0, NULL, NULL),
(5, 5, 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `renters`
--

CREATE TABLE `renters` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'avt_default.png',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `renters`
--

INSERT INTO `renters` (`id`, `email`, `img_src`, `name`, `password`, `created_at`, `updated_at`) VALUES
(1, 'adf@gmail.com', 'Chloe.png', 'Võ Quỳnh Trang', '111111', NULL, NULL),
(2, 'adc@gmail.com', 'Amanda.png', 'Phạm Hoa', '111111', NULL, NULL),
(3, 'asd@gmail.com', 'Marie.png', 'Nguyễn Thị Bình', '111111', NULL, NULL),
(4, 'bbb@gmail.com', 'nate.png', 'Nguyễn Bá Học', '111111', NULL, NULL),
(5, 'kkk@gmail.com', 'kitten.png', 'Phạm Lộc', '111111', NULL, NULL),
(13, 'abc@gmail.com', 'avt_default.png', 'nga', '45fcaeafd8ebec14bece68f7f00ca154', '2020-11-19 02:54:36', '2020-11-19 02:54:36'),
(15, 'a@gmail.com', 'avt_default.png', 'nga', '45fcaeafd8ebec14bece68f7f00ca154', '2020-11-19 03:02:30', '2020-11-19 03:02:30'),
(16, 'b@gmail.com', 'avt_default.png', 'nga', '4297f44b13955235245b2497399d7a93', '2020-11-19 03:05:56', '2020-11-19 03:05:56'),
(17, 'ttntrinhnga@gmai.com', 'avt_default.png', 'nga', '4297f44b13955235245b2497399d7a93', '2020-11-19 03:46:30', '2020-11-19 03:46:30'),
(18, 'c@gmai.com', 'avt_default.png', 'nga', '4297f44b13955235245b2497399d7a93', '2020-11-19 08:14:44', '2020-11-19 08:14:44'),
(19, 'c@gmail.com', 'avt_default.png', 'nga', '4297f44b13955235245b2497399d7a93', '2020-11-19 08:14:53', '2020-11-19 08:14:53');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` int(11) NOT NULL,
  `renter_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `content`, `post_id`, `renter_id`, `created_at`, `updated_at`) VALUES
(1, 'Đẹp', 2, 1, NULL, NULL),
(2, 'Không giống hình', 2, 2, NULL, NULL),
(3, 'Rộng', 3, 3, NULL, NULL),
(4, 'Hơi xấu', 4, 4, NULL, NULL),
(5, 'Đẹp', 5, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Phòng trọ', NULL, NULL),
(2, 'Chung cư mini', NULL, NULL),
(3, 'Nhà nguyên căn', NULL, NULL),
(4, 'Chung cư nguyên căn', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conversation`
--
ALTER TABLE `conversation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reacts`
--
ALTER TABLE `reacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `renters`
--
ALTER TABLE `renters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `conversation`
--
ALTER TABLE `conversation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `facilities`
--
ALTER TABLE `facilities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `owners`
--
ALTER TABLE `owners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `reacts`
--
ALTER TABLE `reacts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `renters`
--
ALTER TABLE `renters`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
