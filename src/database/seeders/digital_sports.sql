CREATE DATABASE  IF NOT EXISTS `digitalsports` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `digitalsports`;

-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: digitalsports
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Adidas','2021-03-04 14:19:25',NULL,NULL),(2,'Nike','2021-03-04 14:19:58',NULL,NULL),(3,'Puma','2021-03-04 23:23:55',NULL,NULL),(4,'Lotto','2021-03-04 14:19:58',NULL,NULL),(5,'Fila','2021-03-04 14:19:59',NULL,NULL),(6,'Havaianas','2021-03-04 14:19:59',NULL,NULL),(7,'Reebok','2021-03-04 14:19:59',NULL,NULL),(8,'Topper','2021-03-04 14:19:59',NULL,NULL),(9,'Umbro','2021-03-04 14:19:59',NULL,NULL),(10,'Under Armour','2021-03-04 14:19:59',NULL,NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_product` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `price` decimal(7,2) unsigned NOT NULL,
  `amount` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `cart_id` bigint(20) unsigned NOT NULL,
  `created_ad` timestamp NOT NULL DEFAULT current_timestamp() ,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkProducts_idx` (`product_id`),
  KEY `fkCart_idx` (`cart_id`),
  CONSTRAINT `fkcart` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkproducts` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `buy_total` decimal(7,2) unsigned NOT NULL,
  `payment_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkpayment_idx` (`payment_id`),
  KEY `fkuser_idx` (`user_id`),
  CONSTRAINT `fkpayment` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkuser` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `method` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `public` varchar(45) NOT NULL,
  `shipping` varchar(45) NOT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `promPrice` decimal(10,0) DEFAULT NULL,
  `size_id` bigint(20) NOT NULL,
  `brand_id` bigint(20) NOT NULL,
  `sport_id` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `adfasdf_idx` (`sport_id`),
  KEY `fkBrands_idx` (`brand_id`),
  KEY `fkSizes_idx` (`size_id`),
  CONSTRAINT `fkBrands` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkSizes` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkSports` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Zapatillas Under Armour Charged Pursuit 2','Para tus días de running son perfectas las Zapatillas Under Armour Charged Pursuit 2 por su diseño te harán rendir mejor en entrenamiento y carrera, mientras amortigua tus pisadas gracias a su media suela en espuma que te da estabilidad y firmeza a la hora de correr.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Mix de materiales Hi\r\n\r\nBeneficios: Amortiguación\r\n\r\nComposición: Capellada: Mesh / Suela: Caucho\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Importado\r\n\r\nMarca: Under Armour','1614870373787.jpg',2,'lanzamientos','hombres','gratis',9799,9599,14,10,1,'2021-03-20 13:53:04','2021-03-04 15:06:13','2021-03-20 13:53:04'),(2,'Remera Nike Therma','Ideal para entrenar durante los días fríos, la Remera Nike Therma te brinda la comodidad y protección que necesitas, esta diseñada especialmente con tejido Therma que te mantiene cálido y libre de sudor. Se adapta a tu cuerpo, dándote flexibilidad en cada movimiento de tu rutina intensa.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Todo el dia\r\n\r\nMaterial: Poliéster\r\n\r\nCuello: Redondo\r\n\r\nManga: Larga\r\n\r\nCalce: Regular\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Importado\r\n\r\nMarca: Nike','1616026806559.jpg',5,'ofertas','hombres','correo',6699,2599,3,2,1,'2021-03-20 13:53:08','2021-03-18 00:20:06','2021-03-20 13:53:08'),(3,'Zapatillas Adidas Terrex Agravic Trail Running','Las zapatillas Adidas Terrex Agravic de Trail Running te permiten llegar a nuevos lugares. Confeccionadas en su parte superior de malla perforada resistente al desgaste. Con mediasuela de EVA y suela Traxion para una óptima adherencia que te permitirán pasar de una superficie a otra sin perder tu rendimiento.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Mix de materiales low\r\n\r\nBeneficios: Estabilidad\r\n\r\nComposición: Capellada: Sintetico y Mesh / Suela: Caucho\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Adidas','1616248434947.jpg',4,'recomendados','hombres','gratis',10499,10899,11,1,1,'2021-04-03 12:17:12','2021-03-20 13:53:55','2021-04-03 12:17:12'),(4,'Botines Adidas Goletto VII TF','\r\nLos botines Adidas Goletto VII TF están construidos de exterior sintético liviano que te permite rendir al máximo. Su diseño resistente permite lidiar el desgaste inherente a las canchas de pasto sintético. La suela de caucho brinda el agarre que necesitás para superar a tus rivales y llegar al arco. Posee horma clásica y se ajusta con cordones para un máximo control.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Competencia\r\n\r\nMaterial: Sintético\r\n\r\nComposición: Capellada: Sintético/ Suela: Goma\r\n\r\nAjuste: Con Cordones\r\n\r\nTipo: Sintético/Fútbol 5\r\n\r\nCapellada: sintético\r\n\r\nEntresuela: Espuma\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Importado\r\n\r\nMarca: Adidas','1614871763277.jpg',3,'destacados','hombres','gratis',5699,5299,13,1,2,'2021-03-04 15:29:23','2021-03-04 15:29:23',NULL),(5,'Pack de Medias Nike X3 Everyday','Que tus pasos sigan siendo firmes y confortables con el de Pack Medias Nike X3 Everyday la banda de ajuste les da soporte a tus pies, su tecnología Dri-Fit además los mantiene secos y cómodos en todo momento.\r\n\r\nGénero: Unisex\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Algodón\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Nike','1614871855654.jpg',10,'ofertas','hombres','correo',1899,1299,2,2,1,'2021-03-04 15:30:55','2021-03-04 15:30:55',NULL),(6,' Previous Next Zapatillas Topper Boro II','Las Zapatillas Topper Boro II incorporan mayor estabilidad para combinar con cualquier outfit y brindarte un ajuste cómodo durante todo el día. Su diseño moderno y el estilo propio de la marca hacen un calzado que debes tener entre tus preferidos. Combinalas con la ropa que más te gusta, creando looks que llamarán la atención a donde vayas.\r\n\r\nGénero: Mujer\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Sintético\r\n\r\nBeneficios: Amortiguación\r\n\r\nComposición: Capellada: Sintético/ Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Importado\r\n\r\nMarca: Topper','1614872324801.jpg',5,'lanzamientos','mujeres','correo',5599,5399,7,8,1,'2021-03-04 15:38:44','2021-03-04 15:38:44',NULL),(7,'Zapatillas Nike Revolution 4','\r\nSi buscás un calzado para correr que a cada paso te otorgue total flexibilidad, ligereza y confort, las Zapatillas Nike Revolution 4 II son la opción perfecta.\r\n\r\nGénero: Mujer\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Nylon mesh low\r\n\r\nBeneficios: Amortiguación\r\n\r\nComposición: Capellada: Malla/ Entresuela: Espuma/ Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nTecnología: Reaction\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Nike','1614872412559.jpg',5,'destacados','mujeres','gratis',7200,6400,7,2,1,'2021-03-04 15:40:12','2021-03-04 15:40:12',NULL),(8,'Mochila Nike Heritage 2.0','Actividad: Moda\r\nImpermeable: No\r\nRegulable: Sí\r\nAncho(cm): 30\r\nAlto(cm): 43\r\nProfundidad(cm): 15\r\nCaracterísticas Técnicas:\r\nNike Heritage 2.\r\nTRANSPORTE CONVENIENTE Y CÓMODO CON TENELADAS DE BOLSILLOS.\r\nLa mochila Nike Heritage 2.\r\n0 combina simplicidad y funcionalidad con su diseño puro.\r\nLas tiras acolchadas para el hombro agregan un elemento de comodidad mientras lleva su equipo.\r\nEl poliéster densamente tejido proporciona soporte de peso pesado.\r\nEl compartimento principal con cierre ofrece espacio para su equipo.\r\nLa funda interna puede almacenar hasta una computadora portátil de 15´´.\r\nEl bolsillo frontal con cierre proporciona almacenamiento para artículos pequeños.\r\nLa manija de transporte en la parte superior es una opción de transporte alternativa.\r\nLas tiras de los hombros y el panel posterior están acolchados para un transporte cómodo.\r\nMás detalles.\r\nDimensiones: 43 cm.\r\nde alto x 30 cm.\r\nde ancho x 15 cm.\r\nde profundidad.\r\nTela: 100% poliéster.\r\nEspacio libre.\r\nImportado.\r\n100% POLIÉSTER.\r\n100% POLIÉSTER.\r\n','1617465041617.jpg',8,'lanzamientos','mujeres','correo',3799,3299,18,2,10,'2021-04-03 15:50:41','2021-04-03 15:50:41',NULL),(9,'Remera Adidas My Tee','La remera Adidas My Tee te brinda una sensación de comodidad que vas a tener que exigirte cada vez más para lograr transpirarla como se debe. El desarrollo de la marca en atletas profesionales llega a vos para que disfrutes cada vez más tu jornada de entrenamiento o cuando salís a correr. Con la remera Adidas My Tee poné tus límites cada vez más lejos.\r\n\r\nGénero: Mujer\r\n\r\nAdecuado para: Training\r\n\r\nCuello: Redondo\r\n\r\nManga: Corta\r\n\r\nCalce: Holgado\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Adidas\r\n\r\n','1614872854822.jpg',5,'recomendados','mujeres','correo',2799,1559,1,1,1,'2021-03-04 15:47:34','2021-03-04 15:47:34',NULL),(10,'Zapatillas Fila Lugano 6.0','\r\nLas zapatillas Fila Lugano 6.0 cuentan con una capellada confeccionada en material sintético de alta calidad junto con una entresuela de EVA inyectada y una suela de caucho que la vuelven ideal para desplegar tu mejor tenis sobre polvo de ladrillo.\r\n\r\nGénero: Niño\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Pu cuero sintetico low\r\n\r\nBeneficios: Durabilidad\r\n\r\nComposición: Capellada: Sintetico / Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Fila','1614873005880.jpg',5,'recomendados','niños','correo',4299,3789,6,5,10,'2021-03-04 15:50:05','2021-03-04 15:50:05',NULL),(11,'Zapatillas Topper Leon II','\r\nCon las Zapatillas Topper Leon II infantil los pequeños se sentirán más seguros en cada paso que den sin importar lugar donde estén, su cierre en velcro y cordones más el collar interno les da más ajuste y firmeza en el pie, así darán pasos más amortiguados y seguros.\r\n\r\nGénero: Niño\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Pu cuero sintético low\r\n\r\nBeneficios: Durabilidad\r\n\r\nComposición: Capellada: Sintetico / Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Velcro\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Importado\r\n\r\nMarca: Topper','1614873098448.jpg',10,'lanzamientos','niños','gratis',5299,5099,6,8,10,'2021-03-04 15:51:38','2021-03-04 15:51:38',NULL),(12,'Botines Lotto Magic TF Infantil','Los botines Lotto Magic te permiten comodidad en tus pies y precisión en cada pase. Un diseño moderno pero manteniendo la identidad de la marca y unos tapones que te dan seguridad en cada pisada. Convertite en el jugador que todos quieren en su equipo con los Magic de Lotto.\r\n\r\nGénero: Niño\r\n\r\nAdecuado para: Fútbol.\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Lotto','1614873317309.jpg',4,'recomendados','niños','correo',3199,2899,6,4,2,'2021-03-04 15:55:17','2021-03-04 15:55:17',NULL),(13,'Next Camiseta Puma Manchester City Alternativa 2020/21','\r\nLa camiseta Puma del Manchester City Alternativa 2020/21 rinde homenaje a la arquitectura de la ciudad, específicamente el distrito de Castlefield, con sus canales y el emblemático puente con los detalles en dorado. Tejida en poliéster, con cuello en V abierto y en la nuca el bordado \"City\" para mostrarle a tus rivales tu fanatismo por el club inglés. En el frente posee el logo \"Big Cat\" de Puma y el escudo del club.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Poliéster\r\n\r\nEstilo: Estampado\r\n\r\nCuello: En V\r\n\r\nManga: Corta\r\n\r\nCalce: Regular\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Importado\r\n\r\nMarca: Puma\r\n\r\nImportante: Los apliques utilizados son genéricos y no corresponden a los oficiales pertenecientes a este modelo.','1617465145759.jpg',4,'recomendados','hombres','gratis',7299,6999,3,3,2,'2021-04-03 15:52:25','2021-04-03 15:52:25',NULL),(14,'Camiseta Adidas Afa Selección Argentina','\r\nAlentá a la Selección con la Camiseta adidas Selección Argentina Oficial Femenina. Diseñada para las hinchas y los momentos de gloria, tiene un diseño moderno basado en la camiseta que usó el equipo del 93. Está confeccionada en tejido Climalite suave que mantiene tu cuerpo seco y ofrece un corte ligeramente más holgado que el de la camiseta que usan los jugadores en la cancha. De mangas cortas con inserciones de malla bajo los brazos y el escudo tejido de la Selección que demuestra tu amor por el equipo.\r\n\r\nGénero: Mujer\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Poliéster\r\n\r\nComposición: Tejido de punto doble | 51% Poliéster | 49% Poliéster reciclado\r\n\r\nCuello: Redondo\r\n\r\nManga: Corta\r\n\r\nCalce: Holgado\r\n\r\nEquipo / Atleta: Selección Argentina\r\n\r\nEscudo: Bordado\r\n\r\nDefinición de tecnología: climaLite: Permite la expansión de los líquidos evitando que se concentren en un solo punto, manteniendo la prenda seca y ligera.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Adidas\r\n\r\nImportante: Los apliques utilizados son genéricos y no corresponden a los oficiales pertenecientes a este modelo.','1614873760928.jpg',5,'destacados','hombres','correo',7999,7799,3,1,2,'2021-03-04 16:02:41','2021-03-04 16:02:40',NULL),(15,'Camiseta Nike Jaguares Home','\r\nCamiseta del equipo Argentino Jaguares, que se desempeña en el SuperRugby. Inspirada en el instinto cazador, de tela altamente transpirable para mantenerte seco y corte fit.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Competencia\r\n\r\nMaterial: Poliéster\r\n\r\nComposición: 100% poliéster.\r\n\r\nCuello: Redondo\r\n\r\nManga: Corta\r\n\r\nEquipo / Atleta: Jaguares\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Nike\r\n\r\nImportante: Los apliques utilizados son genéricos y no corresponden a los oficiales pertenecientes a este modelo.','1617465110641.jpg',4,'destacados','hombres','gratis',8500,6999,4,2,5,'2021-04-03 15:51:50','2021-04-03 15:51:50',NULL),(16,'Zapatillas Nike Flex Control Tr4','\r\nSi priorizas en comodidad y ligereza a la hora de entrenar o correr, las Zapatillas Nike Flex Control Tr4 están diseñadas para que explotes cada segundo de tu rutina, su parte superior liviana tiene una correa que te da mayor estabilidad y transpirabilidad. Su suela le da apoyo al pie en todos los movimientos que realices, brindándote también una mejor tracción, flexibilidad y amortiguación a tus pisadas.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Mix de materiales Hi\r\n\r\nBeneficios: Amortiguación\r\n\r\nComposición: Capellada: Malla/sintético/ Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Importado\r\n\r\nMarca: Nike','1614875303918.jpg',8,'ofertas','hombres','gratis',11499,10499,15,2,1,'2021-03-04 16:28:23','2021-03-04 16:28:23',NULL),(17,'Camiseta Nike Los Pumas Rugby Championship','La camiseta Nike de Los Pumas edición Rugby Championship 2020 está hecha para que sientas toda la garra Puma y acompañes al equipo frente a los mejores del mundo, estés donde estés. La tecnología Dri-FIT mantiene tu cuerpo fresco y pegado a tu cuerpo, evitando agarrones en tus jornadas de entrenamiento. Dejá todo y un poco más en el campo con la camiseta Nike de Los Pumas.\r\n\r\nGénero: Niño\r\n\r\nAdecuado para: Todo el día.\r\n\r\nMaterial: Poliéster.\r\n\r\nCuello: Redondo\r\n\r\nManga: Corta\r\n\r\nCalce: Regular\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Nike\r\n\r\nImportante: Los apliques utilizados son genéricos y no corresponden a los oficiales pertenecientes a este modelo.','1617465826150.jpg',4,'ofertas','hombres','gratis',8500,6300,5,2,5,'2021-04-03 16:03:46','2021-04-03 16:03:46',NULL),(18,'Camiseta PSG','','1615937446297.jpg',5,'ofertas','mujeres','gratis',5800,4560,3,2,5,'2021-03-16 23:30:51','2021-03-16 23:30:46','2021-03-16 23:30:51'),(19,'Bejamin de hacer quilombo','','1616248502900.jpg',5,'recomendados','hombres','gratis',7800,8200,7,5,3,'2021-03-27 21:40:23','2021-03-20 13:55:02','2021-03-27 21:40:23'),(20,'Zapatillas Adidas VS Pace','\r\nLas zapatillas Adidas VS Pace están confeccionadas en su exterior con cuero sintético y textil en su interior. Las 3 Tiras clásicas de la marca se posan sobre un exterior lateral con un perforado muy estético y con mucho estilo. La suela de caucho vulcanizada te ofrece mayor agarre en la superficie.\r\n\r\nGénero: Hombre\r\n\r\nAdecuado para: Todo el día.\r\n\r\nMaterial: Cuero sintético.\r\n\r\nComposición: Suela de caucho. Forro interno textil\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Adidas','1617470118057.jpg',4,'ofertas','hombres','gratis',7200,6600,8,1,10,'2021-04-03 17:15:18','2021-04-03 17:15:18',NULL),(21,'Pechera Lotto Stadio Rugby','Para mejores entrenamientos llegó la nueva Pechera Lotto Stadio, cómoda e ideal para que demuestres tus habilidades en equipo. Garantía: Contra defecto de fabricacion.','1617470428131.jpg',5,'lanzamientos','hombres','gratis',4200,3660,4,4,5,'2021-04-03 17:20:28','2021-04-03 17:20:28',NULL),(22,'Zapatillas Puma Nrgy Comet Adp','Las Zapatillas Puma Nrgy Comet Adp son tan ligeras que no recordarás que las llevas puestas, su capellada en malla y suela en goma, te da amortiguación en la pisada mientras te da comodidad y estilo.\r\n\r\nGénero: Unisex\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Sintético\r\n\r\nComposición: Capellada: Malla y Sintético / Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Puma','1617470601835.jpg',4,'recomendados','hombres','gratis',8200,6800,16,3,1,'2021-04-03 17:23:21','2021-04-03 17:23:21',NULL),(23,'Zapatillas Fila Plasma','Adecuado para: Todo el día.\r\n\r\nMaterial: Mesh\r\n\r\nBeneficios: Amortiguación\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Fila','1617471343719.jpg',5,'recomendados','niños','gratis',4700,4200,6,5,10,'2021-04-03 17:35:43','2021-04-03 17:35:43',NULL),(24,'Camiseta Nike Jag Dry Rep Away L4L','Presentamos la nueva Camiseta Nike Jaguares Alternativa, la nueva versión de la indumentaria oficial del combinado nacional para la próxima edición del Super Rugby.\r\n\r\nGénero: Hombre\r\n\r\nComposición: 100% Poliéster\r\n\r\nCuello: En V\r\n\r\nManga: Corta\r\n\r\nCalce: Entallado\r\n\r\nEquipo / Atleta: Jaguares\r\n\r\nEscudo: Bordado\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Nike\r\n\r\nImportante: Los apliques utilizados son genéricos y no corresponden a los oficiales pertenecientes a este modelo.\r\n\r\nRecomendados para vos','1617471098765.jpg',4,'recomendados','hombres','gratis',8200,6999,4,2,5,'2021-04-03 17:31:38','2021-04-03 17:31:38',NULL),(25,'Next Zapatillas Puma Flyer Runner','\r\nDiseñadas para runners que buscan velocidad y estabilidad las Zapatillas Puma Flyer Runner son ideales para iniciar tu jornada de ejercicio con comodidad y estilo, la espuma suave te dará una mejor amortiguación en cada paso, y mejor tracción cuando corrés o caminás.\r\n\r\nGénero: Mujer\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Nylon mesh low\r\n\r\nBeneficios: Amortiguación\r\n\r\nComposición: Capellada: Malla/sintético/ Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Puma','1617471205952.jpg',4,'recomendados','hombres','gratis',6299,5999,9,3,1,'2021-04-03 17:33:25','2021-04-03 17:33:25',NULL),(26,'Zapatillas Nike Court Royale Ac Printed','Género: Mujer\r\n\r\nAdecuado para: Todo el dia\r\n\r\nMaterial: Mix de materiales Hi\r\n\r\nBeneficios: Estabilidad\r\n\r\nComposición: Capellada: Sintetico / Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Importado\r\n\r\nMarca: Nike','1617472769795.jpg',7,'destacados','hombres','gratis',7599,6999,10,2,10,'2021-04-03 17:59:29','2021-04-03 17:59:29',NULL),(27,'Zapatillas Fila Discovery','Las Zapatillas Fila Discovery son ideales para entrenamientos livianos. Su capellada de mesh y su sistema slip-on ayudan a un calce cómodo y a la respirabilidad. La entresuela con tecnología Energized esta pensada para una mejor amortiguación y confort.\r\n\r\nGénero: Mujer\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Mesh calado\r\n\r\nBeneficios: Amortiguación\r\n\r\nComposición: Capellada: Malla/sintético/ Suela: Goma\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Fila','1617472755978.jpg',6,'destacados','mujeres','gratis',7499,7199,6,5,1,'2021-04-03 17:59:16','2021-04-03 17:59:15',NULL),(28,'Zapatillas Lotto Mega Light','Género: Mujer\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Mix de materiales low\r\n\r\nBeneficios: Estabilidad\r\n\r\nComposición: Capellada: Sintetico y Mesh / Suela: Caucho\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Lotto','1617472744293.jpg',4,'destacados','mujeres','gratis',4699,4299,8,4,1,'2021-04-03 17:59:04','2021-04-03 17:59:04',NULL),(29,'Next Zapatillas Puma Flyer Runner','Género: Unisex\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Mix de materiales low\r\n\r\nBeneficios: Ligereza\r\n\r\nComposición: Capellada: Sintetico y Mesh / Suela: Caucho\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Puma','1617472730740.jpg',3,'destacados','mujeres','gratis',7299,5999,7,3,1,'2021-04-03 17:58:50','2021-04-03 17:58:50',NULL),(30,'Zapatillas Topper Rod','Las Zapatillas Topper Rod están diseñadas para los tenistas mas clásicos. Están confeccionadas para brindar mayor respirabilidad y comodidad en cada pisada. Es un calzado de cuero sintético, ideal para el uso diario. Estas zapatillas tienen capelladas para dar mayor respirabilidad en la pisada y apliques de piezas a lo largo de todo el calzado para un mejor refuerzo y alta durabilidad. También posee entresuela de eva para amortiguar los impactos.\r\n\r\nGénero: Mujer\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Cuero sintético.\r\n\r\nComposición: Capellada: con perforaciones para dar mayor respirabilidad en la pisada y apliques de piezas a lo largo de todo el calzado para un mejor refuerzo y alta durabilidad.\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación.\r\n\r\nOrigen: Importado\r\n\r\nMarca: Topper','1617472690897.jpg',5,'ofertas','mujeres','gratis',6399,5999,7,8,1,'2021-04-03 17:58:10','2021-04-03 17:58:10',NULL),(31,' Zapatillas Topper Bulder','Género: Hombre\r\n\r\nAdecuado para: Outdoor\r\n\r\nMaterial: Mix de Materiales\r\n\r\nBeneficios: Resistencia\r\n\r\nComposición: Capellada: Sintetico y Mesh / Suela: Caucho\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Importado\r\n\r\nMarca: Topper\r\n\r\nRecomendados para vos','1617472678156.jpg',2,'ofertas','hombres','gratis',5699,5299,14,8,1,'2021-04-03 17:57:58','2021-04-03 17:57:58',NULL),(32,'Buzo Fila Net','Adecuado para: Todo el día\r\n\r\nMaterial: Algodón frizado\r\n\r\nCapucha: Con Capucha\r\n\r\nAbertura: Con Cordón\r\n\r\nCuello: Redondo\r\n\r\nBolsillo: Canguro\r\n\r\nEstilo: Con Logo\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Fila','1617472663399.jpg',4,'ofertas','hombres','gratis',4399,4199,3,5,10,'2021-04-03 17:57:43','2021-04-03 17:57:43',NULL),(33,'Zapatillas Lotto Mega Light','Género: Hombre\r\n\r\nAdecuado para: Todo el día\r\n\r\nMaterial: Mix de materiales low\r\n\r\nBeneficios: Estabilidad\r\n\r\nCaña: Baja\r\n\r\nAjuste: Con Cordones\r\n\r\nImportante: El peso del calzado puede variar según el número solicitado. Los talles corresponden a numeración de Argentina.\r\n\r\nGarantía: Contra defecto de fabricación\r\n\r\nOrigen: Nacional\r\n\r\nMarca: Lotto','1617472652196.jpg',4,'ofertas','hombres','gratis',5699,5299,11,4,10,'2021-04-03 17:57:32','2021-04-03 17:57:32',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `birthday` date DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user-profile_idx` (`user_id`),
  CONSTRAINT `user-profile` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'S','2021-03-04 14:22:07',NULL,NULL),(2,'M','2021-03-04 14:22:07',NULL,NULL),(3,'L','2021-03-04 14:22:07',NULL,NULL),(4,'XL','2021-03-04 14:22:07',NULL,NULL),(5,'XXL','2021-03-04 14:22:08',NULL,NULL),(6,'35','2021-03-04 14:22:08',NULL,NULL),(7,'36','2021-03-04 14:22:08',NULL,NULL),(8,'37','2021-03-04 14:22:08',NULL,NULL),(9,'38','2021-03-04 14:22:08',NULL,NULL),(10,'39','2021-03-04 14:22:08',NULL,NULL),(11,'40','2021-03-04 14:22:08',NULL,NULL),(12,'41','2021-03-04 14:22:08',NULL,NULL),(13,'42','2021-03-04 14:22:08',NULL,NULL),(14,'43','2021-03-04 14:22:08',NULL,NULL),(15,'44','2021-03-04 14:22:08',NULL,NULL),(16,'45','2021-03-04 14:22:08',NULL,NULL),(17,'46','2021-03-04 14:22:08',NULL,NULL),(18,'Unico','2021-03-04 15:43:16',NULL,NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sports` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES (1,'Running','2021-03-04 14:25:22',NULL,NULL),(2,'Fútbol','2021-03-04 14:25:22',NULL,NULL),(3,'Tenis','2021-03-04 14:25:22',NULL,NULL),(4,'Basquet','2021-03-04 14:25:22',NULL,NULL),(5,'Rugby','2021-03-04 14:25:22',NULL,NULL),(6,'Natación','2021-03-04 14:25:22',NULL,NULL),(7,'Voley','2021-03-04 14:25:22',NULL,NULL),(8,'Boxeo','2021-03-04 14:25:22',NULL,NULL),(10,'Urbano','2021-03-04 15:44:38',NULL,NULL);
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'alejandro@digitalsports.com','$2a$10$Vk/iUe/rEjZhLK7Oi3mFRuik1UL6LcVjzTn71X5FCJ2/6GSSgCY3K','2021-03-04 14:35:39','2021-03-04 14:35:39',NULL),(2,'agustin@digitalsports.com','$2a$10$d6vKRn.C1Op3UTX0n.OQDOqpz6sGF7paqRNTGlYs4FLiRFjFcg2oC','2021-03-04 14:36:35','2021-03-04 14:36:35',NULL),(3,'david@digitalsports.com','$2a$10$jMelraryFr7nc80uiNxNhu0rnae9i7Bsg9KS7eDj/d3MwxL15/kaS','2021-03-04 14:36:54','2021-03-04 14:36:54',NULL),(4,'jorge@digitalsports.com','$2a$10$qZqJz2owNjlxhxPSZ8cGvuKUpgAIWjofl5ypayWREwBuS8RXRjmdy','2021-03-04 14:37:19','2021-03-04 14:37:19',NULL),(5,'widomlanski@hotmail.com','$2a$10$qZqJz2owNjlxhxPSZ8cGvuKUpgAIWjofl5ypayWREwBuS8RXRjmdy','2021-03-04 23:34:33','2021-03-04 23:34:33',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-03 15:14:46
