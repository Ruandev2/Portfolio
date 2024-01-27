function  dowCurriculo(){
    // Localiozaçao do arquivo PDF
    const url = '/assets/pdf/Curriculo-ruan-Dev..pdf'

    const filename = 'Curriculo-ruan-Dev.pdf';

    fetch(url)
        .then(response => response.blob())
        .then(blob=>{
            // Cria um objeto URL para o \blob
            const blobURL = window.URL.createObjectURL(blob);
          

            // Cria um elemento de link temporario
            const a = document.createElement('a')
            a.href = blobURL;
            a.download = filename || 'dowmload';

            // Adiciona o link ao documento
            document.body.appendChild(a);

            // Simula um clique no link para iniciar dowmload
            a.click();

            // Remove o elemento de link temporario
            window.URL.revokeObjectURL(blobURL);
            document.body.removeChild(a);
        })
        .catch(error =>{
            console.error('Erro ao baixar o curriculo',error);
            alert('Error ao baixar o curriculo.Por favor , tente novamente')
        });
}