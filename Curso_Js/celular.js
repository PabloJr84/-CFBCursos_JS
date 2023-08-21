    // Configure a comunicação WebRTC
    const webrtc = new SimpleWebRTC({
        localVideoEl: 'localVideo',
        remoteVideoEl: 'remoteVideo',
        autoRequestMedia: true,
    });

    // Emita um sinal para conectar com outros pares (outra pessoa, neste caso, o seu celular)
    webrtc.on('readyToCall', function () {
        webrtc.joinRoom('sua-sala');
    });
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function (stream) {
        // Use o stream para transmitir para a sala no seu site
        webrtc.getLocalVideoEl().srcObject = stream;
    })
    .catch(function (error) {
        console.error('Erro ao acessar a câmera:', error);
    });