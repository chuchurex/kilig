import {defineType, defineField} from 'sanity'

export const siteTheme = defineType({
  name: 'siteTheme',
  title: 'Tema Visual',
  type: 'document',
  fields: [
    defineField({
      name: 'colors',
      title: 'Colores',
      type: 'object',
      fields: [
        defineField({name: 'primary', title: 'Primario', type: 'string'}),
        defineField({name: 'secondary', title: 'Secundario', type: 'string'}),
        defineField({name: 'accent', title: 'Acento', type: 'string'}),
        defineField({name: 'light', title: 'Claro', type: 'string'}),
        defineField({name: 'white', title: 'Blanco', type: 'string'}),
        defineField({name: 'text', title: 'Texto', type: 'string'}),
        defineField({name: 'textLight', title: 'Texto Claro', type: 'string'}),
        defineField({name: 'success', title: 'Exito', type: 'string'}),
        defineField({name: 'error', title: 'Error', type: 'string'}),
      ],
    }),
    defineField({
      name: 'spacing',
      title: 'Espaciado',
      type: 'object',
      fields: [
        defineField({name: 'xs', title: 'XS', type: 'string'}),
        defineField({name: 'sm', title: 'SM', type: 'string'}),
        defineField({name: 'md', title: 'MD', type: 'string'}),
        defineField({name: 'lg', title: 'LG', type: 'string'}),
        defineField({name: 'xl', title: 'XL', type: 'string'}),
      ],
    }),
    defineField({
      name: 'radius',
      title: 'Bordes',
      type: 'object',
      fields: [
        defineField({name: 'sm', title: 'SM', type: 'string'}),
        defineField({name: 'md', title: 'MD', type: 'string'}),
        defineField({name: 'lg', title: 'LG', type: 'string'}),
      ],
    }),
    defineField({
      name: 'shadows',
      title: 'Sombras',
      type: 'object',
      fields: [
        defineField({name: 'sm', title: 'SM', type: 'string'}),
        defineField({name: 'md', title: 'MD', type: 'string'}),
        defineField({name: 'lg', title: 'LG', type: 'string'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Tema Visual'}
    },
  },
})
