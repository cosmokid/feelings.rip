$(function() {
	var indexValue;

	$("button").click(function() {
		if ($("#userCmnt").val().length == "") {
			alert("Please Enter Your Comment");
			return;
		}
		var userCmnt = $("#userCmnt").val();
		if ($("#submit").hasClass("editNow")) {
			$("#cmntContr>div.viewCmnt")
				.eq(indexValue)
				.children("p")
				.html(userCmnt);
			$("#submit").removeClass("editNow");
			$("#submit")[0].innerText = "Submit Anonymously";
		} else {
			$("#cmntContr").append(`<div class='viewCmnt'><p>${userCmnt}</p><div><span class='edit'>Edit</span><span class='delete'>Hide</span></div></div>`);
		}
		$("#userCmnt").val("");
	});

	// Delete
	$("#cmntContr").on("click", ".delete", function() {
		confirm("Remove from feed coformation");
		$(this).parent().parent().remove();
	});
	// Edit
	$("#cmntContr").on("click", ".edit", function() {
		var toEdit = $(this).parent().parent().children("p")[0].innerText;
		$("#userCmnt")[0].value = toEdit;
		$("#submit")[0].innerText = "Submit Edit";
		// console.log(toEdit)
		$("button").addClass("editNow");
		indexValue = $(this)
			.parent("div.viewCmnt")
			.index();
	});
});
