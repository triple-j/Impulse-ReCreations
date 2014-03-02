$.facebox.settings.closeImage   = '/imgs/closelabel.png';
$.facebox.settings.loadingImage = '/imgs/loading.gif';

jQuery(document).ready(function($) {
  $('a[rel*=facebox]').facebox();
});
