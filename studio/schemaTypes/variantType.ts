import {defineType, defineField, defineArrayMember} from 'sanity'

export const variantType = defineType({
  name: 'variantType',
  title: 'Tipo de Variante',
  type: 'document',
  fields: [
    defineField({
      name: 'variantId',
      title: 'ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Opciones',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Valor', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'value'},
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'variantId'},
  },
})
