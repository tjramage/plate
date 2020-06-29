import { DeserializeHtml, getElementDeserializer } from '@udecode/core';
import { IMAGE, ImageDeserializeOptions } from './types';

export const deserializeImage = ({
  typeImg = IMAGE,
}: ImageDeserializeOptions = {}): DeserializeHtml => ({
  element: getElementDeserializer(typeImg, {
    tagNames: ['IMG'],
    createElement: (el) => ({
      type: typeImg,
      url: el.getAttribute('src'),
    }),
  }),
});
