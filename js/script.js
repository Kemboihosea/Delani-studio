$(document).ready(function () {

    //toggle what to do.
    $('#design').click(function () {
        $('#design-content').show(function () {
            $('#design').hide('fast');
        });
    });
    $('#design-content').click(function () {
        $('#design').show(function () {
            $('#design-content').hide('fast');
        });
    });
  
    $('#dev').click(function () {
        $('#dev-content').show(function () {
            $('#dev').hide('fast');
        });
    });
    $('#dev-content').click(function () {
        $('#dev').show(function () {
            $('#dev-content').hide('fast');
        });
    });

document.getElementById("product").onclick = function() {
    GFGfun()
};

function GFGfun() {
    document.getElementById(
      "development").innerHTML = "All engineers are fluent in the latest enterprise, mobile and web development technologies They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming";
}
