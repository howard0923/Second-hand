-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-10-13 17:27:17
-- 伺服器版本： 10.4.13-MariaDB
-- PHP 版本： 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `test`
--

-- --------------------------------------------------------

--
-- 資料表結構 `address`
--

CREATE TABLE `address` (
  `uId` int(11) NOT NULL,
  `city` varchar(10) CHARACTER SET utf8mb4 NOT NULL,
  `district` varchar(10) CHARACTER SET utf8mb4 NOT NULL,
  `remaining` varchar(50) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `address`
--

INSERT INTO `address` (`uId`, `city`, `district`, `remaining`) VALUES
(4, '基隆市', '仁愛區', '中山北路'),
(5, '基隆市', '仁愛區', '中山北路'),
(6, '基隆市', '仁愛區', '1'),
(7, '基隆市', '仁愛區', '1'),
(8, '基隆市', '仁愛區', '2'),
(9, '基隆市', '仁愛區', 'あ'),
(10, '基隆市', '仁愛區', '1'),
(11, '基隆市', '仁愛區', 'あ'),
(12, '基隆市', '仁愛區', 'd'),
(13, '基隆市', '仁愛區', '2'),
(14, '基隆市', '仁愛區', '2'),
(15, '基隆市', '仁愛區', 'd'),
(16, '基隆市', '仁愛區', '1'),
(17, '基隆市', '仁愛區', '1'),
(18, '基隆市', '仁愛區', '1'),
(19, '基隆市', '仁愛區', '0'),
(20, '基隆市', '仁愛區', 'test1'),
(21, '基隆市', '仁愛區', 'a'),
(22, '基隆市', '仁愛區', 'a'),
(23, '宜蘭縣', '宜蘭市', 'ffdsf'),
(24, '基隆市', '仁愛區', '中山北路'),
(25, '基隆市', '仁愛區', '中山北路'),
(26, '基隆市', '仁愛區', '中山北路'),
(27, '基隆市', '仁愛區', '中山北路'),
(28, '基隆市', '仁愛區', '中山北路'),
(29, '基隆市', '仁愛區', '中山北路'),
(30, '基隆市', '仁愛區', '中山北路'),
(31, '基隆市', '仁愛區', '中山北路'),
(32, '基隆市', '仁愛區', '中山北路'),
(33, '基隆市', '仁愛區', '中山北路'),
(34, '基隆市', '仁愛區', '中山北路'),
(35, '基隆市', '仁愛區', '中山北路'),
(36, '基隆市', '仁愛區', '中山北路'),
(37, '基隆市', '仁愛區', '中山北路'),
(38, '基隆市', '仁愛區', '中山北路'),
(39, '基隆市', '仁愛區', '中山北路'),
(40, '基隆市', '仁愛區', '中山北路'),
(41, '基隆市', '仁愛區', '中山北路'),
(42, '基隆市', '仁愛區', '中山北路'),
(43, '基隆市', '仁愛區', '中山北路'),
(44, '基隆市', '仁愛區', '中山北路'),
(45, '基隆市', '仁愛區', '中山北路'),
(46, '基隆市', '仁愛區', '中山北路'),
(47, '高雄市', '鼓山區', '蓮海路70號'),
(48, '基隆市', '仁愛區', '中山大學');

-- --------------------------------------------------------

--
-- 資料表結構 `brand`
--

CREATE TABLE `brand` (
  `brandId` int(11) NOT NULL,
  `brand` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `brand`
--

INSERT INTO `brand` (`brandId`, `brand`) VALUES
(1, 'supreme'),
(2, 'Balenciaga'),
(3, 'CHANEL'),
(4, 'GIVENCHY'),
(5, 'hermes'),
(6, 'BALLY'),
(7, 'LONGCHAMP'),
(8, 'lv'),
(9, 'TIFFANY'),
(10, 'AGNESB'),
(11, 'CELINE'),
(12, 'baccarat'),
(13, 'ANTEPRIMA'),
(14, 'BALENCIAGA'),
(15, 'BottegaVeneta'),
(16, 'BURBERRY'),
(17, 'COACH'),
(18, 'DIOR'),
(19, 'FENDI'),
(20, 'GUCCI'),
(21, 'PRADA'),
(43, 'LOEWE'),
(46, 'FERRAGAMO');

-- --------------------------------------------------------

--
-- 資料表結構 `cart`
--

CREATE TABLE `cart` (
  `cId` int(11) NOT NULL,
  `uId` int(11) NOT NULL,
  `pId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `color`
--

CREATE TABLE `color` (
  `colorId` int(11) NOT NULL,
  `color` varchar(100) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `color`
--

INSERT INTO `color` (`colorId`, `color`) VALUES
(1, '灰色'),
(2, '金色'),
(3, '銀色'),
(4, '紅色'),
(5, '粉色'),
(6, '米白色'),
(7, '藍色'),
(8, '咖啡色'),
(9, '黑色'),
(10, '白色'),
(11, '桃色');

-- --------------------------------------------------------

--
-- 資料表結構 `delivery`
--

CREATE TABLE `delivery` (
  `deliveryId` int(22) NOT NULL,
  `delivery` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `delivery`
--

INSERT INTO `delivery` (`deliveryId`, `delivery`) VALUES
(0, 'preparing'),
(1, 'In delivery'),
(2, 'Arrived');

-- --------------------------------------------------------

--
-- 資料表結構 `favor`
--

CREATE TABLE `favor` (
  `feature` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `uId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `favor`
--

INSERT INTO `favor` (`feature`, `uId`) VALUES
('aaa', 4),
('ccc', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `favorite`
--

CREATE TABLE `favorite` (
  `pId` int(11) NOT NULL,
  `uId` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `favorite`
--

INSERT INTO `favorite` (`pId`, `uId`, `available`) VALUES
(6500, 4, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `plan`
--

CREATE TABLE `plan` (
  `planId` int(10) NOT NULL,
  `uId` int(10) NOT NULL,
  `start_date` datetime(6) NOT NULL,
  `due_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `plan`
--

INSERT INTO `plan` (`planId`, `uId`, `start_date`, `due_date`) VALUES
(2, 4, '2021-09-22 23:11:05.256000', '2021-10-22 23:11:05.000000'),
(1, 5, '2021-10-04 02:32:25.275000', '2021-10-11 02:32:25.000000'),
(1, 31, '2021-10-07 01:47:42.140000', '2021-10-14 01:47:42.000000'),
(1, 46, '2021-10-02 18:37:55.266000', '2021-10-09 18:37:55.000000'),
(1, 47, '2021-10-02 18:10:31.333000', '2021-10-09 18:10:31.000000');

-- --------------------------------------------------------

--
-- 資料表結構 `plan_content`
--

CREATE TABLE `plan_content` (
  `planId` int(11) NOT NULL,
  `text` varchar(300) CHARACTER SET utf8mb4 NOT NULL,
  `price` int(11) NOT NULL,
  `date` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `plan_content`
--

INSERT INTO `plan_content` (`planId`, `text`, `price`, `date`) VALUES
(1, '7日短租,小資族的首選福利項目', 300, 7),
(2, '月內各式名牌包包隨你挑,快來加入精品訂閱制!', 1000, 30);

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `pId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `brandId` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `og_price` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `level` varchar(10) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL,
  `detail` varchar(500) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `storeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`pId`, `name`, `brandId`, `price`, `og_price`, `typeId`, `level`, `length`, `width`, `height`, `colorId`, `detail`, `note`, `storeId`) VALUES
(5660, 'CHANEL 香奈兒 灰色菱格紋 小姐包 手提包/肩背包/手拿包', 3, 0, 0, 1, NULL, 0, 0, 0, 1, NULL, NULL, NULL),
(5665, 'CHANEL 香奈兒 銀色金蔥 28公分 COCO肩背包/側背包/手拿包', 3, 0, 0, 2, NULL, 0, 0, 0, 3, NULL, NULL, NULL),
(5671, 'CHANEL 香奈兒 菱格紋 櫃姐 信封式造型 肩背包/斜背包', 3, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5672, 'CHANEL 香奈兒 菱格紋信封式造型 肩背包/手提包', 3, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5673, 'CHANEL 香奈兒 粉色帆布 方形購物包 手提/肩背包', 3, 0, 0, 7, NULL, 0, 0, 0, 5, NULL, NULL, NULL),
(5677, 'CHANEL 香奈兒 藍色山型紋 復古銀扣 25公分boy 肩背/斜背包', 3, 0, 0, 3, NULL, 0, 0, 0, 7, NULL, NULL, NULL),
(5683, 'CHANEL 香奈兒 黑色 全皮 vintage 化妝箱 手提包/斜背包/肩背包', 3, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5684, 'CHANEL 香奈兒 黑色 亮面全皮 vintage 化妝箱 手提包/斜背包/肩背包', 3, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5690, 'CHANEL 香奈兒 黑色亮面 28CM 銀釦 單肩包/肩背包/手拿包', 3, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5716, 'CHANEL 黑色 全皮 冰格風琴包/東西扣鍊包/側肩包', 3, 0, 0, 6, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5722, 'CHANEL香奈兒 紅色 菱格紋 16公分 勝利V金鍊斜背包', 3, 0, 0, 3, NULL, 0, 0, 0, 4, NULL, NULL, NULL),
(5723, 'CHANEL香奈兒 黑色 菱格紋 全皮 銀扣銀鍊 單蓋 30公分 JUMBO 側背包/肩背包/斜背包', 3, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5727, 'CHANEL黑色 荔枝皮 銀扣32公分 CF 側肩斜背包/COCO包', 3, 0, 0, 10, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5728, 'CHANEL黑色爆裂紋全皮銀扣口蓋斜背包', 3, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5802, 'BALLY 粉色全皮 拼紅白條紋 艾瑪 手提/斜背 二用包', 6, 0, 0, 11, NULL, 0, 0, 0, 5, NULL, NULL, NULL),
(5806, 'BALLY 黑色全皮斜背包', 6, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5823, 'Louis Vuitton LV  全皮 黑色 TAIGA系列 刺繡背帶 男用 斜背包/肩背包', 8, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5828, 'LOUIS VUITTON LV EPI 紅色 水波紋 全皮 凱莉款 手提包/肩背包/二用包', 8, 0, 0, 1, NULL, 0, 0, 0, 4, NULL, NULL, NULL),
(5829, 'LOUIS VUITTON LV EPI 紅色 水波紋 全皮 保齡球包/手提包', 8, 0, 0, 1, NULL, 0, 0, 0, 4, NULL, NULL, NULL),
(5830, 'LOUIS VUITTON LV EPI 紅色全皮 雙耳手提包 /公事包', 8, 0, 0, 1, NULL, 0, 0, 0, 4, NULL, NULL, NULL),
(5832, 'LOUIS VUITTON LV EPI 黑色 水波紋 全皮 保齡球包/手提包', 8, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5845, 'LOUIS VUITTON LV 銀色 lockit 鉚釘造型 手提包', 8, 0, 0, 1, NULL, 0, 0, 0, 3, NULL, NULL, NULL),
(5883, 'Louis Vuitton LV 深咖TAGIA掀蓋側背包', 8, 0, 0, 10, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(5943, 'LOUIS VUITTON LV 黑色 EPI水波紋 全皮 肩背包/手提包', 8, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(5973, 'TIFFANY 藍色蝴蝶結皺褶手拿斜背二用包/晚宴包', 9, 0, 0, 11, NULL, 0, 0, 0, 7, NULL, NULL, NULL),
(6033, 'CELINE Vintage 黑色經典馬車LOGO全皮 手提包', 11, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6036, 'Celine 米白色全皮 側背包/手提包', 11, 0, 0, 10, NULL, 0, 0, 0, 6, NULL, NULL, NULL),
(6037, 'Celine 米白色全皮金扣側背包', 11, 0, 0, 10, NULL, 0, 0, 0, 6, NULL, NULL, NULL),
(6038, 'Celine 米白緹花PVC拼皮革凱旋門 VINTAGE 直立式 斜背包', 11, 0, 0, 3, NULL, 0, 0, 0, 6, NULL, NULL, NULL),
(6039, 'Celine 米白緹花PVC拼皮革凱旋門 購物包 手提包/肩背包', 11, 0, 0, 7, NULL, 0, 0, 0, 6, NULL, NULL, NULL),
(6044, 'Celine 經典 老花LOGO 凱旅門 手拿包', 11, 0, 0, 5, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6052, 'Celine 黑色 經典緹花布 拼皮革 拉鍊手提包', 11, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6075, 'Bottega Veneta BV 經典編織 黑色全皮 斜背包/肩背包', 15, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6089, 'BURBERRY 全皮深咖啡內格紋金釦斜背包', 16, 0, 0, 3, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6097, 'BURBERRY 經典紅色紋格 磁釦式 購物包/手提包/肩背包', 16, 0, 0, 7, NULL, 0, 0, 0, 4, NULL, NULL, NULL),
(6098, 'BURBERRY 經典紅色紋格 拼原皮 愛心掛飾 肩背包', 16, 0, 0, 2, NULL, 0, 0, 0, 4, NULL, NULL, NULL),
(6105, 'COACH TABBY 黑色全皮 拼卡其緹花 金色logo 斜背包', 17, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6115, 'COACH 白色配桃紅 滿版logo 尼龍手提包', 17, 0, 0, 1, NULL, 0, 0, 0, 10, NULL, NULL, NULL),
(6117, 'COACH 粉色圈圈手拿包 大 掛包/手拎包', 17, 0, 0, 5, NULL, 0, 0, 0, 5, NULL, NULL, NULL),
(6118, 'COACH 米白色 全皮 化妝箱 手提斜背 兩用包', 17, 0, 0, 11, NULL, 0, 0, 0, 6, NULL, NULL, NULL),
(6121, 'COACH 藍色彩C logo 化妝包/手拿包', 17, 0, 0, 12, NULL, 0, 0, 0, 7, NULL, NULL, NULL),
(6146, 'COACH 蔻馳 黑色 全皮 側肩背包', 17, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6147, 'COACH 黑色 全皮 中 手拿包 手拎包 掛包', 17, 0, 0, 5, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6148, 'COACH 黑色 全皮 橫式拉鍊小包 肩背包', 17, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6150, 'COACH 黑色漆皮 銀色logo 小型手拿包/零錢包', 17, 0, 0, 9, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6154, 'COACH 黑色緹花 帆布拼銀色金蔥 側肩包', 17, 0, 0, 6, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6158, 'Christian Dior 灰色騰格紋 DIOR CARO CD金釦 手拿包/肩背包/斜背包', 18, 0, 0, 3, NULL, 0, 0, 0, 1, NULL, NULL, NULL),
(6165, 'Christian Dior 經典Lady Dior 限量黑色全皮黛妃包-5格 手提包/肩背包', 18, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6166, 'Christian Dior 經典Lady Dior 黑色 新款 五格黛妃 手提包/肩背包/斜背包', 18, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6177, 'Christian Dior 迪奧 黑色全皮 D字 金釦 馬鞍包 手提包/肩背包', 18, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6178, 'Christian Dior 迪奧 黑色全皮 馬銜環抓皺造型 手提包', 18, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6187, 'FENDI  咖啡色緹花布 LOGO 手提購物包', 19, 0, 0, 7, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6195, 'FENDI 米白色拼白皮革 麻布手工系列 手提斜背兩用包', 19, 0, 0, 1, NULL, 0, 0, 0, 6, NULL, NULL, NULL),
(6198, 'FENDI 老花紋 白色 PVC拼亮皮 抓皺造型 手提/肩背包', 19, 0, 0, 2, NULL, 0, 0, 0, 10, NULL, NULL, NULL),
(6202, 'FENDI 經典老花 咖啡色 布面 LOGO手工縫線 拉鍊式 正方斜背包', 19, 0, 0, 3, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6211, 'FENDI 芬迪 黑色絨皮 銀色logo 水桶造型 手提肩背包', 19, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6214, 'FENDI 黑色 防刮皮 26公分 手提斜背 兩用包', 19, 0, 0, 11, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6215, 'FENDI 黑色尼龍拼皮革 低調黑logo 方形手提/斜背兩用包》</h1>, <h1 class=\"title__3wBva\" style=\"font-size:1.5em;margin:0px 3', 19, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6227, 'GUCCI GG logo 黑色全皮 金鍊小包 斜背包/肩背包/小廢包', 20, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6233, 'GUCCI 古馳 Ophidia系列 紅綠條 琺瑯 卡片零錢小ㄇ拉 短夾/零錢包', 20, 0, 0, 9, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6248, 'GUCCI 古馳 咖啡色 緹花布拼皮革 花朵 圓形 手提包', 20, 0, 0, 1, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6251, 'Gucci 古馳 緹花拼藍色星星 PVC 二折 6卡 零錢短夾', 20, 0, 0, 9, NULL, 0, 0, 0, 7, NULL, NULL, NULL),
(6252, 'GUCCI 古馳 黑色全皮D型環圓把肩背包', 20, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6262, 'GUCCI 白色全皮藍紅條紋提背二用包', 20, 0, 0, 11, NULL, 0, 0, 0, 10, NULL, NULL, NULL),
(6290, 'GUCCI 黑色 古馳 帆布 艾瑪 貝殼 手提包/肩背包', 20, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6292, 'GUCCI 黑色 膠面 記者包/斜背包郵差包', 20, 0, 0, 3, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6293, 'GUCCI 黑色全皮 經典流蘇造型賈姬包 肩背包', 20, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6296, 'GUCCI 黑色緹花布 圓把 金扣 扁包/肩背包', 20, 0, 0, 2, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6312, 'PRADA 藍色 尼龍材質 銀色雙扣 掀蓋式 拉鍊 斜背包', 21, 0, 0, 3, NULL, 0, 0, 0, 7, NULL, NULL, NULL),
(6313, 'PRADA 藍色防刮皮卡片零錢包', 21, 0, 0, 9, NULL, 0, 0, 0, 7, NULL, NULL, NULL),
(6322, 'PRADA 咖啡色 全皮多功能 公事包/手提包', 21, 0, 0, 4, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6324, 'PRADA 黑色 尼龍材質 金色雙扣 掀蓋式 拉鍊 斜背包', 21, 0, 0, 3, NULL, 0, 0, 0, 2, NULL, NULL, NULL),
(6326, 'PRADA 黑色 防水降落傘材質 公事包/手提包/斜背包/二用包', 21, 0, 0, 11, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6328, 'PRADA 黑色帆布拼亮皮 雙拉鍊 手提包 肩背包', 21, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6347, 'LOEWE咖啡色 全皮 LOGO手提包', 43, 0, 0, 1, NULL, 0, 0, 0, 8, NULL, NULL, NULL),
(6354, 'SALVATORE FERRAGAMO 白色皮革 馬蹄環側背包', 46, 0, 0, 10, NULL, 0, 0, 0, 10, NULL, NULL, NULL),
(6360, 'SALVATORE FERRAGAMO 黑色 Gancini系列 全皮 束口 手提包/肩背包', 46, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6361, 'SALVATORE FERRAGAMO 黑色 LOGO 手提包/肩背包/斜背包', 46, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6362, 'SALVATORE FERRAGAMO 黑色皮革拼麂皮手提包', 46, 0, 0, 1, NULL, 0, 0, 0, 9, NULL, NULL, NULL),
(6500, 'test1', 11, 9999, 150000, 12, '2', 20, 30, 10, 4, 'test1', 'test1', NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `product_pic`
--

CREATE TABLE `product_pic` (
  `pId` int(11) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `product_pic`
--

INSERT INTO `product_pic` (`pId`, `image`) VALUES
(6500, 'https://s.yimg.com/ob/image/281222b4-2b42-45b1-a2be-4c89e250c215.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `product_status`
--

CREATE TABLE `product_status` (
  `pId` int(11) NOT NULL,
  `tId` int(11) DEFAULT NULL,
  `status` varchar(500) NOT NULL,
  `INorOUT` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `product_status`
--

INSERT INTO `product_status` (`pId`, `tId`, `status`, `INorOUT`) VALUES
(6500, NULL, 'available', NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `record`
--

CREATE TABLE `record` (
  `uId` int(11) NOT NULL,
  `pId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `store`
--

CREATE TABLE `store` (
  `storeId` int(11) NOT NULL,
  `storeAddressId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `transaction`
--

CREATE TABLE `transaction` (
  `tId` int(11) NOT NULL,
  `pId` int(11) NOT NULL,
  `uId` int(11) NOT NULL,
  `staffId` int(11) NOT NULL,
  `planId` int(11) DEFAULT NULL,
  `date` datetime(6) NOT NULL,
  `start_date` datetime(6) NOT NULL,
  `return_date` datetime(6) DEFAULT NULL,
  `isConsummerReceived` tinyint(1) DEFAULT NULL,
  `ShippingAddressId` int(11) NOT NULL,
  `response` varchar(500) CHARACTER SET utf8mb4 DEFAULT NULL,
  `deliveryId` int(11) NOT NULL,
  `isProductReturned` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 資料表結構 `type`
--

CREATE TABLE `type` (
  `typeId` int(11) NOT NULL,
  `type` varchar(100) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `type`
--

INSERT INTO `type` (`typeId`, `type`) VALUES
(1, '手提包'),
(2, '肩背包'),
(3, '斜背包'),
(4, '公事包'),
(5, '手拿包'),
(6, '側肩包'),
(7, '購物包'),
(8, '托特包'),
(9, '錢包'),
(10, '側背包'),
(11, '二用包'),
(12, '化妝包');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `uId` int(11) NOT NULL,
  `isStaff` tinyint(1) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `birthday` date NOT NULL,
  `gender` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` varchar(100) DEFAULT NULL,
  `IsVerified` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`uId`, `isStaff`, `name`, `birthday`, `gender`, `phone`, `email`, `password`, `token`, `IsVerified`) VALUES
(1, 0, 'test', '2021-10-12', '生理男', '0922466317', 'chenhoward8@gmail.com', '123456', NULL, 1),
(4, 0, 'howard111', '2021-09-11', '生理男', '0922466319', 'chenhoward7@gmail.com', '123456', NULL, 0),
(5, 1, 'admin', '2021-09-05', '生理男', '0903545845', 'admin@163.com', 'admin111', NULL, 0),
(31, 0, 'howard111', '2021-09-16', '生理男', '0922466185', 'chenhoward76464@gmail.com', '123456', '6844195871', 0),
(32, 0, 'howard111', '2021-09-16', '生理男', '0923466318', 'chenhoward7555@gmail.com', '123456', '2907303351', 0),
(33, 0, 'howard111', '2021-09-23', '生理男', '0922466318', 'chenhoward755@gmail.com', '123456', '6628235407', 0),
(46, 0, 'howard111', '2021-09-26', '生理男', '0922466318', 'chenhoward599@gmail.com', '123456', '41409063698120664', 1),
(47, 0, '精品訂閱平台', '2010-01-20', '生理女', '0912345678', 'test1002@test.com', 'test123', '69498636496602240', 1),
(48, 0, 'ian', '2021-10-11', '生理男', '1234567891', 'poyengood13@gmail.com', '123456', '50612237316233170', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `user_like`
--

CREATE TABLE `user_like` (
  `uId` int(11) NOT NULL,
  `brandId` int(11) NOT NULL,
  `colorId` int(11) NOT NULL,
  `typeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`uId`);

--
-- 資料表索引 `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brandId`);

--
-- 資料表索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cId`),
  ADD UNIQUE KEY `uId_2` (`uId`),
  ADD KEY `pId` (`pId`),
  ADD KEY `uId` (`uId`);

--
-- 資料表索引 `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`colorId`);

--
-- 資料表索引 `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`deliveryId`);

--
-- 資料表索引 `favorite`
--
ALTER TABLE `favorite`
  ADD KEY `pId` (`pId`,`uId`),
  ADD KEY `favorite_ibfk_2` (`uId`);

--
-- 資料表索引 `plan`
--
ALTER TABLE `plan`
  ADD UNIQUE KEY `uId` (`uId`),
  ADD KEY `plan_content` (`planId`);

--
-- 資料表索引 `plan_content`
--
ALTER TABLE `plan_content`
  ADD PRIMARY KEY (`planId`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pId`),
  ADD KEY `product_ibfk_1` (`brandId`),
  ADD KEY `product_ibfk_4` (`storeId`),
  ADD KEY `product_ibfk_2` (`colorId`),
  ADD KEY `product_ibfk_3` (`typeId`);

--
-- 資料表索引 `product_pic`
--
ALTER TABLE `product_pic`
  ADD KEY `pId` (`pId`) USING BTREE;

--
-- 資料表索引 `product_status`
--
ALTER TABLE `product_status`
  ADD PRIMARY KEY (`pId`),
  ADD KEY `tId` (`tId`);

--
-- 資料表索引 `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`storeId`),
  ADD KEY `store_ibfk_1` (`storeAddressId`);

--
-- 資料表索引 `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`tId`),
  ADD KEY `pId` (`pId`,`uId`),
  ADD KEY `transaction_ibfk_2` (`uId`),
  ADD KEY `ShippingAddressId` (`ShippingAddressId`),
  ADD KEY `deliveryId` (`deliveryId`),
  ADD KEY `transaction_ibfk_6` (`planId`);

--
-- 資料表索引 `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`typeId`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uId`);

--
-- 資料表索引 `user_like`
--
ALTER TABLE `user_like`
  ADD KEY `uId` (`uId`),
  ADD KEY `brandId` (`brandId`),
  ADD KEY `colorId` (`colorId`),
  ADD KEY `typeId` (`typeId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `address`
--
ALTER TABLE `address`
  MODIFY `uId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `cId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `pId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6501;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `transaction`
--
ALTER TABLE `transaction`
  MODIFY `tId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `uId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`) ON DELETE CASCADE;

--
-- 資料表的限制式 `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `plan`
--
ALTER TABLE `plan`
  ADD CONSTRAINT `plan_content` FOREIGN KEY (`planId`) REFERENCES `plan_content` (`planId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `uId_user` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brand` (`brandId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`colorId`) REFERENCES `color` (`colorId`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`typeId`) REFERENCES `type` (`typeId`),
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`storeId`) REFERENCES `store` (`storeId`);

--
-- 資料表的限制式 `product_pic`
--
ALTER TABLE `product_pic`
  ADD CONSTRAINT `product_pic_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `product_status`
--
ALTER TABLE `product_status`
  ADD CONSTRAINT `product_status_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_status_ibfk_2` FOREIGN KEY (`tId`) REFERENCES `transaction` (`tId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `store`
--
ALTER TABLE `store`
  ADD CONSTRAINT `store_ibfk_1` FOREIGN KEY (`storeAddressId`) REFERENCES `address` (`uId`) ON DELETE CASCADE;

--
-- 資料表的限制式 `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_4` FOREIGN KEY (`ShippingAddressId`) REFERENCES `address` (`uId`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_5` FOREIGN KEY (`deliveryId`) REFERENCES `delivery` (`deliveryId`) ON DELETE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_6` FOREIGN KEY (`planId`) REFERENCES `plan` (`planId`) ON DELETE CASCADE;

--
-- 資料表的限制式 `user_like`
--
ALTER TABLE `user_like`
  ADD CONSTRAINT `user_like_ibfk_1` FOREIGN KEY (`uId`) REFERENCES `user` (`uId`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_like_ibfk_2` FOREIGN KEY (`brandId`) REFERENCES `brand` (`brandId`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_like_ibfk_3` FOREIGN KEY (`colorId`) REFERENCES `color` (`colorId`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_like_ibfk_4` FOREIGN KEY (`typeId`) REFERENCES `type` (`typeId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
