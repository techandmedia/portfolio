-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 04, 2019 at 11:38 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kuesioner`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(3) NOT NULL,
  `admin_name` varchar(10) NOT NULL,
  `admin_pass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_pass`) VALUES
(1, 'Admin', 'admin123'),
(2, 'Pimpinan', 'Pim123');

-- --------------------------------------------------------

--
-- Table structure for table `jawaban`
--

CREATE TABLE `jawaban` (
  `id_jawaban` varchar(10) NOT NULL,
  `id_soal` varchar(10) NOT NULL,
  `jawaban` varchar(20) NOT NULL,
  `alphabet` varchar(2) NOT NULL,
  `nilai` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jawaban`
--

INSERT INTO `jawaban` (`id_jawaban`, `id_soal`, `jawaban`, `alphabet`, `nilai`) VALUES
('J001', 'K001', 'Sangat Bagus Sekali', 'a', 5),
('J002', 'K001', 'Bagus Sekali', 'b', 4),
('J003', 'K001', 'Bagus', 'c', 3),
('J004', 'K001', 'Cukup Bagus', 'd', 2),
('J005', 'K001', 'Sangat Tidak Bagus', 'e', 1),
('J006', 'K002', 'Sangat Bagus Sekali', 'a', 5),
('J007', 'K002', 'Bagus Sekali', 'b', 4),
('J008', 'K002', 'Bagus', 'c', 3),
('J009', 'K002', 'Cukup Bagus', 'd', 2),
('J010', 'K002', 'Sangat Tidak Bagus', 'e', 1),
('J011', 'K003', 'Sangat Bagus Sekali', 'a', 5),
('J012', 'K003', 'Bagus Sekali', 'b', 4),
('J013', 'K003', 'Bagus', 'c', 3),
('J014', 'K003', 'Cukup Bagus', 'd', 2),
('J015', 'K003', 'Sangat Tidak Bagus', 'e', 1),
('J016', 'K004', 'Sangat Bagus Sekali', 'a', 5),
('J017', 'K004', 'Bagus Sekali', 'b', 4),
('J018', 'K004', 'Bagus', 'c', 3),
('J019', 'K004', 'Cukup Bagus', 'd', 2),
('J020', 'K004', 'Sangat Tidak Bagus', 'e', 1),
('J021', 'K005', 'Sangat Bagus Sekali', 'a', 5),
('J022', 'K005', 'Bagus Sekali', 'b', 4),
('J023', 'K005', 'Bagus', 'c', 3),
('J024', 'K005', 'Cukup Bagus', 'd', 2),
('J025', 'K005', 'Sangat Tidak Bagus', 'e', 1),
('J026', 'K006', 'Sangat Bagus Sekali', 'a', 5),
('J027', 'K006', 'Bagus Sekali', 'b', 4),
('J028', 'K006', 'Bagus', 'c', 3),
('J029', 'K006', 'Cukup Bagus', 'd', 2),
('J030', 'K006', 'Sangat Tidak Bagus', 'e', 1),
('J031', 'K007', 'Sangat Bagus Sekali', 'a', 5),
('J032', 'K007', 'Bagus Sekali', 'b', 4),
('J033', 'K007', 'Bagus', 'c', 3),
('J034', 'K007', 'Cukup Bagus', 'd', 2),
('J035', 'K007', 'Sangat Tidak Bagus', 'e', 1),
('J036', 'K008', 'Sangat Bagus Sekali', 'a', 5),
('J037', 'K008', 'Bagus Sekali', 'b', 4),
('J038', 'K008', 'Bagus', 'c', 3),
('J039', 'K008', 'Cukup Bagus', 'd', 2),
('J040', 'K008', 'Sangat Tidak Bagus', 'e', 1),
('J041', 'K009', 'Sangat Bagus Sekali', 'a', 5),
('J042', 'K009', 'Bagus Sekali', 'b', 4),
('J043', 'K009', 'Bagus', 'c', 3),
('J044', 'K009', 'Cukup Bagus', 'd', 2),
('J045', 'K009', 'Sangat Tidak Bagus', 'e', 1),
('J046', 'K010', 'Sangat Bagus Sekali', 'a', 5),
('J047', 'K010', 'Bagus Sekali', 'b', 4),
('J048', 'K010', 'Bagus', 'c', 3),
('J049', 'K010', 'Cukup Bagus', 'd', 2),
('J050', 'K010', 'Sangat Tidak Bagus', 'e', 1),
('J051', 'K011', 'Sangat Bagus Sekali', 'a', 5),
('J052', 'K011', 'Bagus Sekali', 'b', 4),
('J053', 'K011', 'Bagus', 'c', 3),
('J054', 'K011', 'Cukup Bagus', 'd', 2),
('J055', 'K011', 'Sangat Tidak Bagus', 'e', 1),
('J056', 'K012', 'Sangat Bagus Sekali', 'a', 5),
('J057', 'K012', 'Bagus Sekali', 'b', 4),
('J058', 'K012', 'Bagus', 'c', 3),
('J059', 'K012', 'Cukup Bagus', 'd', 2),
('J060', 'K012', 'Sangat Tidak Bagus', 'e', 1),
('J061', 'K013', 'Sangat Bagus Sekali', 'a', 5),
('J062', 'K013', 'Bagus Sekali', 'b', 4),
('J063', 'K013', 'Bagus', 'c', 3),
('J064', 'K013', 'Cukup Bagus', 'd', 2),
('J065', 'K013', 'Sangat Tidak Bagus', 'e', 1),
('J066', 'K014', 'Sangat Bagus Sekali', 'a', 5),
('J067', 'K014', 'Bagus Sekali', 'b', 4),
('J068', 'K014', 'Bagus', 'c', 3),
('J069', 'K014', 'Cukup Bagus', 'd', 2),
('J070', 'K014', 'Sangat Tidak Bagus', 'e', 1),
('J071', 'K015', 'Sangat Bagus Sekali', 'a', 5),
('J072', 'K015', 'Bagus Sekali', 'b', 4),
('J073', 'K015', 'Bagus', 'c', 3),
('J074', 'K015', 'Cukup Bagus', 'd', 2),
('J075', 'K015', 'Sangat Tidak Bagus', 'e', 1),
('J076', 'K016', 'Sangat Bagus Sekali', 'a', 5),
('J077', 'K016', 'Bagus Sekali', 'b', 4),
('J078', 'K016', 'Bagus', 'c', 3),
('J079', 'K016', 'Cukup Bagus', 'd', 2),
('J080', 'K016', 'Sangat Tidak Bagus', 'e', 1),
('J081', 'K017', 'Sangat Bagus Sekali', 'a', 5),
('J082', 'K017', 'Bagus Sekali', 'b', 4),
('J083', 'K017', 'Bagus', 'c', 3),
('J084', 'K017', 'Cukup Bagus', 'd', 2),
('J085', 'K017', 'Sangat Tidak Bagus', 'e', 1),
('J086', 'K018', 'Sangat Bagus Sekali', 'a', 5),
('J087', 'K018', 'Bagus Sekali', 'b', 4),
('J088', 'K018', 'Bagus', 'c', 3),
('J089', 'K018', 'Cukup Bagus', 'd', 2),
('J090', 'K018', 'Sangat Tidak Bagus', 'e', 1),
('J091', 'K019', 'Sangat Bagus Sekali', 'a', 5),
('J092', 'K019', 'Bagus Sekali', 'b', 4),
('J093', 'K019', 'Bagus', 'c', 3),
('J094', 'K019', 'Cukup Bagus', 'd', 2),
('J095', 'K019', 'Sangat Tidak Bagus', 'e', 1),
('J096', 'K020', 'Sangat Bagus Sekali', 'a', 5),
('J097', 'K020', 'Bagus Sekali', 'b', 4),
('J098', 'K020', 'Bagus', 'c', 3),
('J099', 'K020', 'Cukup Bagus', 'd', 2),
('J100', 'K020', 'Sangat Tidak Bagus', 'e', 1),
('J101', 'K021', 'Sangat Bagus Sekali', 'a', 5),
('J102', 'K021', 'Bagus Sekali', 'b', 4),
('J103', 'K021', 'Bagus', 'c', 3),
('J104', 'K021', 'Cukup Bagus', 'd', 2),
('J105', 'K021', 'Sangat Tidak Bagus', 'e', 1),
('J106', 'K022', 'Sangat Bagus Sekali', 'a', 5),
('J107', 'K022', 'Bagus Sekali', 'b', 4),
('J108', 'K022', 'Bagus', 'c', 3),
('J109', 'K022', 'Cukup Bagus', 'd', 2),
('J110', 'K022', 'Sangat Tidak Bagus', 'e', 1),
('J111', 'K023', 'Sangat Bagus Sekali', 'a', 5),
('J112', 'K023', 'Bagus Sekali', 'b', 4),
('J113', 'K023', 'Bagus', 'c', 3),
('J114', 'K023', 'Cukup Bagus', 'd', 2),
('J115', 'K023', 'Sangat Tidak Bagus', 'e', 1),
('J116', 'K024', 'Sangat Bagus Sekali', 'a', 5),
('J117', 'K024', 'Bagus Sekali', 'b', 4),
('J118', 'K024', 'Bagus', 'c', 3),
('J119', 'K024', 'Cukup Bagus', 'd', 2),
('J120', 'K024', 'Sangat Tidak Bagus', 'e', 1),
('J121', 'K025', 'Sangat Bagus Sekali', 'a', 5),
('J122', 'K025', 'Bagus Sekali', 'b', 4),
('J123', 'K024', 'Bagus', 'c', 3),
('J124', 'K024', 'Cukup Bagus', 'd', 2),
('J125', 'K024', 'Sangat Tidak Bagus', 'e', 1),
('J126', 'K025', 'Sangat Bagus Sekali', 'a', 5),
('J127', 'K025', 'Bagus Sekali', 'b', 4),
('J128', 'K025', 'Bagus', 'c', 3),
('J129', 'K025', 'Cukup Bagus', 'd', 2),
('J130', 'K025', 'Sangat Tidak Bagus', 'e', 1),
('J131', 'K026', 'Sangat Bagus Sekali', 'a', 5),
('J132', 'K026', 'Bagus Sekali', 'b', 4),
('J133', 'K026', 'Bagus', 'c', 3),
('J134', 'K026', 'Cukup Bagus', 'd', 2),
('J135', 'K026', 'Sangat Tidak Bagus', 'e', 1),
('J136', 'K027', 'Sangat Bagus Sekali', 'a', 5),
('J137', 'K027', 'Bagus Sekali', 'b', 4),
('J138', 'K027', 'Bagus', 'c', 3),
('J139', 'K027', 'Cukup Bagus', 'd', 2),
('J140', 'K027', 'Sangat Tidak Bagus', 'e', 1),
('J141', 'K028', 'Sangat Bagus Sekali', 'a', 5),
('J142', 'K028', 'Bagus Sekali', 'b', 4),
('J143', 'K028', 'Bagus', 'c', 3),
('J144', 'K028', 'Cukup Bagus', 'd', 2),
('J145', 'K028', 'Sangat Tidak Bagus', 'e', 1),
('J146', 'K029', 'Sangat Bagus Sekali', 'a', 5),
('J147', 'K029', 'Bagus Sekali', 'b', 4),
('J148', 'K029', 'Bagus', 'c', 3),
('J149', 'K029', 'Cukup Bagus', 'd', 2),
('J150', 'K029', 'Sangat Tidak Bagus', 'e', 1),
('J151', 'K030', 'Sangat Bagus Sekali', 'a', 5),
('J152', 'K030', 'Bagus Sekali', 'b', 4),
('J153', 'K030', 'Bagus', 'c', 3),
('J154', 'K030', 'Cukup Bagus', 'd', 2),
('J155', 'K030', 'Sangat Tidak Bagus', 'e', 1);

