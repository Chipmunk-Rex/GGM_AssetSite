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

        $(".main_assetList").append('<div class="main_assetBox"><div class="main_assetBox_imgbox"><img class="main_assetBox_img"src="https://ggm.gondr.net/image/users/397/profile/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-06-02%20040653.png"alt=""></div><div class="main_assetBox_data"><span class="main_assetBox_data_title jua-regular">'+ name +'</span><div class="main_assetBox_data_buttons"><img class="main_assetBox_data_infoBtn button"src="https://cdn-icons-png.flaticon.com/128/5258/5258991.png" alt=""><a href='+ link +'><img class="main_assetBox_data_downloadBtn button"src="https://cdn-icons-png.flaticon.com/128/2550/2550337.png" alt=""></a></div></div></div>');

        console.log(columns);
      });
    });
};


