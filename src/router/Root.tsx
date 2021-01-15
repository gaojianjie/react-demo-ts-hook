import React, { useEffect, useState } from 'react' 
import { RouterItem } from '../types/router'
import { Route , Switch} from 'react-router-dom'
export interface IRoot {
    data?: number,
    route: Array<RouterItem>
}

type Props = IRoot

const Root = (props: Props) => {
    const { route } = props
    const [ oIndex, setOIndex ] = useState(0);

    useEffect(() => {
        console.log(oIndex)
    },[oIndex])

    const renders = (props:any, item:any) => {
        console.log(props, item, item)
        return (<item.component { ...props} {...item} />)
    }

    /**
     * 生成路由配置
    */
    const getRooter = (route: Array<RouterItem>) => {
        return route.map((item, index) => {
            return ( <Route path={item.path} key={index} render={(props:any) => renders(props, item)} />)
        })
    }

    return (<Switch>
        { getRooter(route) }
    </Switch>)
    
}

export default Root