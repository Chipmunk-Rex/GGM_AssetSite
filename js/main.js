window.onload = function () {
  fetch("data/AssetList.csv")
    .then((response) => response.text())
    .then((csvData) => {
      const rows = csvData.split("\n");

      var count;
      rows.forEach((row) => {
        count ++;
        const columns = row.split(",");
        var name = columns[0];
        var modificationDate = columns[1];
        var link = columns[2];
        var imgLink = 'https://ggm.gondr.net/image/users/380/profile/IMG_8779.jpg';

        $(".main_assetList").append('<div class="main_assetBox"><div class="main_assetBox_imgbox"><img class="main_assetBox_img"src="' + imgLink +'"alt=""></div><div class="main_assetBox_data"><span class="main_assetBox_data_title font_jua-regular">'+ name +'</span>'+ '<div class="main_assetBox_data_date font_jua-regular">'+ modificationDate +'</div>' +'<div class="main_assetBox_data_buttons"><img class="main_assetBox_data_infoBtn button"src="https://cdn-icons-png.flaticon.com/128/5258/5258991.png" alt=""><a href='+ link +'><img class="main_assetBox_data_downloadBtn button"src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png" alt=""></a></div></div></div>');
        console.log(columns);
      });
    });
};


