export function navigateToSignUp() {
  window.open(
    'https://crismen2610.github.io/tradeManager-web/signup',
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
