'use client'

import {definePreview} from 'next-sanity/preview'

import {dataset, projectId} from '@/sanity.client'

export const usePreview = definePreview({projectId, dataset})
