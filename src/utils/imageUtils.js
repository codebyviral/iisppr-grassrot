import { toPng } from 'html-to-image';

export function downloadImage(element) {
  toPng(element)
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'social-media-post.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      console.error('Error generating image:', error);
    });
}