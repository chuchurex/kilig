import {defineType, defineField, defineArrayMember} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'productId',
      title: 'ID del Producto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'sku', title: 'SKU', type: 'string'}),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          {title: 'Cafe', value: 'cafe'},
          {title: 'Accesorios', value: 'accesorios'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'description', title: 'Descripcion', type: 'text'}),
    defineField({name: 'image', title: 'Imagen URL', type: 'url'}),
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({
      name: 'inStock',
      title: 'En Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'attributes',
      title: 'Atributos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Valor', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'value'},
          },
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Notas de Cata',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'variants',
      title: 'Variantes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'variantType'}],
        }),
      ],
    }),
    defineField({
      name: 'pricing',
      title: 'Precios',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Tipo',
          type: 'string',
          options: {
            list: [
              {title: 'Precio Fijo', value: 'fixed'},
              {title: 'Por Variante', value: 'by-variant'},
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'price',
          title: 'Precio Fijo',
          type: 'number',
          hidden: ({parent}) => parent?.type !== 'fixed',
        }),
        defineField({
          name: 'variantKey',
          title: 'Variante para Precio',
          type: 'string',
          hidden: ({parent}) => parent?.type !== 'by-variant',
        }),
        defineField({
          name: 'prices',
          title: 'Precios por Variante',
          type: 'array',
          hidden: ({parent}) => parent?.type !== 'by-variant',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'variant', title: 'Variante', type: 'string'}),
                defineField({name: 'price', title: 'Precio', type: 'number'}),
              ],
              preview: {
                select: {title: 'variant', subtitle: 'price'},
                prepare({title, subtitle}) {
                  return {
                    title: title || 'Sin variante',
                    subtitle: subtitle ? `$${Number(subtitle).toLocaleString('es-CL')}` : '',
                  }
                },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'snipcart',
      title: 'Snipcart',
      type: 'object',
      fields: [
        defineField({
          name: 'customFields',
          title: 'Campos Personalizados',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Nombre', type: 'string'}),
                defineField({name: 'variantId', title: 'ID Variante', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sortOrder',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {title: 'Orden Manual', name: 'sortOrder', by: [{field: 'sortOrder', direction: 'asc'}]},
    {title: 'Nombre', name: 'name', by: [{field: 'name', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'category', media: 'image'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Sin nombre',
        subtitle: subtitle === 'cafe' ? 'Cafe' : 'Accesorio',
      }
    },
  },
})
