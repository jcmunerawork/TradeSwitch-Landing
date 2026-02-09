export function navigateToSignUp() {
  window.open(
    'https://app.tradeswitch.io/signup',
    '_blank'
  );
}

export function downloadZip() {
  const url = 'assets/dist.zip';
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'dist.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    })
    .catch(() => {
      alert('Hubo un error al descargar el archivo.');
    });
}

export function navigateToGoogleWebStore() {
  window.open(
    'https://chromewebstore.google.com/detail/trade-switch/bpkodfagpblehloponilbaoopbmomecn',
    '_blank'
  );
}
