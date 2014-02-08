<?php

	class PX_Template {

		private static $regions = array();
		private static $template_dir  = null;
		private static $template_file = "example.php";

		static function set_region($name, $content) {
			self::$regions[$name] = $content;
		}

		static function get_region($name, $px=true) {
			$html = isset(self::$regions[$name]) ? self::$regions[$name] : null;
			return ($px) ? PX::run($html) : $html;
		}

		static function set_template($name) {
			self::$template_file = "{$name}.php";
		}


		/**
		* @desc set template directory (add trailing slash(/) if needed)
		*/
		static function set_template_dir($directory) {
			if ( substr($directory, -1) != '/' ) {
				$directory .= '/';
			}
			self::$template_dir = $directory;
		}

		/**
		* @desc get template directory
		* $returns string
		*/
		static function get_template_dir() {
			$default_dir = dirname(__FILE__).'/templates/';
			return (self::$template_dir) ? self::$template_dir : $default_dir;
		}

		static function out($return = false) {
			$fullpath = self::get_template_dir().self::$template_file;
			$html = PX::run_file($fullpath);
			if ($return) {
				return $html;
			} else {
				echo $html;
			}
		}
	}
