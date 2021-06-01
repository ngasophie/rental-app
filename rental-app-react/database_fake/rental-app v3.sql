-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 20, 2020 lúc 09:02 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB-log
-- Phiên bản PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `rental-app`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `address`
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
-- Đang đổ dữ liệu cho bảng `address`
--

INSERT INTO `address` (`id`, `address`, `city`, `district`, `created_at`, `updated_at`) VALUES
(1, 'số 6, ngõ 38 đường nguyễn văn huyên - cầu giấy.', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(2, ' số 8b, ngách 80 ngõ 381 nguyễn khang, yên hòa, cầu giấy', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(3, 'số 10, ngõ 44/64/10 đường trần thái tông, cầu giấy, hà nôi', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(4, 'ngõ 90 hoàng ngân, trung hòa, cầu giấy, hà nội', 'Hà Nội', 'Cầu Giấy', NULL, NULL),
(5, 'ngõ 2 đường phạm văn đồng , mai dịch , cầu giấy hà nội', 'Hà Nội', 'Cầu Giấy', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
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
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `address`, `created_at`, `updated_at`, `email`, `gender`, `identification`, `img_src`, `name`, `password`, `phone_number`) VALUES
(1, 1, NULL, NULL, 'abc@gmail.com', 1, '20501066', 'icebear.jpg', 'Ân Bảo Cường', '111111', '0101010101'),
(2, 3, NULL, NULL, 'mpn@gmail.com', 0, '20502036', 'Isabella.png', 'Nguyễn Bảo An', '111111', '0101010101'),
(3, 5, NULL, NULL, 'aaa@gmail.com', 0, '20301836', 'Gretchen.png', 'Nguyễn Thị Miên', '111111', '0101010101'),
(4, 2, NULL, NULL, 'aba@gmail.com', 1, '20701636', 'grizz.png', 'Phạm Mạnh', '111111', '0101010101'),
(5, 2, NULL, NULL, 'aba@gmail.com', 1, '5656565656', 'panda.jpg', 'Phạm Bách Cao', '111111', '0101010101');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chat`
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
-- Cấu trúc bảng cho bảng `conversation`
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
-- Cấu trúc bảng cho bảng `facilities`
--

CREATE TABLE `facilities` (
  `id` int(10) UNSIGNED NOT NULL,
  `air_cond` tinyint(1) NOT NULL DEFAULT 0,
  `area` int(11) NOT NULL,
  `bath_rooms` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `kitchen` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
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
-- Đang đổ dữ liệu cho bảng `facilities`
--

INSERT INTO `facilities` (`id`, `air_cond`, `area`, `bath_rooms`, `kitchen`, `internet`, `other`, `price`, `rooms`, `created_at`, `updated_at`, `water_price`, `electric_price`, `bancony`, `general_owner`) VALUES
(1, 0, 30, 'Khép kín, có nóng lạnh', 'Bếp chung', '70000VNĐ 1 tháng', NULL, '2000000', 2, NULL, NULL, 3500, 1600, 0, 0),
(2, 1, 25, 'Chung, có nóng lạnh', 'Bếp chung', '80000VNĐ 1 tháng', NULL, '2800000', 1, NULL, NULL, 3500, 1600, 0, 0),
(3, 1, 15, 'Riêng,không có nóng lạnh', 'Bếp chung', '50000VNĐ 1 tháng', NULL, '1500000', 1, NULL, NULL, 3500, 1600, 0, 0),
(4, 1, 35, 'Riêng, có nóng lạnh', 'Bếp riêng', '50000VNĐ 1 tháng', NULL, '3600000', 1, NULL, NULL, 3500, 1600, 0, 0),
(5, 0, 40, 'Riêng, có nóng lạnh', 'Bếp riêng', '50000VNĐ 1 tháng', NULL, '3000000', 1, NULL, NULL, 3500, 1600, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favourites`
--

CREATE TABLE `favourites` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(11) NOT NULL,
  `renter_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `favourites`
--

INSERT INTO `favourites` (`id`, `post_id`, `renter_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, NULL, NULL),
(2, 3, 2, NULL, NULL),
(3, 4, 5, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 2, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL,
  `img_src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `images`
--

INSERT INTO `images` (`id`, `img_src`, `post_id`, `created_at`, `updated_at`) VALUES
(1, '1.jpg', 1, NULL, NULL),
(2, '11.jpg', 1, NULL, NULL),
(3, '111.jpg', 1, NULL, NULL),
(4, '2.jpg', 2, NULL, NULL),
(5, '22.jpg', 2, NULL, NULL),
(6, '222.jpg', 2, NULL, NULL),
(7, '3.jpg', 3, NULL, NULL),
(8, '4.jpg', 4, NULL, NULL),
(9, '5.jpg', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
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
-- Cấu trúc bảng cho bảng `owners`
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
-- Đang đổ dữ liệu cho bảng `owners`
--

INSERT INTO `owners` (`id`, `address_id`, `email`, `identification`, `img_src`, `name`, `password`, `phone_number`, `created_at`, `updated_at`) VALUES
(1, 2, 'mmm@gmail.com', '1212121212', 'Ari.png', 'Phạm Thị Thảo', '111111', '0101010101', NULL, NULL),
(2, 2, 'mab@gmail.com', '1213151712', 'Agent_Trout.png', 'Lê Văn Tài', '111111', '0101010101', NULL, NULL),
(3, 2, 'mcb@gmail.com', '1213151712', 'Alexander.png', 'Đỗ Nam Huy', '111111', '0101010101', NULL, NULL),
(4, 2, 'mnb@gmail.com', '1217171717', 'BrosephBrogan.png', 'Ngô Duy Nam', '111111', '0101010101', NULL, NULL),
(5, 5, 'ascb@gmail.com', '1219171717', 'Celine.png', 'Ngô Thị Mị', '111111', '0101010101', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
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
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `address_id`, `admin_id`, `description`, `facilities_id`, `owner_id`, `react_id`, `status`, `title`, `type_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Nhà đẹp giá rẻ', 1, 2, 1, 1, 'Nhà cho thuê', 1, '2020-11-18 06:00:39', '2020-11-18 06:00:39'),
(2, 3, 5, 'Phòng rộng rãi thoáng mát', 2, 3, 2, 2, 'Nhà cho thuê', 3, NULL, NULL),
(3, 3, 2, 'Phòng rộng rãi thoáng mát', 3, 2, 3, 2, 'Nhà cho thuê', 3, NULL, NULL),
(4, 4, 4, 'Phòng rộng rãi thoáng mát', 4, 4, 5, 1, 'Nhà cho thuê', 2, NULL, NULL),
(5, 5, 3, 'Phòng rộng rãi thoáng mát', 5, 5, 4, 1, 'Nhà cho thuê', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reacts`
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
-- Đang đổ dữ liệu cho bảng `reacts`
--

INSERT INTO `reacts` (`id`, `favourites_id`, `like_number`, `report_number`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 0, NULL, NULL),
(2, 2, 0, 0, NULL, NULL),
(3, 3, 0, 0, NULL, NULL),
(4, 4, 0, 0, NULL, NULL),
(5, 5, 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `renters`
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
-- Đang đổ dữ liệu cho bảng `renters`
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
-- Cấu trúc bảng cho bảng `reviews`
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
-- Đang đổ dữ liệu cho bảng `reviews`
--

INSERT INTO `reviews` (`id`, `content`, `post_id`, `renter_id`, `created_at`, `updated_at`) VALUES
(1, 'Đẹp', 2, 1, NULL, NULL),
(2, 'Không giống hình', 2, 2, NULL, NULL),
(3, 'Rộng', 3, 3, NULL, NULL),
(4, 'Hơi xấu', 4, 4, NULL, NULL),
(5, 'Đẹp', 5, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `types`
--

CREATE TABLE `types` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `types`
--

INSERT INTO `types` (`id`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Phòng trọ', NULL, NULL),
(2, 'Chung cư mini', NULL, NULL),
(3, 'Nhà nguyên căn', NULL, NULL),
(4, 'Chung cư nguyên căn', NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `conversation`
--
ALTER TABLE `conversation`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `reacts`
--
ALTER TABLE `reacts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `renters`
--
ALTER TABLE `renters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `address`
--
ALTER TABLE `address`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `conversation`
--
ALTER TABLE `conversation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `facilities`
--
ALTER TABLE `facilities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `owners`
--
ALTER TABLE `owners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `reacts`
--
ALTER TABLE `reacts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `renters`
--
ALTER TABLE `renters`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `types`
--
ALTER TABLE `types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
