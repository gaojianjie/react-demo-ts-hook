import React from 'react'

export interface RouterItem {
    path: string,
    component: React.ReactNode,
    children: Array<RouterItem>
}
