-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: survey_builder
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add user account',7,'add_useraccount'),(26,'Can change user account',7,'change_useraccount'),(27,'Can delete user account',7,'delete_useraccount'),(28,'Can view user account',7,'view_useraccount'),(29,'Can add survey',8,'add_survey'),(30,'Can change survey',8,'change_survey'),(31,'Can delete survey',8,'delete_survey'),(32,'Can view survey',8,'view_survey'),(33,'Can add category',9,'add_category'),(34,'Can change category',9,'change_category'),(35,'Can delete category',9,'delete_category'),(36,'Can view category',9,'view_category');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authentication_useraccount`
--

DROP TABLE IF EXISTS `authentication_useraccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authentication_useraccount` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_date` datetime(6) NOT NULL,
  `modified_date` datetime(6) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authentication_useraccount`
--

LOCK TABLES `authentication_useraccount` WRITE;
/*!40000 ALTER TABLE `authentication_useraccount` DISABLE KEYS */;
INSERT INTO `authentication_useraccount` VALUES (1,'murali.k@gmail.com','7o/8PDUvza0iiy5EdVAahw==','Muralikumar','M','Admin',1,'2024-04-05 03:30:11.288439','2024-04-05 03:30:11.288506',NULL),(2,'dinesh@gmail.com','7o/8PDUvza0iiy5EdVAahw==','Dineshkumar','M','User',1,'2024-04-06 12:24:43.534195','2024-04-06 12:24:43.534272',NULL),(3,'senthil@gmail.com','3JdGb+8J4Hp6Nv3do5/cmg==','SenthilVel','S','User',1,'2024-04-06 12:27:11.895434','2024-04-06 12:27:11.895487',NULL),(6,'simbu@gmail.com','8rgVHvi/Y9C6si09db06Nw==','Silambarasan','R','Admin',1,'2024-05-04 13:08:03.674126','2024-05-04 13:08:03.674207',NULL),(7,'leomessi@gmail.com','7o/8PDUvza0iiy5EdVAahw==','Lionel','Messi','Admin',1,'2024-05-05 06:24:10.688602','2024-05-05 06:24:10.688668',NULL);
/*!40000 ALTER TABLE `authentication_useraccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(7,'authentication','useraccount'),(5,'contenttypes','contenttype'),(6,'sessions','session'),(9,'survey','category'),(8,'survey','survey');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-04-04 02:19:31.489559'),(2,'auth','0001_initial','2024-04-04 02:20:38.338216'),(3,'admin','0001_initial','2024-04-04 02:20:53.850041'),(4,'admin','0002_logentry_remove_auto_add','2024-04-04 02:20:54.264664'),(5,'admin','0003_logentry_add_action_flag_choices','2024-04-04 02:20:54.723927'),(6,'contenttypes','0002_remove_content_type_name','2024-04-04 02:21:00.823931'),(7,'auth','0002_alter_permission_name_max_length','2024-04-04 02:21:06.387650'),(8,'auth','0003_alter_user_email_max_length','2024-04-04 02:21:07.190490'),(9,'auth','0004_alter_user_username_opts','2024-04-04 02:21:07.649909'),(10,'auth','0005_alter_user_last_login_null','2024-04-04 02:21:12.669332'),(11,'auth','0006_require_contenttypes_0002','2024-04-04 02:21:13.059760'),(12,'auth','0007_alter_validators_add_error_messages','2024-04-04 02:21:13.610913'),(13,'auth','0008_alter_user_username_max_length','2024-04-04 02:21:19.027329'),(14,'auth','0009_alter_user_last_name_max_length','2024-04-04 02:21:24.787268'),(15,'auth','0010_alter_group_name_max_length','2024-04-04 02:21:25.619125'),(16,'auth','0011_update_proxy_permissions','2024-04-04 02:21:25.976775'),(17,'auth','0012_alter_user_first_name_max_length','2024-04-04 02:21:31.668933'),(18,'sessions','0001_initial','2024-04-04 02:21:35.333385'),(19,'authentication','0001_initial','2024-04-04 03:09:52.767737'),(20,'authentication','0002_alter_useraccount_last_login','2024-04-05 02:56:44.602406'),(23,'survey','0001_initial','2024-04-07 04:23:54.074396'),(24,'survey','0002_alter_survey_content','2024-04-14 06:56:22.726182'),(25,'survey','0003_alter_survey_content','2024-04-14 07:13:02.926548'),(26,'survey','0004_category_created_by','2024-05-04 13:13:18.307480'),(27,'survey','0005_alter_category_description','2024-05-05 05:04:23.376048');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_category`
--

DROP TABLE IF EXISTS `survey_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_date` datetime(6) NOT NULL,
  `modified_date` datetime(6) NOT NULL,
  `created_by_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `survey_category_created_by_id_36bb370f_fk_authentic` (`created_by_id`),
  CONSTRAINT `survey_category_created_by_id_36bb370f_fk_authentic` FOREIGN KEY (`created_by_id`) REFERENCES `authentication_useraccount` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_category`
--

LOCK TABLES `survey_category` WRITE;
/*!40000 ALTER TABLE `survey_category` DISABLE KEYS */;
INSERT INTO `survey_category` VALUES (1,'Heart Surgury','Heart Surgery related surveys',1,'2024-04-07 16:51:22.067829','2024-04-07 16:51:22.067908',1),(2,'Knee Surgery','Knee surgery related surgury here',1,'2024-04-07 16:52:03.074481','2024-04-07 16:52:03.074532',1),(3,'Joint Surgery','Joint Surgery related surveys',1,'2024-05-04 03:08:05.791041','2024-05-04 03:08:05.791097',1),(4,'Skull Surgery','Skull Surgery related surveys',1,'2024-05-04 13:19:32.573249','2024-05-04 13:19:32.573296',1),(5,'Neuro Surgery','Neuro surgery related surveys',1,'2024-05-05 06:23:03.513229','2024-05-05 06:23:03.513297',1);
/*!40000 ALTER TABLE `survey_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey_survey`
--

DROP TABLE IF EXISTS `survey_survey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey_survey` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `content` json NOT NULL,
  `image` longtext,
  `description` varchar(200) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_date` datetime(6) NOT NULL,
  `modified_date` datetime(6) NOT NULL,
  `author_id` bigint NOT NULL,
  `category_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `survey_survey_author_id_645b16f6_fk_authentic` (`author_id`),
  KEY `survey_survey_category_id_2d32ba53_fk_survey_category_id` (`category_id`),
  CONSTRAINT `survey_survey_author_id_645b16f6_fk_authentic` FOREIGN KEY (`author_id`) REFERENCES `authentication_useraccount` (`id`),
  CONSTRAINT `survey_survey_category_id_2d32ba53_fk_survey_category_id` FOREIGN KEY (`category_id`) REFERENCES `survey_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey_survey`
--

LOCK TABLES `survey_survey` WRITE;
/*!40000 ALTER TABLE `survey_survey` DISABLE KEYS */;
INSERT INTO `survey_survey` VALUES (1,'Heart Surgery Guidelines','HEA_MUR_1','{\"elements\": [{\"id\": 1, \"type\": \"Comment Box\", \"options\": [], \"questiontext\": \"How is your heart rate?\"}, {\"id\": 2, \"type\": \"Radio Button\", \"options\": [\"90-120 bpm\", \"80-110 bpm\", \"50-100 bpm\", \"100-150 bpm\"], \"questiontext\": \"Can you rate your bpm level here?\"}], \"surveyName\": \"Heart Surgery Guidelines\", \"description\": \"Post OP Heart Surgery Guidelines\"}',NULL,'Post OP Heart Surgery Guidelines',1,'2024-04-27 04:03:25.521338','2024-05-01 05:33:38.567777',1,1),(2,'Knee Surgery Guidelines','KNE_MUR_1','{\"elements\": [{\"id\": 1, \"type\": \"Single Textbox\", \"options\": [], \"questiontext\": \"How is your knee?\"}, {\"id\": 2, \"type\": \"Comment Box\", \"options\": [], \"questiontext\": \"If there is any pain, can you explain me about the areas of pain?\"}, {\"id\": 3, \"type\": \"Radio Button\", \"options\": [\"Upper Knee\", \"Lower Knee\", \"None of the above\"], \"questiontext\": \"Which is your exact pain area?\"}, {\"id\": 4, \"type\": \"Radio Button\", \"options\": [\"Below 18\", \"18 - 30\", \"30 - 50\", \"Above 50\"], \"questiontext\": \"Can you specify your age category?\"}, {\"id\": 5, \"type\": \"Comment Box\", \"options\": [], \"questiontext\": \"Final thoughts on the survey?\"}], \"surveyName\": \"Knee Surgery Guidelines\", \"description\": \"Pre Op Guidelines for Knee Surgery\"}',NULL,'Pre Op Guidelines for Knee Surgery',1,'2024-04-30 03:59:18.784923','2024-05-03 04:02:26.731588',1,2),(3,'Heart Surgery Recommendations','HEA_MUR_2','{\"elements\": [{\"id\": 1, \"type\": \"Radio Button\", \"options\": [\"Yes\", \"No\"], \"questiontext\": \"Do you have any ache near your heart?\"}, {\"id\": 2, \"type\": \"Radio Button\", \"options\": [\"Medium\", \"High \", \"Mild\", \"Too High\"], \"questiontext\": \"If you have the pain, can you specify the severity of the pain?\"}, {\"id\": 3, \"type\": \"Comment Box\", \"options\": [], \"questiontext\": \"Can you explain us something about the pain that you have?\"}], \"surveyName\": \"Heart Surgery Recommendations\", \"description\": \"Pre OP Heart Surgery guidelines\"}',NULL,'Pre OP Heart Surgery guidelines',1,'2024-05-01 05:40:34.453553','2024-05-01 06:47:38.530085',1,1),(4,'Knee Surgery Guidelines 2','KNE_MUR_2','{\"elements\": [{\"id\": 1, \"type\": \"Radio Button\", \"options\": [\"Yes\", \"No\"], \"questiontext\": \"Do you have any pain under your knee\"}, {\"id\": 2, \"type\": \"Comment Box\", \"options\": [], \"questiontext\": \"Can you describe something about the pain that your are having?\"}, {\"id\": 3, \"type\": \"Check Button\", \"options\": [\"Upper Knee\", \"Lower Knee\", \"Knee Joint\", \"Full Leg\"], \"questiontext\": \"Can you select areas where you are feeling the pain?\"}], \"surveyName\": \"Knee Surgery Guidelines 2\", \"description\": \"Pre Op Guidelines for Knee Surgery\"}',NULL,'Pre Op Guidelines for Knee Surgery',1,'2024-05-01 07:08:12.657305','2024-05-01 07:11:10.201981',1,2),(5,'Knee Surgery Guidelines 3','KNE_MUR_3','{\"elements\": [{\"id\": 1, \"type\": \"Single Textbox\", \"options\": [], \"questiontext\": \"Do you have any pain in the area of operation has been done?\"}, {\"id\": 2, \"type\": \"Comment Box\", \"options\": [], \"questiontext\": \"If yes?, Kindly describe something about it\"}], \"surveyName\": \"Knee Surgery Guidelines 3\", \"description\": \"Post op knee surgery guidelines\"}',NULL,'Post op knee surgery guidelines',1,'2024-05-01 07:13:27.071391','2024-05-01 07:14:58.344915',1,2);
/*!40000 ALTER TABLE `survey_survey` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-07 11:40:16
