CREATE TABLE `general_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) DEFAULT NULL,
  `type` varchar(256) DEFAULT NULL,
  `tags` varchar(256) DEFAULT NULL,
  `parent` bigint(20) DEFAULT NULL,
  `bin_data` blob DEFAULT NULL,
  `json_data` json DEFAULT NULL,
  `str_data` text DEFAULT NULL,
  `created_at` datetime  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
