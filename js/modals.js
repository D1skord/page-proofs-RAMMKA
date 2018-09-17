function DownloadModal(state) {
    document.getElementById('modal-downLoad').style.display = state;
	document.getElementById('wrap1').style.display = state;
}
function BuyModal(state) {
    document.getElementById('modal-buy').style.display = state;
	document.getElementById('wrap2').style.display = state;
    document.getElementById('modal-downLoad').style.display = "none";
        document.getElementById('wrap1').style.display = "none";
}
function CollectionModal(state) {
    document.getElementById('modal-collection').style.display = state;
	document.getElementById('wrap3').style.display = state;
}
