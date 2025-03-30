
    function showSection(id) {
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }
    
    function encrypt() {
        let text = document.getElementById("text").value;
        let shift = parseInt(document.getElementById("shift").value);
        let result = text.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt(0);
                let base = char >= 'a' ? 97 : 65;
                return String.fromCharCode(((code - base + shift) % 26) + base);
            }
            return char;
        }).join('');
        document.getElementById("encryptedText").innerText = result;
    }
    
    function decrypt() {
        let text = document.getElementById("cipherText").value;
        let shift = parseInt(document.getElementById("shiftDec").value);
        let result = text.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt(0);
                let base = char >= 'a' ? 97 : 65;
                return String.fromCharCode(((code - base - shift + 26) % 26) + base);
            }
            return char;
        }).join('');
        document.getElementById("decryptedText").innerText = result;
    }
    
    function loadVideo() {
        let url = document.getElementById("videoUrl").value;
        let videoId = url.split("v=")[1];
        if (videoId) {
            let ampersandPosition = videoId.indexOf("&");
            if (ampersandPosition !== -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
            document.getElementById("videoFrame").src = "https://www.youtube.com/embed/" + videoId;
        }
    }
    
    function copyToClipboard() {
        let text = document.getElementById("encryptedText").innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }
