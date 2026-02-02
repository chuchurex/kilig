import {defineType, defineField, defineArrayMember} from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Configuracion del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'store',
      title: 'Tienda',
      type: 'object',
      fields: [
        defineField({name: 'id', title: 'ID', type: 'string'}),
        defineField({name: 'name', title: 'Nombre', type: 'string'}),
        defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
        defineField({name: 'description', title: 'Descripcion', type: 'text'}),
        defineField({name: 'logo', title: 'Logo', type: 'cloudinary.asset'}),
        defineField({name: 'favicon', title: 'Favicon', type: 'cloudinary.asset'}),
        defineField({name: 'language', title: 'Idioma', type: 'string'}),
        defineField({
          name: 'currency',
          title: 'Moneda',
          type: 'object',
          fields: [
            defineField({name: 'code', title: 'Codigo', type: 'string'}),
            defineField({name: 'locale', title: 'Locale', type: 'string'}),
            defineField({name: 'decimals', title: 'Decimales', type: 'number'}),
          ],
        }),
        defineField({name: 'year', title: 'Ano Copyright', type: 'number'}),
      ],
    }),
    defineField({
      name: 'snipcart',
      title: 'Snipcart',
      type: 'object',
      fields: [
        defineField({name: 'apiKey', title: 'API Key', type: 'string'}),
        defineField({name: 'modalStyle', title: 'Estilo Modal', type: 'string'}),
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Navegacion',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Href', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'tag', title: 'Tag', type: 'string'}),
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitulo', type: 'string'}),
        defineField({
          name: 'cta',
          title: 'Boton CTA',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'href', title: 'Href', type: 'string'}),
          ],
        }),
        defineField({name: 'backgroundImage', title: 'Imagen de Fondo', type: 'cloudinary.asset'}),
      ],
    }),
    defineField({
      name: 'about',
      title: 'Seccion Nosotros',
      type: 'object',
      fields: [
        defineField({name: 'enabled', title: 'Habilitado', type: 'boolean'}),
        defineField({name: 'sectionId', title: 'ID de Seccion', type: 'string'}),
        defineField({name: 'tag', title: 'Tag', type: 'string'}),
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({
          name: 'paragraphs',
          title: 'Parrafos',
          type: 'array',
          of: [defineArrayMember({type: 'text'})],
        }),
        defineField({
          name: 'highlight',
          title: 'Destacado',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Titulo', type: 'string'}),
            defineField({name: 'text', title: 'Texto', type: 'text'}),
          ],
        }),
        defineField({name: 'closingText', title: 'Texto de Cierre', type: 'text'}),
        defineField({
          name: 'images',
          title: 'Imagenes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'image', title: 'Imagen', type: 'cloudinary.asset'}),
                defineField({name: 'alt', title: 'Alt', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'productSections',
      title: 'Secciones de Productos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string'}),
            defineField({name: 'tag', title: 'Tag', type: 'string'}),
            defineField({name: 'title', title: 'Titulo', type: 'string'}),
            defineField({name: 'subtitle', title: 'Subtitulo', type: 'string'}),
            defineField({name: 'category', title: 'Categoria', type: 'string'}),
            defineField({name: 'gridStyle', title: 'Estilo Grilla', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'object',
      fields: [
        defineField({name: 'enabled', title: 'Habilitada', type: 'boolean'}),
        defineField({
          name: 'images',
          title: 'Imagenes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'image', title: 'Imagen', type: 'cloudinary.asset'}),
                defineField({name: 'alt', title: 'Alt', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contacto',
      type: 'object',
      fields: [
        defineField({name: 'enabled', title: 'Habilitado', type: 'boolean'}),
        defineField({name: 'sectionId', title: 'ID de Seccion', type: 'string'}),
        defineField({name: 'tag', title: 'Tag', type: 'string'}),
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({
          name: 'locations',
          title: 'Ubicaciones',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Nombre', type: 'string'}),
                defineField({name: 'address', title: 'Direccion', type: 'text'}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'object',
          fields: [
            defineField({name: 'number', title: 'Numero', type: 'string'}),
            defineField({name: 'display', title: 'Mostrar', type: 'string'}),
          ],
        }),
        defineField({name: 'email', title: 'Email', type: 'string'}),
        defineField({
          name: 'hours',
          title: 'Horario',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'days', title: 'Dias', type: 'string'}),
                defineField({name: 'time', title: 'Hora', type: 'string'}),
              ],
            }),
          ],
        }),
        defineField({name: 'paymentMethodsImage', title: 'Imagen Medios de Pago', type: 'cloudinary.asset'}),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
      ],
    }),
    defineField({
      name: 'fonts',
      title: 'Tipografias',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Titulos',
          type: 'object',
          fields: [
            defineField({name: 'family', title: 'Familia', type: 'string'}),
            defineField({name: 'url', title: 'Google Fonts URL', type: 'url'}),
          ],
        }),
        defineField({
          name: 'body',
          title: 'Cuerpo',
          type: 'object',
          fields: [
            defineField({name: 'family', title: 'Familia', type: 'string'}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Configuracion del Sitio'}
    },
  },
})
