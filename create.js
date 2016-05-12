$(function(){
  $(".send").click(function(){
  // alert("sent!");
  if($(".email").val().match(/attach/)){
    alert("Did you forget to attach soomething?");
    if($("#attachment").val() === ""){
      alert("Did you forget to attach soomething?");
    }
  }
  });
});
// $(".save")
// $(".discard")
// $("")
// $("")
