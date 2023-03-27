
// Simple docsify plugin to format captions for images, tables and listings
// You can write captions below of images, tables or code blocks:
//      <keyword> n: caption text.
//      where <keyword> is 'Table' or 'Figure' or 'Listing' (by default)
// Keywords are user configurable. Just add the captions options attribute to
// the $docsify object:
//
//      window.$docsify = {
//          ...
//          captions: {
//              keywords: 'Tabla|Figura|Listado', // spanish keywords
//          }
//      }
//
// Captions are formatted: left part in bold, text in italics.
// Identifiers (<keyword-n>) are added to figures, tables and code blocks for
// referencing.
// 
// Author: Marcelo Arroyo

(function () {
     function docsifyCaptions(hook, vm) {
        
        // Invoked on each page load after new HTML has been appended to the DOM
        hook.doneEach(function () {
            const defaultOptions = {
                language: 'en',
                'en': 'Table|Figure|Listing',
                'es-AR': 'Tabla|Figura|Listado'
            };
            const userOptions = $docsify.captions || {};
            const options = {...defaultOptions, ...userOptions};
            const keywords = options[options.language];
            let pattern = new RegExp(`^ *(${keywords}) ([0-9]+): *(.*)$`, 'i');
            let elements = document.querySelectorAll('table, figure, pre, p');
            const media = ['IMG', 'VIDEO', 'AUDIO'];
            for (let e of elements) {
                if (e.tagName == 'P' && e.childNodes.length == 1) {
                    if (!media.includes(e.firstChild.tagName))
                        continue;
                }
                let caption = e.nextElementSibling;
                if (caption && caption.tagName == 'P') {
                    let match = caption.innerText.match(pattern);
                    if (match) {
                        e.id = match[1] + '-' + match[2];
                        caption.innerHTML = `<b>${match[1]} ${match[2]}</b>: ` + 
                                            `<em>${match[3]}</em>`;
                        caption.classList.add('caption');
                    }
                }
            }
        });
    }

    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat(docsifyCaptions, $docsify.plugins || []);
})();
