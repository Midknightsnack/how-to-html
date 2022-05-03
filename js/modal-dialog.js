/**
 * Project: How-To-HTML
 * 
 * File: modalDialog.js
 * Programmer: Florentino Becerra
 * Date: 04/26/2022
 * Revised: 05/03/2022
 * 
 * Description: This script is responsible for performing actions
 * when a modal dialog is to be displayed to the end-user
 */


/**  showModalDialog
 * This function is responsible for displaying and providing
 * proper focus handling to the modal dialog to a screen reader
 * 
 * @return: void
 */

function showModalDialog() {
	// Declare elements we will be working with
	let modalDialogElem = document.getElementById("mdlgMain");
	let closeBtn = document.getElementById("closeBtn");

	// Show the dialog and place the screen reader's focus within the dialog
		// We will set focus to the close button
		// tip: Best to set focus into friendly portions of the modal, such as a form field or a button that invokes the closure of that dialog
	modalDialogElem.style.visibility = "visible";
	modalDialogElem.style.display = "block";
	closeBtn.focus();

}  // End of "showModalDialog"


/**  hideModalDialog
 * This function is responsible for dismissing a modal dialog
 * while ensuring that the screen reader reliably leaves the dialog back to the main page content
 * 
 * @return: void
 */

function hideModalDialog() {
	let modalDialogElem = document.getElementById("mdlgMain");
	let announceMsg = document.getElementById("announceMsg");
	let openBtn = document.getElementById("openBtn");

	// Hide the modal and return focus back to the button that opened it initially
	modalDialogElem.style.display = "none";
	// Safari on iOS with VoiceOver benefits from the visibility CSS property for appropriate awareness
	modalDialogElem.style.visibility = "hidden";

	announceMsg.innerHTML = "Modal dialog dismissed.";
	openBtn.focus();

	// Clear the message from the HTML so the screen reader doesn't redundantly read it when navigating
	// after 4 seconds
	setTimeout(clearAccessibleMessage, 4000);

}  // End of "hideModalDialog"


/**  clearAccessibleMessage
 * this is just a useful function to clear any messages that have already been
 * announced but that can be safely cleared from the document
 * For the time being, this just clears the message of the modal dialog being dismissed
 * Could potentially be used to clear various other elements that have messages for a screen reader to read
 * 
 * @return: void
 */

function clearAccessibleMessage() {
	document.getElementById("announceMsg").innerHTML = "";
}  // End of "clearAccessibleMessages"
