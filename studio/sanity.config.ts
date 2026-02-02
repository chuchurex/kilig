import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import type {StructureResolver} from 'sanity/structure'

const structure: StructureResolver = (S) =>
  S.list()
    .title('Kilig Coffee')
    .items([
      S.listItem()
        .title('Configuracion del Sitio')
        .child(S.document().schemaType('siteConfig').documentId('siteConfig').title('Configuracion')),
      S.listItem()
        .title('Tema Visual')
        .child(S.document().schemaType('siteTheme').documentId('siteTheme').title('Tema')),
      S.divider(),
      S.documentTypeListItem('product').title('Productos'),
      S.documentTypeListItem('variantType').title('Tipos de Variante'),
    ])

export default defineConfig({
  name: 'kilig',
  title: 'Kilig Coffee',
  projectId: '08b72xoc',
  dataset: 'production',
  plugins: [
    structureTool({structure}),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