-- --------------------------------------------------------

--
-- Table structure for table `penilaian_sendiri`
--

CREATE TABLE `penilaian_sendiri` (
  `primary_id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `K001` decimal(3,1) NOT NULL,
  `K002` decimal(3,1) NOT NULL,
  `K003` decimal(3,1) NOT NULL,
  `K004` decimal(3,1) NOT NULL,
  `K005` decimal(3,1) NOT NULL,
  `K006` decimal(3,1) NOT NULL,
  `K007` decimal(3,1) NOT NULL,
  `K008` decimal(3,1) NOT NULL,
  `K009` decimal(3,1) NOT NULL,
  `K010` decimal(3,1) NOT NULL,
  `K011` decimal(3,1) NOT NULL,
  `K012` decimal(3,1) NOT NULL,
  `K013` decimal(3,1) NOT NULL,
  `K014` decimal(3,1) NOT NULL,
  `K015` decimal(3,1) NOT NULL,
  `K016` decimal(3,1) NOT NULL,
  `K017` decimal(3,1) NOT NULL,
  `K018` decimal(3,1) NOT NULL,
  `K019` decimal(3,1) NOT NULL,
  `K020` decimal(3,1) NOT NULL,
  `K021` decimal(3,1) NOT NULL,
  `K022` decimal(3,1) NOT NULL,
  `K023` decimal(3,1) NOT NULL,
  `K024` decimal(3,1) NOT NULL,
  `K025` decimal(3,1) NOT NULL,
  `K026` decimal(3,1) NOT NULL,
  `K027` decimal(3,1) NOT NULL,
  `K028` decimal(3,1) NOT NULL,
  `K029` decimal(3,1) NOT NULL,
  `K039` decimal(3,1) NOT NULL,
  `total_nilai` decimal(3,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `penilaian_teladan`
--

CREATE TABLE `penilaian_teladan` (
  `primary_id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `K001` decimal(3,1) NOT NULL,
  `K002` decimal(3,1) NOT NULL,
  `K003` decimal(3,1) NOT NULL,
  `K004` decimal(3,1) NOT NULL,
  `K005` decimal(3,1) NOT NULL,
  `K006` decimal(3,1) NOT NULL,
  `K007` decimal(3,1) NOT NULL,
  `K008` decimal(3,1) NOT NULL,
  `K009` decimal(3,1) NOT NULL,
  `K010` decimal(3,1) NOT NULL,
  `K011` decimal(3,1) NOT NULL,
  `K012` decimal(3,1) NOT NULL,
  `K013` decimal(3,1) NOT NULL,
  `K014` decimal(3,1) NOT NULL,
  `K015` decimal(3,1) NOT NULL,
  `K016` decimal(3,1) NOT NULL,
  `K017` decimal(3,1) NOT NULL,
  `K018` decimal(3,1) NOT NULL,
  `K019` decimal(3,1) NOT NULL,
  `K020` decimal(3,1) NOT NULL,
  `K021` decimal(3,1) NOT NULL,
  `K022` decimal(3,1) NOT NULL,
  `K023` decimal(3,1) NOT NULL,
  `K024` decimal(3,1) NOT NULL,
  `K025` decimal(3,1) NOT NULL,
  `K026` decimal(3,1) NOT NULL,
  `K027` decimal(3,1) NOT NULL,
  `K028` decimal(3,1) NOT NULL,
  `K029` decimal(3,1) NOT NULL,
  `K039` decimal(3,1) NOT NULL,
  `total_nilai` decimal(3,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `responden`
--

CREATE TABLE `responden` (
  `user_id` int(5) NOT NULL,
  `full_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `role_id` int(3) NOT NULL,
  `nip_nim` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `responden`
--

INSERT INTO `responden` (`user_id`, `full_name`, `role_id`, `nip_nim`) VALUES
(1, 'Andri', 1, 1),
(3, 'Andri123', 1, 0),
(4, 'Eko', 4, 1711005),
(8, 'Eko Andri', 1, 1711004),
(9, 'Eko Andri Subarnanto', 4, 1711006),
(10, 'Andri Subarnanto', 4, 1711006),
(11, 'Eko Subarnanto', 4, 1711006),
(12, ' Andri Subarnanto Eko', 4, 1711004),
(13, 'Andri Eko', 4, 1711006),
(14, 'Andri', 4, 1711006),
(22, 'Michale', 1, 1711004),
(23, 'Michale1', 3, 1711004),
(24, 'Michale2', 4, 1711004),
(25, 'Michale3', 4, 1711004),
(26, 'Eko Andri Subarnanto123', 1, 1711004),
(27, 'Eko Andri Subarnanto1234', 2, 1711004),
(28, 'Eko Andri Subarnanto124', 1, 1711004),
(29, 'Eko Andri Subarnanto125', 1, 1711004),
(30, 'Eko Andri Subarnanto126', 3, 1711004),
(31, 'Eko Andri Subarnanto127', 2, 1711004),
(32, 'Eko Andri Subarnanto128', 4, 1711004),
(33, 'Eko Subarnanto1', 4, 1711004),
(34, 'Eko Subarnanto2', 4, 1711004),
(35, 'Eko Andri Subarnanto129', 3, 1711004),
(36, 'Eko Andri Subarnanto130', 4, 1711004),
(37, 'Eko Andri Subarnanto131', 1, 1711004),
(38, 'Eko Andri Subarnanto132', 1, 1711004),
(39, 'Eko Andri Subarnanto133', 4, 1711006),
(40, 'Eko Andri Subarnanto134', 1, 1711006),
(41, 'Andri124', 1, 1711004);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(3) NOT NULL,
  `role_name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'Pimpinan'),
(2, 'Rekan Sejawat'),
(3, 'Bawahan'),
(4, 'Mahasiswa');

-- --------------------------------------------------------

--
-- Table structure for table `soal`
--

CREATE TABLE `soal` (
  `soal_id` varchar(10) CHARACTER SET utf8 NOT NULL,
  `soal` varchar(150) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `soal`
--

INSERT INTO `soal` (`soal_id`, `soal`) VALUES
('K001', 'Pengalaman yang lama dapat melakukan pekerjaan dengan lebih baik'),
('K002', 'Mempunyai keterampilan diatas orang lain'),
('K003', 'Penguasaan pekerjaan diinstansi baik'),
('K004', 'Menguasai sistem yang ada diinstansi'),
('K005', 'Memiliki basis pengetahuan yang luas, berusaha untuk mengikuti tren dan perkembangan yang ada'),
('K006', 'Memiliki pengetahuan yang luas yang dapat membantu orang lain dalam pengambilan keputusan'),
('K007', 'Mampu dengan cepat menguasai pekerjaan yang berhubungan dengan data'),
('K008', 'Kesesuaian antara ucapan dengan perbuatan'),
('K009', 'Menggunakan wewenang sesuai tugas pokok dan fungsi (Tupoksi)'),
('K010', 'Kejujuran dalam melaporkan hasil kerja kepada atasan sesuai dengan keadaan yang sebenarnya '),
('K011', 'Memperlihatkan kreativitas pada pekerjaan ketika diberi peluang untuk itu'),
('K012', 'Mengusulkan solusi kreatif untuk masalah yang dihadapi'),
('K013', 'Memberikan ide kreatif untuk kemajuan instansi '),
('K014', 'Menyelesaikan tugas yang diberikan dengan tepat waktu'),
('K015', 'Datang tepat waktu sesuai peraturan yang ada'),
('K016', 'Mematuhi tata tertib dan aturan yang ada di instansi'),
('K017', 'Menuruti perintah atau instruksi dari atasan tanpa pernah melanggar '),
('K018', 'Memiliki inisiatif yang berguna untuk membantu penyelesaian pekerjaan yang lebih baik'),
('K019', 'Bersedia melakukan pekerjaan tanpa harus diperintah atau diminta dahulu oleh atasan '),
('K020', 'Bersedia memperbaiki kesalahan tanpa harus diperintah oleh atasan'),
('K021', 'Memiliki inisiatif untuk mengatasi setiap permasalahan dalam pelaksanaan tugasnya'),
('K022', 'Dapat bekerja secara mandiri'),
('K023', 'Memberikan bantuan dan dukungan kepada orang lain'),
('K024', 'Mempunyai tanggung jawab terhadap pekerjaan yang dibebankan kepadanya'),
('K025', 'Dapat menyelesaikan sejumlah pekerjaan yang menjadi tanggung jawab'),
('K026', 'Dapat mempertanggung jawabkan atas hasil kerja yang dicapai '),
('K027', 'Memahami konsekuensi keputusan dan tindakan yang diambilnya sesuai dengan tugas dan tanggung jawab '),
('K028', 'Berusaha memberikan perhatian penuh dan konsentrasi terhadap pekerjaan'),
('K029', 'Menyelesaikan tugas sesuai waktu yang telah ditentukan '),
('K030', 'Mampu membuat keputusan yang berhubungan dengan pekerjaan, mengembangkan solusi alternative dan rekomendasi serta memilih tindakan yang tepat dalam me');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jawaban`
--

CREATE TABLE `tbl_jawaban` (
  `id_jawaban` varchar(10) NOT NULL,
  `id_soal` varchar(10) NOT NULL,
  `jawaban` varchar(20) NOT NULL,
  `alphabet` varchar(2) NOT NULL,
  `nilai` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_jawaban`
--

INSERT INTO `tbl_jawaban` (`id_jawaban`, `id_soal`, `jawaban`, `alphabet`, `nilai`) VALUES
('J001', 'K001', 'Sangat Bagus Sekali', 'a', 5),
('J002', 'K001', 'Bagus Sekali', 'b', 4),
('J003', 'K001', 'Bagus', 'c', 3),
('J004', 'K001', 'Cukup Bagus', 'd', 2),
('J005', 'K001', 'Sangat Tidak Bagus', 'e', 1),
('J006', 'K002', 'Sangat Bagus Sekali', 'a', 5),
('J007', 'K002', 'Bagus Sekali', 'b', 4),
('J008', 'K002', 'Bagus', 'c', 3),
('J009', 'K002', 'Cukup Bagus', 'd', 2),
('J010', 'K002', 'Sangat Tidak Bagus', 'e', 1),
('J011', 'K003', 'Sangat Bagus Sekali', 'a', 5),
('J012', 'K003', 'Bagus Sekali', 'b', 4),
('J013', 'K003', 'Bagus', 'c', 3),
('J014', 'K003', 'Cukup Bagus', 'd', 2),
('J015', 'K003', 'Sangat Tidak Bagus', 'e', 1),
('J016', 'K004', 'Sangat Bagus Sekali', 'a', 5),
('J017', 'K004', 'Bagus Sekali', 'b', 4),
('J018', 'K004', 'Bagus', 'c', 3),
('J019', 'K004', 'Cukup Bagus', 'd', 2),
('J020', 'K004', 'Sangat Tidak Bagus', 'e', 1),
('J021', 'K005', 'Sangat Bagus Sekali', 'a', 5),
('J022', 'K005', 'Bagus Sekali', 'b', 4),
('J023', 'K005', 'Bagus', 'c', 3),
('J024', 'K005', 'Cukup Bagus', 'd', 2),
('J025', 'K005', 'Sangat Tidak Bagus', 'e', 1),
('J026', 'K006', 'Sangat Bagus Sekali', 'a', 5),
('J027', 'K006', 'Bagus Sekali', 'b', 4),
('J028', 'K006', 'Bagus', 'c', 3),
('J029', 'K006', 'Cukup Bagus', 'd', 2),
('J030', 'K006', 'Sangat Tidak Bagus', 'e', 1),
('J031', 'K007', 'Sangat Bagus Sekali', 'a', 5),
('J032', 'K007', 'Bagus Sekali', 'b', 4),
('J033', 'K007', 'Bagus', 'c', 3),
('J034', 'K007', 'Cukup Bagus', 'd', 2),
('J035', 'K007', 'Sangat Tidak Bagus', 'e', 1),
('J036', 'K008', 'Sangat Bagus Sekali', 'a', 5),
('J037', 'K008', 'Bagus Sekali', 'b', 4),
('J038', 'K008', 'Bagus', 'c', 3),
('J039', 'K008', 'Cukup Bagus', 'd', 2),
('J040', 'K008', 'Sangat Tidak Bagus', 'e', 1),
('J041', 'K009', 'Sangat Bagus Sekali', 'a', 5),
('J042', 'K009', 'Bagus Sekali', 'b', 4),
('J043', 'K009', 'Bagus', 'c', 3),
('J044', 'K009', 'Cukup Bagus', 'd', 2),
('J045', 'K009', 'Sangat Tidak Bagus', 'e', 1),
('J046', 'K010', 'Sangat Bagus Sekali', 'a', 5),
('J047', 'K010', 'Bagus Sekali', 'b', 4),
('J048', 'K010', 'Bagus', 'c', 3),
('J049', 'K010', 'Cukup Bagus', 'd', 2),
('J050', 'K010', 'Sangat Tidak Bagus', 'e', 1),
('J051', 'K011', 'Sangat Bagus Sekali', 'a', 5),
('J052', 'K011', 'Bagus Sekali', 'b', 4),
('J053', 'K011', 'Bagus', 'c', 3),
('J054', 'K011', 'Cukup Bagus', 'd', 2),
('J055', 'K011', 'Sangat Tidak Bagus', 'e', 1),
('J056', 'K012', 'Sangat Bagus Sekali', 'a', 5),
('J057', 'K012', 'Bagus Sekali', 'b', 4),
('J058', 'K012', 'Bagus', 'c', 3),
('J059', 'K012', 'Cukup Bagus', 'd', 2),
('J060', 'K012', 'Sangat Tidak Bagus', 'e', 1),
('J061', 'K013', 'Sangat Bagus Sekali', 'a', 5),
('J062', 'K013', 'Bagus Sekali', 'b', 4),
('J063', 'K013', 'Bagus', 'c', 3),
('J064', 'K013', 'Cukup Bagus', 'd', 2),
('J065', 'K013', 'Sangat Tidak Bagus', 'e', 1),
('J066', 'K014', 'Sangat Bagus Sekali', 'a', 5),
('J067', 'K014', 'Bagus Sekali', 'b', 4),
('J068', 'K014', 'Bagus', 'c', 3),
('J069', 'K014', 'Cukup Bagus', 'd', 2),
('J070', 'K014', 'Sangat Tidak Bagus', 'e', 1),
('J071', 'K015', 'Sangat Bagus Sekali', 'a', 5),
('J072', 'K015', 'Bagus Sekali', 'b', 4),
('J073', 'K015', 'Bagus', 'c', 3),
('J074', 'K015', 'Cukup Bagus', 'd', 2),
('J075', 'K015', 'Sangat Tidak Bagus', 'e', 1),
('J076', 'K016', 'Sangat Bagus Sekali', 'a', 5),
('J077', 'K016', 'Bagus Sekali', 'b', 4),
('J078', 'K016', 'Bagus', 'c', 3),
('J079', 'K016', 'Cukup Bagus', 'd', 2),
('J080', 'K016', 'Sangat Tidak Bagus', 'e', 1),
('J081', 'K017', 'Sangat Bagus Sekali', 'a', 5),
('J082', 'K017', 'Bagus Sekali', 'b', 4),
('J083', 'K017', 'Bagus', 'c', 3),
('J084', 'K017', 'Cukup Bagus', 'd', 2),
('J085', 'K017', 'Sangat Tidak Bagus', 'e', 1),
('J086', 'K018', 'Sangat Bagus Sekali', 'a', 5),
('J087', 'K018', 'Bagus Sekali', 'b', 4),
('J088', 'K018', 'Bagus', 'c', 3),
('J089', 'K018', 'Cukup Bagus', 'd', 2),
('J090', 'K018', 'Sangat Tidak Bagus', 'e', 1),
('J091', 'K019', 'Sangat Bagus Sekali', 'a', 5),
('J092', 'K019', 'Bagus Sekali', 'b', 4),
('J093', 'K019', 'Bagus', 'c', 3),
('J094', 'K019', 'Cukup Bagus', 'd', 2),
('J095', 'K019', 'Sangat Tidak Bagus', 'e', 1),
('J096', 'K020', 'Sangat Bagus Sekali', 'a', 5),
('J097', 'K020', 'Bagus Sekali', 'b', 4),
('J098', 'K020', 'Bagus', 'c', 3),
('J099', 'K020', 'Cukup Bagus', 'd', 2),
('J100', 'K020', 'Sangat Tidak Bagus', 'e', 1),
('J101', 'K021', 'Sangat Bagus Sekali', 'a', 5),
('J102', 'K021', 'Bagus Sekali', 'b', 4),
('J103', 'K021', 'Bagus', 'c', 3),
('J104', 'K021', 'Cukup Bagus', 'd', 2),
('J105', 'K021', 'Sangat Tidak Bagus', 'e', 1),
('J106', 'K022', 'Sangat Bagus Sekali', 'a', 5),
('J107', 'K022', 'Bagus Sekali', 'b', 4),
('J108', 'K022', 'Bagus', 'c', 3),
('J109', 'K022', 'Cukup Bagus', 'd', 2),
('J110', 'K022', 'Sangat Tidak Bagus', 'e', 1),
('J111', 'K023', 'Sangat Bagus Sekali', 'a', 5),
('J112', 'K023', 'Bagus Sekali', 'b', 4),
('J113', 'K023', 'Bagus', 'c', 3),
('J114', 'K023', 'Cukup Bagus', 'd', 2),
('J115', 'K023', 'Sangat Tidak Bagus', 'e', 1),
('J116', 'K024', 'Sangat Bagus Sekali', 'a', 5),
('J117', 'K024', 'Bagus Sekali', 'b', 4),
('J118', 'K024', 'Bagus', 'c', 3),
('J119', 'K024', 'Cukup Bagus', 'd', 2),
('J120', 'K024', 'Sangat Tidak Bagus', 'e', 1),
('J121', 'K025', 'Sangat Bagus Sekali', 'a', 5),
('J122', 'K025', 'Bagus Sekali', 'b', 4),
('J123', 'K024', 'Bagus', 'c', 3),
('J124', 'K024', 'Cukup Bagus', 'd', 2),
('J125', 'K024', 'Sangat Tidak Bagus', 'e', 1),
('J126', 'K025', 'Sangat Bagus Sekali', 'a', 5),
('J127', 'K025', 'Bagus Sekali', 'b', 4),
('J128', 'K025', 'Bagus', 'c', 3),
('J129', 'K025', 'Cukup Bagus', 'd', 2),
('J130', 'K025', 'Sangat Tidak Bagus', 'e', 1),
('J131', 'K026', 'Sangat Bagus Sekali', 'a', 5),
('J132', 'K026', 'Bagus Sekali', 'b', 4),
('J133', 'K026', 'Bagus', 'c', 3),
('J134', 'K026', 'Cukup Bagus', 'd', 2),
('J135', 'K026', 'Sangat Tidak Bagus', 'e', 1),
('J136', 'K027', 'Sangat Bagus Sekali', 'a', 5),
('J137', 'K027', 'Bagus Sekali', 'b', 4),
('J138', 'K027', 'Bagus', 'c', 3),
('J139', 'K027', 'Cukup Bagus', 'd', 2),
('J140', 'K027', 'Sangat Tidak Bagus', 'e', 1),
('J141', 'K028', 'Sangat Bagus Sekali', 'a', 5),
('J142', 'K028', 'Bagus Sekali', 'b', 4),
('J143', 'K028', 'Bagus', 'c', 3),
('J144', 'K028', 'Cukup Bagus', 'd', 2),
('J145', 'K028', 'Sangat Tidak Bagus', 'e', 1),
('J146', 'K029', 'Sangat Bagus Sekali', 'a', 5),
('J147', 'K029', 'Bagus Sekali', 'b', 4),
('J148', 'K029', 'Bagus', 'c', 3),
('J149', 'K029', 'Cukup Bagus', 'd', 2),
('J150', 'K029', 'Sangat Tidak Bagus', 'e', 1),
('J151', 'K030', 'Sangat Bagus Sekali', 'a', 5),
('J152', 'K030', 'Bagus Sekali', 'b', 4),
('J153', 'K030', 'Bagus', 'c', 3),
('J154', 'K030', 'Cukup Bagus', 'd', 2),
('J155', 'K030', 'Sangat Tidak Bagus', 'e', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `nip_nim` int(5) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`nip_nim`, `name`) VALUES
(1, 'Nuryadi Wijiharjono'),
(2, 'Zulpahmi'),
(3, 'Sunarta'),
(4, 'Thohirin'),
(5, 'Faizal Ridwan Zamzany'),
(6, 'Sumardi'),
(7, 'Daram Heriansyah'),
(8, 'Yadi Nurhayadi'),
(9, 'Dewi Pudji Rahayu'),
(10, 'Edi Setiawan'),
(11, 'Syamsul Bachri'),
(12, 'Rita Yanti'),
(13, 'Damayanti Alawiyah'),
(14, 'Inarman'),
(15, 'ExsaKristian Saputra'),
(16, 'Taufik Hidayat'),
(17, 'Muji Rahayu'),
(18, 'Deny Indra Novendar'),
(19, 'Sri Wahyuni'),
(20, 'Enur Nurlaela'),
(21, 'Sarwan'),
(22, 'Susan Marliana'),
(23, 'M. Yusuf'),
(24, 'Anggie Hamdia O'),
(25, 'Mifta Apriyanto'),
(26, 'Syamsul Arifin'),
(27, 'Tirnojo'),
(28, 'Ahmad Abubakar'),
(29, 'Bambang Sumaryanto'),
(30, 'Budi Permana Jusuf'),
(31, 'Enong Muiz'),
(32, 'Aditya Ariwibowo'),
(33, 'Agung Rasul'),
(34, 'Ahmad Fihri'),
(35, 'Ahmad Subaki'),
(36, 'Ahmadih Rojalih Jawab'),
(37, 'Amilia Zainita Saini'),
(38, 'Andi Sessu'),
(39, 'Budiandru'),
(40, 'Bambang Tutuko'),
(41, 'Eti Rohaeyi'),
(42, 'Fitrisia'),
(43, 'Faozan Amar'),
(44, 'Hasim Rumawan'),
(45, 'Herwin Kurniawan'),
(46, 'Hilda'),
(47, 'Iwan Lukita'),
(48, 'Komara'),
(49, 'M. Nurrasyidin'),
(50, 'Mulyaning Wulan'),
(51, 'Rito'),
(52, 'Nur Hadiyazid R'),
(53, 'Ummu Salama Al Azizah'),
(54, 'Zamah Sari'),
(55, 'Azrul Tanjung'),
(56, 'Wisnu Sambhoro'),
(57, 'Deni Adha Akbari'),
(58, 'Yusdi Daulay'),
(59, 'Rudi Qaharudin'),
(60, 'Tupi Setyowati'),
(61, 'Deni Nuryadin'),
(62, 'Ahmad Sonjaya'),
(63, 'Pahman Habibi'),
(64, 'Fanina Adji'),
(65, 'Emaridial Ulza'),
(66, 'Yurinato'),
(67, 'Dicky Chandra'),
(68, 'Oki Irawan'),
(69, 'Arief Fitriyanto'),
(70, 'Meita Larasati'),
(71, 'Ani Silvia'),
(72, 'Hera Khairunnisa'),
(73, 'Sumarso'),
(74, 'Sutiwi'),
(75, 'Usanto'),
(76, 'Abdul Rochman'),
(77, 'Ahmad Diponegoro'),
(78, 'Adnan'),
(79, 'Ambarsari Dwi Cahyani'),
(80, 'Andi Iswandi'),
(81, 'Awaludin'),
(82, 'Bambang Dwi Hartono'),
(83, 'Bambang Noegroho S'),
(84, 'Budi Santoso'),
(85, 'Connie Chairunnisa'),
(86, 'Deni T. Sugiarto'),
(87, 'Diah Purwandari'),
(88, 'Dickdick Sodikin'),
(89, 'Jaja Nurjanah'),
(90, 'Eko Susanto'),
(91, 'Faizul Mubarok'),
(92, 'Fauzi'),
(93, 'Febi Nur Baiduri'),
(94, 'Suyadi'),
(95, 'Hilal Ramadhan'),
(96, 'Ika Yuli'),
(97, 'Indri Arafi Juliannisa'),
(98, 'Lanny Polina'),
(99, 'Machmud'),
(100, 'Lestari Ambarini'),
(101, 'M. Syafarudin'),
(102, 'Masri Mansyur'),
(103, 'Masud HMN'),
(104, 'Mila Kumala'),
(105, 'Mohammad Zainuri'),
(106, 'Muhammad Lutfi'),
(107, 'Muslim'),
(108, 'Nendi Juhandi'),
(109, 'Nugroho'),
(110, 'Nuzulul Hidayati'),
(111, 'Paimin'),
(112, 'Rahmat Dahlan'),
(113, 'Rizqa Sidnia'),
(114, 'Safier Ramdani'),
(115, 'Sintha Wahjusaputri'),
(116, 'Sutanti Ekawardani'),
(117, 'Syafrudin Anhar'),
(118, 'Yanto'),
(119, 'Yessi Diana'),
(120, 'Agus Purlianto'),
(121, 'Kawan'),
(122, 'Ujang Giat');

-- --------------------------------------------------------

--
-- Table structure for table `users-backup`
--

CREATE TABLE `users-backup` (
  `user_id` int(5) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `role_id` int(3) NOT NULL,
  `role` varchar(10) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users-backup`
--

INSERT INTO `users-backup` (`user_id`, `name`, `role_id`, `role`) VALUES
(1, 'Nuryadi Wijiharjono', 0, 'bawahan'),
(2, 'Zulpahmi', 0, 'bawahan'),
(3, 'Sunarta', 0, 'bawahan'),
(4, 'Thohirin', 0, 'bawahan'),
(5, 'Faizal Ridwan Zamzany', 0, 'bawahan'),
(6, 'Sumardi', 0, 'bawahan'),
(7, 'Daram Heriansyah', 0, 'bawahan'),
(8, 'Yadi Nurhayadi', 0, 'bawahan'),
(9, 'Dewi Pudji Rahayu', 0, 'bawahan'),
(10, 'Edi Setiawan', 0, 'bawahan'),
(11, 'Syamsul Bachri', 0, 'bawahan'),
(12, 'Rita Yanti', 0, 'bawahan'),
(13, 'Damayanti Alawiyah', 0, 'bawahan'),
(14, 'Inarman', 0, 'bawahan'),
(15, 'ExsaKristian Saputra', 0, 'bawahan'),
(16, 'Taufik Hidayat', 0, 'bawahan'),
(17, 'Muji Rahayu', 0, 'bawahan'),
(18, 'Deny Indra Novendar', 0, 'bawahan'),
(19, 'Sri Wahyuni', 0, 'bawahan'),
(20, 'Enur Nurlaela', 0, 'bawahan'),
(21, 'Sarwan', 0, 'bawahan'),
(22, 'Susan Marliana', 0, 'bawahan'),
(23, 'M. Yusuf', 0, 'bawahan'),
(24, 'Anggie Hamdia O', 0, 'bawahan'),
(25, 'Mifta Apriyanto', 0, 'bawahan'),
(26, 'Syamsul Arifin', 0, 'bawahan'),
(27, 'Tirnojo', 0, 'bawahan'),
(28, 'Ahmad Abubakar', 0, 'bawahan'),
(29, 'Bambang Sumaryanto', 0, 'bawahan'),
(30, 'Budi Permana Jusuf', 0, 'bawahan'),
(31, 'Enong Muiz', 0, 'bawahan'),
(32, 'Aditya Ariwibowo', 0, 'bawahan'),
(33, 'Agung Rasul', 0, 'bawahan'),
(34, 'Ahmad Fihri', 0, 'bawahan'),
(35, 'Ahmad Subaki', 0, 'bawahan'),
(36, 'Ahmadih Rojalih Jawab', 0, 'bawahan'),
(37, 'Amilia Zainita Saini', 0, 'bawahan'),
(38, 'Andi Sessu', 0, 'bawahan'),
(39, 'Budiandru', 0, 'bawahan'),
(40, 'Bambang Tutuko', 0, 'bawahan'),
(41, 'Eti Rohaeyi', 0, 'bawahan'),
(42, 'Fitrisia', 0, 'bawahan'),
(43, 'Faozan Amar', 0, 'bawahan'),
(44, 'Hasim Rumawan', 0, 'bawahan'),
(45, 'Herwin Kurniawan', 0, 'bawahan'),
(46, 'Hilda', 0, 'bawahan'),
(47, 'Iwan Lukita', 0, 'bawahan'),
(48, 'Komara', 0, 'bawahan'),
(49, 'M. Nurrasyidin', 0, 'bawahan'),
(50, 'Mulyaning Wulan', 0, 'bawahan'),
(51, 'Rito', 0, 'bawahan'),
(52, 'Nur Hadiyazid R', 0, 'bawahan'),
(53, 'Ummu Salama Al Azizah', 0, 'bawahan'),
(54, 'Zamah Sari', 0, 'bawahan'),
(55, 'Azrul Tanjung', 0, 'bawahan'),
(56, 'Wisnu Sambhoro', 0, 'bawahan'),
(57, 'Deni Adha Akbari', 0, 'bawahan'),
(58, 'Yusdi Daulay', 0, 'bawahan'),
(59, 'Rudi Qaharudin', 0, 'bawahan'),
(60, 'Tupi Setyowati', 0, 'bawahan'),
(61, 'Deni Nuryadin', 0, 'bawahan'),
(62, 'Ahmad Sonjaya', 0, 'bawahan'),
(63, 'Pahman Habibi', 0, 'bawahan'),
(64, 'Fanina Adji', 0, 'bawahan'),
(65, 'Emaridial Ulza', 0, 'bawahan'),
(66, 'Yurinato', 0, 'bawahan'),
(67, 'Dicky Chandra', 0, 'bawahan'),
(68, 'Oki Irawan', 0, 'bawahan'),
(69, 'Arief Fitriyanto', 0, 'bawahan'),
(70, 'Meita Larasati', 0, 'bawahan'),
(71, 'Ani Silvia', 0, 'bawahan'),
(72, 'Hera Khairunnisa', 0, 'bawahan'),
(73, 'Sumarso', 0, 'bawahan'),
(74, 'Sutiwi', 0, 'bawahan'),
(75, 'Usanto', 0, 'bawahan'),
(76, 'Abdul Rochman', 0, 'bawahan'),
(77, 'Ahmad Diponegoro', 0, 'bawahan'),
(78, 'Adnan', 0, 'bawahan'),
(79, 'Ambarsari Dwi Cahyani', 0, 'bawahan'),
(80, 'Andi Iswandi', 0, 'bawahan'),
(81, 'Awaludin', 0, 'bawahan'),
(82, 'Bambang Dwi Hartono', 0, 'bawahan'),
(83, 'Bambang Noegroho S', 0, 'bawahan'),
(84, 'Budi Santoso', 0, 'bawahan'),
(85, 'Connie Chairunnisa', 0, 'bawahan'),
(86, 'Deni T. Sugiarto', 0, 'bawahan'),
(87, 'Diah Purwandari', 0, 'bawahan'),
(88, 'Dickdick Sodikin', 0, 'bawahan'),
(89, 'Jaja Nurjanah', 0, 'bawahan'),
(90, 'Eko Susanto', 0, 'bawahan'),
(91, 'Faizul Mubarok', 0, 'bawahan'),
(92, 'Fauzi', 0, 'bawahan'),
(93, 'Febi Nur Baiduri', 0, 'bawahan'),
(94, 'Suyadi', 0, 'bawahan'),
(95, 'Hilal Ramadhan', 0, 'bawahan'),
(96, 'Ika Yuli', 0, 'bawahan'),
(97, 'Indri Arafi Juliannisa', 0, 'bawahan'),
(98, 'Lanny Polina', 0, 'bawahan'),
(99, 'Machmud', 0, 'bawahan'),
(100, 'Lestari Ambarini', 0, 'bawahan'),
(101, 'M. Syafarudin', 0, 'bawahan'),
(102, 'Masri Mansyur', 0, 'bawahan'),
(103, 'Masud HMN', 0, 'bawahan'),
(104, 'Mila Kumala', 0, 'bawahan'),
(105, 'Mohammad Zainuri', 0, 'bawahan'),
(106, 'Muhammad Lutfi', 0, 'bawahan'),
(107, 'Muslim', 0, 'bawahan'),
(108, 'Nendi Juhandi', 0, 'bawahan'),
(109, 'Nugroho', 0, 'bawahan'),
(110, 'Nuzulul Hidayati', 0, 'bawahan'),
(111, 'Paimin', 0, 'bawahan'),
(112, 'Rahmat Dahlan', 0, 'bawahan'),
(113, 'Rizqa Sidnia', 0, 'bawahan'),
(114, 'Safier Ramdani', 0, 'bawahan'),
(115, 'Sintha Wahjusaputri', 0, 'bawahan'),
(116, 'Sutanti Ekawardani', 0, 'bawahan'),
(117, 'Syafrudin Anhar', 0, 'bawahan'),
(118, 'Yanto', 0, 'bawahan'),
(119, 'Yessi Diana', 0, 'bawahan'),
(120, 'Agus Purlianto', 0, 'bawahan'),
(121, 'Kawan', 0, 'kawan'),
(122, 'Ujang Giat', 0, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `jawaban`
--
ALTER TABLE `jawaban`
  ADD PRIMARY KEY (`id_jawaban`);

--
-- Indexes for table `penilaian_sendiri`
--
ALTER TABLE `penilaian_sendiri`
  ADD PRIMARY KEY (`primary_id`);

--
-- Indexes for table `penilaian_teladan`
--
ALTER TABLE `penilaian_teladan`
  ADD PRIMARY KEY (`primary_id`);

--
-- Indexes for table `responden`
--
ALTER TABLE `responden`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `soal`
--
ALTER TABLE `soal`
  ADD PRIMARY KEY (`soal_id`);

--
-- Indexes for table `tbl_jawaban`
--
ALTER TABLE `tbl_jawaban`
  ADD PRIMARY KEY (`id_jawaban`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`nip_nim`);

--
-- Indexes for table `users-backup`
--
ALTER TABLE `users-backup`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `penilaian_sendiri`
--
ALTER TABLE `penilaian_sendiri`
  MODIFY `primary_id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `penilaian_teladan`
--
ALTER TABLE `penilaian_teladan`
  MODIFY `primary_id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `responden`
--
ALTER TABLE `responden`
  MODIFY `user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `nip_nim` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
--
-- AUTO_INCREMENT for table `users-backup`
--
ALTER TABLE `users-backup`
  MODIFY `user_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
