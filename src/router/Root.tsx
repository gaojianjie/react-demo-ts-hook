import React, { useEffect, useState } from 'react' 
import { RouterItem } from '../types/router'
import { BrowserRouter, Route , Switch} from 'react-router-dom'
interface IRoot {
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

    /**
     * 生成路由配置
    */
    const getRooter = (route: Array<RouterItem>) => {
        return <Switch>
            {route.map((item, index) => {
                return <Route path={item.path} component={item.component} >
                    {item.children.length ? getRooter(item.children) : null} 
                </Route>
            })}
        </Switch>
    }

    return <BrowserRouter>
        { getRooter(route) }
    </BrowserRouter>
}

export default Root