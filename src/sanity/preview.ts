'use client'

import {definePreview} from 'next-sanity/preview'

import {dataset, projectId} from './env'

export const usePreview = definePreview({projectId, dataset})
