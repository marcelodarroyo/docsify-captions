# docsify-captions
Docsify captions plugin

This plugin set captions to images, tables and code listing blocks.
A paragraph below a image, table or code block with the format

```
Markdown image, table or code block here

Figure/Table/Listing n: Caption text here.
```

will be interpreted as a block caption.

It add an id `<keyword-n>` to previus block. Also, the caption is formatted: left part in bold and the caption text enclosed with `<em>`, `</em>` tags.

## Configuration

The keywords by default are `Figure`, `Table` and `Listing` but it can be configured for different languages as shown below:

```
window.$docsify {
  ...
  captions: {
    language: 'es-AR',
    "es-AR": 'Figura|Tabla|Listado'
  }
}
```
