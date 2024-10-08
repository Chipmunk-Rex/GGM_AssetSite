window.onload = function () {
  fetch("../data/AssetList.csv")
    .then((response) => response.text())
    .then((csvData) => {
      const rows = csvData.split("\n");

      var count;
      rows.forEach((row) => {
        count++;
        const columns = row.split(",");
        var name = columns[0];
        var modificationDate = columns[1];
        var link = columns[2];
        var imgLink =
          "https://ggm.gondr.net/image/users/380/profile/IMG_8779.jpg";

        $(".main_assetList").append(
          '<div class="main_assetBox"><div class="main_assetBox_imgbox"><img class="main_assetBox_img"src="' +
            imgLink +
            '"alt=""></div><div class="main_assetBox_data"><span class="main_assetBox_data_title font_jua-regular">' +
            name +
            "</span>" +
            '<div class="main_assetBox_data_date font_jua-regular">' +
            modificationDate +
            "</div>" +
            '<div class="main_assetBox_data_buttons"><img class="main_assetBox_data_infoBtn button"src="https://cdn-icons-png.flaticon.com/128/5258/5258991.png" alt=""><a href=' +
            link +
            '><img class="main_assetBox_data_downloadBtn button"src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png" alt=""></a></div></div></div>'
        );
      });
    });
};

var autoSearch = false;

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementsByClassName("main_SearchIcon")[0]
    .addEventListener("click", function () {
      search();
    });

  document
    .getElementsByClassName("main_SearchInput")[0]
    .addEventListener("keyup", function (event) {
      if (autoSearch) search();
      else if (event.key == "Enter") search();
      else if (
        document.getElementsByClassName("main_SearchInput")[0].value.length ==
          0 ||
        document.getElementsByClassName("main_SearchInput")[0].value == ""
      ) {
        search();
      }
    });

  document
    .getElementsByClassName("main_SearchIcon")[0]
    .addEventListener("dblclick", function (e) {
      console.log("dbclick");
      autoSearch = !autoSearch;
      if (autoSearch) {
        e.target.classList.add("green");
      } else {
        e.target.classList.remove("green");
      }
    });
});

/// 검색
function search() {
  var searchInput = document
    .getElementsByClassName("main_SearchInput")[0]
    .value.toLowerCase();
  var assetBox = document.getElementsByClassName("main_assetBox");
  var assetBoxDataTitle = document.getElementsByClassName(
    "main_assetBox_data_title"
  );
  var assetBoxDataDate = document.getElementsByClassName(
    "main_assetBox_data_date"
  );

  for (var i = 0; i < assetBox.length; i++) {
    if (
      assetBoxDataTitle[i].textContent
        .toLocaleLowerCase()
        .includes(searchInput) ||
      assetBoxDataDate[i].textContent.toLocaleLowerCase().includes(searchInput)
    ) {
      assetBox[i].style.display = "flex";
    } else {
      assetBox[i].style.display = "none";
    }
  }
}
