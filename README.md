# docsify-captions
Docsify captions plugin

This plugin set captions to images, tables and code listing blocks.
A paragraph below a image, table or code block with the format

```
Markdown image, table or code block here

<keyword> n: Caption text here.
```

where `<keyword>` can be: Figure, Table, Listing, Demo, Audio or Video. 
will be interpreted as a block caption.

It add an id `<keyword-n>` to previus block. Also, the caption is formatted: left part in bold and the caption text enclosed with `<em>`, `</em>` tags.

## Configuration

The keywords by default are english words but can be customized for different languages in plugin configuration as shown below

```
window.$docsify {
  ...
  captions: {
    language: 'es-AR',
    "es-AR": 'Figura|Tabla|Listado|Demo|Audio|Video'
  }
}
```
