import React, { useEffect, useState } from 'react' 
import { RouterItem } from '../types/router'
interface IRoot {
    data?: number,
    route: Array<RouterItem>
}

type Props = IRoot

const Root = (props: Props) => {
    const { data, route } = props
    const [ oIndex, setOIndex ] = useState(0);

    useEffect(() => {
        console.log(oIndex)
    },[oIndex])

    const getRooter = (route: Array<RouterItem>) => {
        let maps:any = [];
        route.map((item, index) => {

        })
        return maps
    }

    return getRooter(route)
}

export default Root