$("body").append(
    $("<table>")
    .attr("id","data").attr("border","1px")
    .append(
        $("<tr>")
        .append($("<th>").text("NAME"))
        .append($("<th>").text("ROLL NO."))
        .append($("<th>").text("YEAR"))
    )
    .append(
        $("<tr>")
        .append($("<td>").text("Manas Agarwal"))
        .append($("<td>").text("180401"))
        .append($("<td>").text("Y18"))
    )
    .append(
        $("<tr>")
        .append($("<td>").text("Virat Kohli"))
        .append($("<td>").text("150335"))
        .append($("<td>").text("Y15"))
    )
    .append(
        $("<tr>")
        .append($("<td>").text("Alfreds Futterkiste"))
        .append($("<td>").text("180233"))
        .append($("<td>").text("Y18"))
    )
    .append(
        $("<tr>")
        .append($("<td>").text("Centro comercial Moctezuma"))
        .append($("<td>").text("170765"))
        .append($("<td>").text("Y17"))
    )
    .append(
        $("<tr>")
        .append($("<td>").text("Ernst Handel"))
        .append($("<td>").text("180768"))
        .append($("<td>").text("Y18"))
    )
    .append(
        $("<tr>")
        .append($("<td>").text("Island Trading"))
        .append($("<td>").text("180348"))
        .append($("<td>").text("Y18"))
    )
)
$(document).ready(function(){
    $("button").on("click",function(){
        var value=$("#myinput").val().toUpperCase();
        $("#data tr").filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
        });
    });
});