let qrCodeInstance = null;
  
          function generateQRCode() {
              const inputText = document.getElementById("inputText").value;
              const qrCodeContainer = document.getElementById("qrCodeContainer");
  
              if (!inputText) {
                  alert("Please enter some text to generate the QR code.");
                  return;
              }
  
              // Clear previous QR code
              qrCodeContainer.innerHTML = "";
  
              // Create a new QR code
              qrCodeInstance = new QRCode(qrCodeContainer, {
                  text: inputText,
                  width: 200,
                  height: 200,
              });
          }
  
          function downloadQRCode() {
              if (!qrCodeInstance) {
                  alert("Please generate a QR code first.");
                  return;
              }
  
              // Convert the QR code container to a downloadable image
              const qrCodeContainer = document.getElementById("qrCodeContainer");
              const qrCodeImage = qrCodeContainer.querySelector("img");
  
              if (!qrCodeImage) {
                  alert("Error downloading QR code.");
                  return;
              }
  
              const downloadLink = document.createElement("a");
              downloadLink.href = qrCodeImage.src;
              downloadLink.download = "qrcode.png";
              downloadLink.click();
          }

          function clean_Content(){
            document.getElementById("inputText").value = " ";
          }