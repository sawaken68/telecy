function textform_add(){
  var value = document.getElementById('about_telecy').value;
  if(value == '11'){
    document.getElementById('text_reason').style.display = "flex";
    console.log("テスト1")
  }else{
    document.getElementById('text_reason').style.display = "none";
    console.log("テスト2")
  }
}

window.onload = textform_add;