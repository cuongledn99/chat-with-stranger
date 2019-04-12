$(document).on("click","#emotion",function(e){
    e.stopPropagation();
     $('.intercom-composer-emoji-popover').toggleClass("active");
 });
 
 $(document).click(function (e) {
     if ($(e.target).attr('class') != '.intercom-composer-emoji-popover' && $(e.target).parents(".intercom-composer-emoji-popover").length == 0) {
         $(".intercom-composer-emoji-popover").removeClass("active");
     }
 });
 
//  $('.intercom-emoji-picker-emoji').click(()=>{
//     // $('#message').text ($('#message').text()+$(this).html());
//     console.log($(this));
//  })
$(document).on("click",".intercom-emoji-picker-emoji",function(e){
     
    document.getElementById("message").value = document.getElementById("message").value +$(this).html();
  
    
});
 
 $('.intercom-composer-popover-input').on('input', function() {
     var query = this.value;
     if(query != ""){
       $(".intercom-emoji-picker-emoji:not([title*='"+query+"'])").hide(10);
     }
     else{
       $(".intercom-emoji-picker-emoji").show();
     }
 });